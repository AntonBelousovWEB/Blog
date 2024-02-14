import React, { useState } from "react";
import usePostActions from "../../../../Hooks/usePostActions";

const PhotoAdmin = () => {
  const { message, createPhoto } = usePostActions();
  const [file, setFile] = useState<File>();

  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        await createPhoto(formData);
      } else {
        console.error('File is undefined');
      }
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
          type="file"
          accept="image/png, image/jpeg"
          className='input_admin'
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button className='admin_button' type="submit">Create Photo</button>
      </form>
    </div>
  );
};

export default PhotoAdmin;