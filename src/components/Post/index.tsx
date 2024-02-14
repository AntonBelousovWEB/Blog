import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "../Blog/Header";
import { Post } from "../../types/Post";
import axios from "axios";

export default function PostPage() {
    const { postId } = useParams<{ postId: string | undefined }>();
    const [post, setPost] = useState<Post | null>(null);

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
                    <div className="title_wrap">
                       <h1 className="post_title">{post.title}</h1> 
                       <span>·</span>
                       <div></div>
                    </div>
                    {post && post.photo.filename ? (
                        <img 
                            className="post_img"
                            src={`http://localhost:5000/uploads/${post.photo.filename}`} 
                            alt={String(post.photo.id)}
                        />
                    ) : null}
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