import * as React from "react";
import {Bookmark} from "../misc/misc.tsx";

interface UrlRecordProps{
    bookmark: Bookmark;
    handleRemove: (e: any) => void;
    handleEdit: (e: any) => void;
}

const UrlRecord: React.FC<UrlRecordProps> = ({bookmark, handleRemove, handleEdit}) =>
{

    const id = bookmark.id;
    const name = bookmark.name;
    const url = bookmark.url;
    const tags = bookmark.tags

    return(
        <div key={id} className={'url-card'}>
            <div className={'url-card-header'}>
                <div className={'url-card-name'}>{name}</div>
                <button id={id.toString()} onClick={handleEdit}>Edit</button>
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