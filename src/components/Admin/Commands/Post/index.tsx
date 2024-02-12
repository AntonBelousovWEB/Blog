import React, { useState } from "react";
import usePostActions from "../../../../Hooks/usePostActions";

const PostAdmin = () => {
  const { message, createPost } = usePostActions();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createPost({ title, content: desc });
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

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
  );
};

export default PostAdmin;