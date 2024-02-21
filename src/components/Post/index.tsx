import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Header from "../Blog/Header/Header";
import { Post } from "../../types/Post";
import axios from "axios";
import { useFileName } from "../../Hooks/useFileName";
import Comments from "./Comments";

export default function PostPage() {
    const { postId } = useParams<{ postId: string | undefined }>();
    const [post, setPost] = useState<Post | null>(null);
    const { filename, extension } = useFileName(post?.file?.filename ?? '');

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
            {post ? (
                <div>
                    <Header />
                    <div className="posts_section">
                        <div className="title_wrap">
                           <h1 className="post_title">{post.title}</h1> 
                           <span>·</span>
                           <div></div>
                        </div>
                        {post && post.photo ? (
                            <img 
                                className="post_img"
                                src={`http://localhost:5000/uploads/${post.photo.filename}`} 
                                alt={String(post.photo.id)}
                            />
                        ) : null}
                        <h1 className="post_description">{post.content}</h1>
                        {post && post.file ? (
                            <div className="file_wrap">
                                <h1 className="title_file">Sources:</h1>
                                <div className="file">
                                    <Link 
                                        className="field" 
                                        to={`http://localhost:5000/uploads/${post.file.filename}`}>
                                            &#xf019;
                                    </Link>
                                    <div className="text">
                                        { filename.length > 8 ? 
                                        filename.slice(0, 8) + '...' : 
                                        filename }
                                        {extension}
                                    </div>
                                </div>
                            </div>
                        ) : null}
                        <Comments />
                    </div>
                </div>
            ) : (
                <div className='wrap'>
                    <div className="lds-ripple"><div></div><div></div></div>
                </div>
            )}
        </div>
    );
}