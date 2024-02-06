import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "../Blog/Header";
import { Post } from "../../types/Post";
import axios from "axios";

export default function PostPage() {
    const { postId } = useParams<{ postId: string | undefined }>();
    const [post, setPost] = useState<Post | null>(null); // Установка начального состояния в null

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/post/${postId}`);
                setPost(response.data[0]);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchData();
    }, [postId])

    return (
        <div className="container">
            <Header />
            {post ? (
                <div className="posts_section">
                    <h1 className="post_title">{post.title}<span>·</span></h1>
                    <h1 className="post_description">{post.content}</h1>
                </div>
            ) : (
                <div className='wrap'>
                    <div className="lds-ripple"><div></div><div></div></div>
                </div>
            )}
        </div>
    );
}