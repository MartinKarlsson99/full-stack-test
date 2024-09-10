import {SyntheticEvent, useEffect, useState} from "react";
import UrlRecord from "../Components/UrlRecord.tsx";
import {deleteBookmark, getBookmarks} from "../misc/HelperFunctions.tsx";
import { useNavigate } from "react-router-dom";
import {Bookmark} from "../misc/misc.tsx";

const ViewPage = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [editBookmark, setEditBookmark] = useState<Bookmark>();

    const handleGetBookmarks = () => {
        getBookmarks()
            .then(response => response.json())
            .then(data => {
                console.log('data:', data);
                setBookmarks(data)
            });
    }

    useEffect(() => {
        handleGetBookmarks();
    }, [])

    const handleRemove = (e : SyntheticEvent) =>
    {
        const element = e.target as HTMLElement;
        console.log(element.id);
        deleteBookmark(parseInt(element.id)).then(r => console.log(r));
    }

    const navigate = useNavigate();
    const handleCreate = () =>
    {
        const path = '/createbookmark';
        navigate(path);
    }

    const handleEdit = () =>
    {
        if (editBookmark) {
            const path = '/editbookmark/' + JSON.stringify({
                id: editBookmark.id,
                url: editBookmark.url,
                name: editBookmark.name,
                tags: editBookmark.tags
            });
            navigate(path);
        }
    }

    return(
        <div className={'view-page'}>
            {bookmarks.map((value, index) => {
                console.log(value);
                return (
                        <UrlRecord
                            key={index}
                            handleEdit={handleEdit}
                            setBookmark={setEditBookmark}
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
            <button onClick={handleEdit}>Edit Bookmark</button>
        </div>
    );

}
export default ViewPage;