import {useState, useRef} from 'react'

interface BookmarkProps {
    id: number
    url: string;
    name: string;
    tags: string[];
}

const CreateBookmarkPage = () =>
{
    const urlRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const tagsRef = useRef<HTMLInputElement>(null);
    const [tags, setTags] = useState<string[]>([]);

    const handleSubmit = () =>
    {
        if (urlRef.current && urlRef.current.value && nameRef.current && nameRef.current.value) {
            fetch('http://localhost:8080/createbookmark', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Allow-Credentials': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: 1,
                    url: urlRef.current.value,
                    name: nameRef.current.value,
                    tags: tags
                })
            }).then(res => {
                if (res.ok) {
                    urlRef.current!.value = '';
                    nameRef.current!.value = '';
                    tagsRef.current!.value = '';
                }
            });
        }
    }

    const handleAddTag = () =>
    {
        if (tagsRef && tagsRef.current)
        {
            const result = tags.findIndex((value:string) => value === tagsRef.current!.value);
            if (result == -1) {
                const copy = [...tags, tagsRef.current.value];
                setTags(copy);
            }
            else
            {
                throw Error('Failed to add tag');
            }
        }

    }

    const handleRemoveTag = (e : any) =>
    {
        if (tagsRef && tagsRef.current) {
            const index = e.target.id;
            const copy = [...tags];
            copy.splice(index, 1);
            setTags(copy);
            tagsRef.current.value = '';
        }

    }

    return(
        <div className={'create-bookmark'}>
            <input type={'url'} ref={urlRef}></input>
            <input ref={nameRef}></input>
            <input ref={tagsRef}></input>
            <button onClick={handleAddTag}>Add Tag</button>
            <div className={'tags-list'}>
                {tags.map((value, index) =>{
                    return (
                        <li key={index} className={'tag-element'}>
                            {value}
                            <button id={index.toString()} onClick={handleRemoveTag}>X</button>
                        </li>);
                })}
            </div>
            <button onClick={handleSubmit}>Add Bookmark</button>
        </div>);
}

export default CreateBookmarkPage;