import './App.css'
import {useState} from 'react';
import CreateBookmarkPage from "./Pages/CreateBookmark.tsx";



function App() {
    const [message, setMessage] = useState('');

    const handleGetBookmarks = () =>
    {
        fetch('http://localhost:8080/bookmarks', {
            method: 'GET',
            mode: 'cors',
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Allow-Credentials': '*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setMessage(JSON.stringify(data))
            });
    }


    return (
        <>
            <div>
                <button onClick={handleGetBookmarks}>Get Bookmarks</button>
                Current Message: {message}
                <CreateBookmarkPage/>
            </div>
        </>
    )
}

export default App
