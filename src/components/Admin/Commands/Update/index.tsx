import React, { useState } from "react";
import usePostActions from "../../../../Hooks/usePostActions";

export default function UpdateAdmin() {
    const { message, updatePost } = usePostActions();
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await updatePost(id, {title, content: desc });
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }

    return (
        <div className="wrap_admin">
            <form className="admin_form" onSubmit={handlePost}>
                <label>Update Post</label>
                {message && <p>{message}</p>}
                <input 
                    type="number"
                    placeholder="Id..."
                    value={id}
                    onChange={(e) => setId(Number(e.target.value))}
                    className='input_admin'
                />
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
                <button className='admin_button' type="submit">Update</button>
            </form>
        </div>
    )
}