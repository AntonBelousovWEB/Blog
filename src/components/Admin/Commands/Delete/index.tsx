import React, { useState } from "react";
import usePostActions from "../../../../Hooks/usePostActions";

export default function DeleteAdmin() {
    const { message, deletePost } = usePostActions();
    const [id, setId] = useState(0);

    const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await deletePost(id);
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    }

    return (
        <div className="wrap_admin">
            <form className="admin_form" onSubmit={handlePost}>
                <label>Delete Post</label>
                {message && <p>{message}</p>}
                <input 
                    type="number"
                    placeholder="Id..."
                    value={id}
                    onChange={(e) => setId(Number(e.target.value))}
                    className='input_admin'
                />
                <button className='admin_button' type="submit">Delete</button>
            </form>
        </div>
    )
}