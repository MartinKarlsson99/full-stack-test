import './App.css'
import {useState} from 'react';

function App() {
    const [message, setMessage] = useState('');

    const handleClick = () =>
    {

        fetch('https://localhost:8080/')
            .then(response => response.json())
            .then(data => setMessage(data));
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
