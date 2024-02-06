import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import '../../styles/App.css';
import Header from './Header';
import PostList from './PostList';
import Pagination from './Pagination';
import { Post } from '../../types/Post';

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [maxId, setMaxId] = useState<number | null>(null);
    const [cachedPages, setCachedPages] = useState<{ [key: string]: Post[] }>({});
    const [cachedMaxId, setCachedMaxId] = useState<number | null>(null);
    const location = useLocation();
    const { page } = useParams<{ page: string | undefined }>();

    const perPage = 4;

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          if (cachedPages[page || '']) {
            setPosts(cachedPages[page || '']);
          } else {
            const response = await axios.get(`http://localhost:5000/post?page=${page}&perPage=${perPage}`);
            setPosts(response.data);
            setCachedPages({ ...cachedPages, [page || '']: response.data });
          }
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };

      fetchPosts();
    }, [page, location, cachedPages]);

    useEffect(() => {
      const fetchMaxId = async () => {
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

      fetchMaxId();
    }, [cachedMaxId]);

    const totalPages = maxId ? Math.abs(maxId / perPage) : 1;

    return (
      <div className='container'>
        <Header />
        {posts.length > 0 ? (
          <div className='content_page'>
            <PostList posts={posts} />
            <Pagination totalPages={totalPages} currentPage={parseInt(page || '1')} />
          </div>
        ) : (
          <div className='wrap'>
            <div className="lds-ripple"><div></div><div></div></div>
          </div>
        )}
      </div>
    );
}

export default Blog;