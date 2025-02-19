import React, { useState } from 'react';
import axios from 'axios';

function Bot() {
    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");
    const handleButtonClick = () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            response => {
                setAnswer(response.data[0].toString());
            }
        ).catch(error => {
            console.error("There was an error!", error);
        });
    }

    return (
        <div className='box'>
            <span> Enter your shopping list </span>
            <div className='chat'>
                <textarea onChange={(event) => setPrompt(event.target.value)} className='text'></textarea>
                <span>{prompt}</span>
                <span>{answer}</span>
                <button onClick={handleButtonClick} className='btn'>Send</button>
            </div>
        </div>
    );
}
export default Bot;