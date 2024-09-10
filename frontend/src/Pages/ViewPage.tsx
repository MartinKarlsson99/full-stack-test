import {useEffect, useState} from "react";
import UrlRecord from "../Components/UrlRecord.tsx";
import {getBookmarks} from "../HelperFunctions.tsx";

const ViewPage = () => {
    const [bookmarks, setBookmarks] = useState([]);

    const handleGetBookmarks = () => {
        getBookmarks()
            .then(response => response.json())
            .then(data => {
                setBookmarks(data)
            });
    }

    useEffect(() => {
        handleGetBookmarks();
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