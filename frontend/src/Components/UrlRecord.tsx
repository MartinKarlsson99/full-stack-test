import * as React from "react";
import {Bookmark} from "../misc/misc.tsx";
import {useEffect} from "react";

interface UrlRecordProps{
    bookmark: Bookmark;
    setBookmark: React.Dispatch<React.SetStateAction<Bookmark | undefined>>;
    handleRemove: (e: any) => void;
    handleEdit: (e: any) => void;
}

const UrlRecord: React.FC<UrlRecordProps> = ({bookmark, setBookmark, handleRemove, handleEdit}) =>
{

    useEffect(() => {
        console.log(bookmark);
    });

    const id = bookmark.id;
    const name = bookmark.name;
    const url = bookmark.url;
    const tags = bookmark.tags

    const beforeEdit = (e: any) =>
    {
        if (setBookmark !== undefined) {
            setBookmark({id: id, name: name, url: url, tags: tags});
            handleEdit(e);
        }
    }

    return(
        <div key={id} className={'url-card'}>
            <div className={'url-card-header'}>
                <div className={'url-card-name'}>{name}</div>
                <button id={id.toString()} onClick={beforeEdit}>Edit</button>
                <button id={id.toString()} onClick={handleRemove}>X</button>
            </div>
            <div className={'url-card-url'}>{url}</div>
            <div className={'url-card-tag-list'}>
                {tags.map((value: string, index: number) => {
                    return <div className={'url-card-tag'} key={index}>{value}</div>
                })}
            </div>
        </div>
    );
}
export default UrlRecord;