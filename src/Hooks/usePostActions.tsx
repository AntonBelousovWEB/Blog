import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';

interface PostData {
  title: string;
  content: string;
  photoId?: number;
}

const usePostActions = () => {
  const [message, setMessage] = useState<string>('');

  const createPost = async (postData: PostData): Promise<void> => {
    try {
      const response: AxiosResponse = await axios.post('http://localhost:5000/post', postData);
      setMessage('Post successfully created.');
      return response.data;
    } catch (error: any) {
      setMessage(`Failed to create post. ${(error.response && error.response.data.message) || error.message}`);
      throw error;
    }
  };

  const updatePost = async (id: number, postData: PostData): Promise<void> => {
    try {
      const response: AxiosResponse = await axios.patch(`http://localhost:5000/post/${id}`, postData);
      setMessage('Post successfully updated.');
      return response.data;
    } catch (error: any) {
      setMessage(`Failed to update post. ${(error.response && error.response.data.message) || error.message}`);
      throw error;
    }
  };

  const deletePost = async (id: number): Promise<void> => {
    try {
      await axios.delete(`http://localhost:5000/post/${id}`);
      setMessage('Post successfully deleted.');
    } catch (error: any) {
      setMessage(`Failed to delete post. ${(error.response && error.response.data.message) || error.message}`);
      throw error;
    }
  };

  const createPhoto = async (formData: FormData) => {
    try {
      const response = await axios.post(`http://localhost:5000/photos`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(`Photo successfully created. Photo ID: ${response.data.id}`);
    } catch (error: any) {
      setMessage(`Failed to create Photo. ${(error.response && error.response.data.message) || error.message}`);
      throw error;
    }
  };  

  return {
    message,
    createPost,
    createPhoto,
    updatePost,
    deletePost,
  };
};

export default usePostActions;