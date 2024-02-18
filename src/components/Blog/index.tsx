import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../../styles/App.css';
import Header from './Header/Header';
import PostList from './PostList';
import Pagination from './Pagination';
import { Post } from '../../types/Post';
import { fetchMaxId, fetchPosts } from '../Fetch';

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [maxId, setMaxId] = useState<number | null>(null);
    const [cachedPages, setCachedPages] = useState<{ [key: string]: Post[] }>({});
    const [cachedMaxId, setCachedMaxId] = useState<number | null>(null);
    const location = useLocation();
    const { page } = useParams<{ page: string | undefined }>();
    const perPage = 4;

    useEffect(() => {
        const storedTags = localStorage.getItem('selectedTags');
        const selectedTags = storedTags ? JSON.parse(storedTags) : [];
        fetchPosts(page, cachedPages, setPosts, setCachedPages, selectedTags);
    }, [page, location, cachedPages]);

    useEffect(() => {
        fetchMaxId(cachedMaxId, setMaxId, setCachedMaxId);
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