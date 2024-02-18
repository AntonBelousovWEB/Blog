import axios from 'axios';
import { Post } from '../../types/Post';

export const fetchPosts = async (
    page: string | undefined, 
    cachedPages: { [key: string]: Post[] }, 
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>,
    setCachedPages: React.Dispatch<React.SetStateAction<{ [key: string]: Post[] }>>) => {
    try {
        if (cachedPages[page || '']) {
            setPosts(cachedPages[page || '']);
        } else {
            const perPage = 4;
            const response = await axios.get(`http://localhost:5000/post?page=${page}&perPage=${perPage}`);
            setPosts(response.data);
            setCachedPages({ ...cachedPages, [page || '']: response.data });
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

export const fetchMaxId = async (
    cachedMaxId: number | null, 
    setMaxId: React.Dispatch<React.SetStateAction<number | null>>, 
    setCachedMaxId: React.Dispatch<React.SetStateAction<number | null>>) => {
    try {
        if (cachedMaxId !== null) {
            setMaxId(cachedMaxId);
        } else {
            const response = await axios.get('http://localhost:5000/post/maxId');
            setMaxId(response.data.maxId);
            setCachedMaxId(response.data.maxId);
        }
    } catch (error) {
        console.error('Error fetching maxId:', error);
    }
};

export const fetchTags = async (
    cachedTags: string[] | null, 
    setTags: React.Dispatch<React.SetStateAction<string[] | null>>, 
    setCachedTags: React.Dispatch<React.SetStateAction<string[] | null>>) => {
    try {
        if (cachedTags !== null) {
            setTags(cachedTags);
        } else {
            const response = await axios.get('http://localhost:3000/tags.json');
            setTags(response.data.tags);
            setCachedTags(response.data.tags);
        }
    } catch (error) {
        console.error('Error fetching maxId:', error);
    }
}