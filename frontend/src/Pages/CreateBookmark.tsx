import {useState, useRef, useEffect} from 'react'
import {createBookmark, editBookmark} from "../misc/HelperFunctions.tsx";
import * as React from "react";
import {Bookmark} from "../misc/misc.tsx";
import {useNavigate, useParams} from "react-router-dom";

interface CreateBookmarkProps {
    editMode: boolean;
}

const CreateBookmarkPage: React.FC<CreateBookmarkProps> = ({editMode}) =>
{
    const urlRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const tagsRef = useRef<HTMLInputElement>(null);
    const [bookmark, setBookmark] = useState<Bookmark>(
        {id: 0, url:'', name:'', tags:[]}
    )
    const {params} = useParams();

    useEffect(() => {
        if (params !== undefined && editMode) {
            setBookmark(JSON.parse(params));
            setTags(bookmark.tags);
        }
    }, [params]);

    const setTags = (tags : string[]) =>
    {
        const temp = {
            id: bookmark.id,
            url: bookmark.url,
            name: bookmark.name,
            tags: tags,
        }
        setBookmark(temp);
    }

    const handleChange = () =>
    {
        if (urlRef.current && urlRef.current.value && nameRef.current && nameRef.current.value) {
            setBookmark({
                id: bookmark.id,
                url: urlRef.current.value,
                name: nameRef.current.value,
                tags: bookmark.tags
            });
        }
    }

    const navigate = useNavigate()
    const handleSubmit = () =>
    {
        if (urlRef.current && urlRef.current.value && nameRef.current && nameRef.current.value) {

            if (!editMode) {
                createBookmark(bookmark).then(res => {
                    if (res.ok) {
                        navigate('/');
                    }
                });
            }
            else{
                editBookmark(bookmark).then(res =>{
                    if (res.ok){
                        navigate('/');
                    }
                })
            }
        }
    }

    const handleAddTag = () =>
    {
        if (tagsRef && tagsRef.current && tagsRef.current.value !== '')
        {
            const result = bookmark.tags.findIndex((value:string) => value === tagsRef.current!.value);
            if (result == -1) {
                const copy = [...bookmark.tags, tagsRef.current.value];
                setTags(copy);
                tagsRef.current.value = '';

            }
            else
            {
                throw Error('Tag already exists');
            }
        }
        else throw Error('Tag name cannot be empty');

    }

    const handleRemoveTag = (e: any) =>
    {
        if (tagsRef && tagsRef.current) {
            const index = e.target.id;
            const copy = [...bookmark.tags];
            copy.splice(index, 1);
            setTags(copy);
            tagsRef.current.value = '';
        }
    }

    return(
        <div className={'create-bookmark'}>
            <input type={'url'} ref={urlRef} placeholder={'URL'} defaultValue={bookmark.url} onChange={handleChange}></input>
            <input type={'text'} ref={nameRef} placeholder={'Name'} defaultValue={bookmark.name} onChange={handleChange}></input>
            <input type={'text'} ref={tagsRef} placeholder={'Tag'} onChange={handleChange}></input>
            <button onClick={handleAddTag}>Add Tag</button>
            <div className={'tags-list'}>
                {bookmark.tags.map((value, index) =>{
                    return (
                        <div key={index} className={'tag-element'}>
                            <div>{value}</div>
                            <button id={index.toString()} onClick={handleRemoveTag}>X</button>
                        </div>);
                })}
            </div>
            <button onClick={handleSubmit}>Save Bookmark</button>
        </div>);
}

export default CreateBookmarkPage;