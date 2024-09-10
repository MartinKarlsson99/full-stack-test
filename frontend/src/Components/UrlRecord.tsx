import * as React from "react";

interface UrlRecordProps{
    id: number;
    url : string;
    name: string;
    tags: string[];
    handleRemove: () => void;
    handleEdit: () => void;
}

const UrlRecord: React.FC<UrlRecordProps> = ({id, url, name, tags}) =>
{
    return(
        <div key={id} className={'url-card'}>
            <div className={'url-card-header'}>
                <div className={'url-card-name'}>{name}</div>
                <button>Edit</button>
                <button>X</button>
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