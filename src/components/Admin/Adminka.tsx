import axios from "axios";
import React, { useState } from "react";

export default function Adminka() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const postData = {
            title: title,
            content: desc
        };  
        axios.post('http://localhost:5000/post', postData)
            .then(response => {
                setMessage('Post successfully created.');
            })
            .catch(error => {
                setMessage(`Failed to create post. ${error.response.data.message}.`);
            });
    }

    return (
        <div className="wrap_admin">
            <form className="admin_form" onSubmit={handlePost}>
                <label>Posting</label>
                {message && <p>{message}</p>}
                <input
                  type="text"
                  placeholder="Title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className='input_admin'
                />
                <textarea
                  placeholder="Description..."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className='textarea_admin scroll'
                />
                <button className='admin_button' type="submit">Post</button>
            </form>
        </div>
    )
}