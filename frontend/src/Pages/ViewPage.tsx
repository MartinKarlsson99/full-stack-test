import {useEffect, useState} from "react";
import UrlRecord from "../Components/UrlRecord.tsx";

const ViewPage = () => {
    const [bookmarks, setBookmarks] = useState([]);

    const getBookmarks = () => {
        fetch('http://localhost:8080/bookmarks', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Allow-Credentials': '*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setBookmarks(data)
            });
    }

    useEffect(() => {
        getBookmarks();
    }, [])

    const handleRemove = () =>
    {

    }

    const handleEdit = () =>
    {

    }

    return(
        <div className={'view-page'}>
            {bookmarks.map((value, index) => {
                return (
                    <UrlRecord
                        key={index}
                        id={value.id}
                        url={value.url}
                        name={value.name}
                        tags={value.tags}
                        handleEdit={handleEdit}
                        handleRemove={handleRemove}
                    />);
                }
            )}
        </div>
    );

}
export default ViewPage;