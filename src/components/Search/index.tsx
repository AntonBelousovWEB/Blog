import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../types/Post";
import axios from "axios";
import PostList from "../Blog/PostList";
import Header from "../Blog/Header/Header";

export default function Search() {
    const { search } = useParams<{ search: string | undefined }>();
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/post/searh?searchTerm=${search}`);
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchData();
    }, [search])

    return (
        <div className="container">
            <Header />
            <PostList posts={posts} />
        </div>
    )
}