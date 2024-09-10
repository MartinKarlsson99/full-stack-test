import {SyntheticEvent, useEffect, useState} from "react";
import UrlRecord from "../Components/UrlRecord.tsx";
import {deleteBookmark, filterBookmarksByTags, getBookmarks} from "../misc/HelperFunctions.tsx";
import { useNavigate } from "react-router-dom";
import {Bookmark} from "../misc/misc.tsx";

const ViewPage = () => {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [filteredBookmarks, setFilteredBookmarks] = useState<Bookmark[]>([]);

    const handleGetBookmarks = () => {
        getBookmarks()
            .then(response => response.json())
            .then(data => {
                console.log('data:', data);
                setBookmarks(data)
                setFilteredBookmarks(data);
            });
    }

    useEffect(() => {
        handleGetBookmarks();
    }, [])

    useEffect(() => {
        setFilteredBookmarks(bookmarks);
    }, [bookmarks]);

    const handleRemove = (e : SyntheticEvent) =>
    {
        const element = e.target as HTMLElement;
        const elementId = parseInt(element.id);
        deleteBookmark(elementId).then(r => {
            console.log(r)
            if (r.ok)
            {
                console.log("DELETING");
                const index = bookmarks.findIndex((value) =>{
                   return value.id === elementId;
                });
                const copy = [...bookmarks];
                copy.splice(index, 1);
                console.log(copy);
                setBookmarks(copy);
            }
        });
    }

    const navigate = useNavigate();
    const handleCreate = () =>
    {
        const path = '/createbookmark';
        navigate(path);
    }

    const getBookmarkById = (id: number): Bookmark | undefined =>{
        const result = bookmarks.find((bookmark) => bookmark.id === id);
        if (result) return result;
        return undefined;
    }

    const handleEdit = (e: any) =>
    {
        const target = getBookmarkById(parseInt(e.target.id));
        console.log(target);
        if (target !== undefined) {
            const path = '/editbookmark/' + JSON.stringify({
                id: target.id,
                url: target.url,
                name: target.name,
                tags: target.tags
            });
            navigate(path);
        }
    }

    const handleFilter = (e: any) =>
    {
        const value = e.target.value;
        if (value === '')
        {
            setFilteredBookmarks(bookmarks);
        }
        else
        {
            const res = filterBookmarksByTags(bookmarks, [value]);
            setFilteredBookmarks(res);
        }
    }

    return(
        <div className={'view-page'}>
            <input onChange={handleFilter} placeholder={'Search for tag'}></input>
            {filteredBookmarks.map((value, index) => {
                return (
                        <UrlRecord
                            key={index}
                            handleEdit={handleEdit}
                            handleRemove={handleRemove}
                            bookmark={{
                                id:value.id,
                                url:value.url,
                                name:value.name,
                                tags:value.tags
                            }}/>);
                }
            )}
            <button onClick={handleCreate}>Create New Bookmark</button>
        </div>
    );

}
export default ViewPage;