import './App.css'
import {useState} from 'react';



function App() {
    const [message, setMessage] = useState('');

    const handleClick = () =>
    {
        fetch('http://localhost:8080/hello', {
            method: 'GET',
            mode: 'cors',
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Allow-Credentials': '*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setMessage(data.name)
            });


    }

    return (
        <>
            <div>
                <button onClick={handleClick}>Change message</button>
                Current Message: {message}
            </div>
        </>
    )
}

export default App
