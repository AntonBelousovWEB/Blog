import React, { useContext, useEffect, useState } from "react";
import usePostActions from "../../Hooks/usePostActions";
import { Link, useParams } from "react-router-dom";
import { Comment } from "../../types/Post";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

export default function Comments() {
    const { postId } = useParams<{ postId?: string }>();
    const [comments, setComments] = useState<Comment[]>([]);
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const { message, createComment } = usePostActions();
    const { user } = useContext(AuthContext);

    const handleAddComment = async () => {
        try {
            if (postId) {
                await createComment(postId, content);
            } else {
                console.error('Post ID is undefined');
            }
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:5000/comments/commentByPost?postId=${postId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setComments(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchData();
    }, [postId]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="comments_section">
            {user ? (
                <div>
                    {message && <p>{message}</p>}
                    <div className="input-comment_wrap">
                        <input 
                            className="comment_input" 
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Enter the comment..." 
                            type="text"
                        />
                        <button onClick={handleAddComment} className='send'>
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"></path>
                            </svg>
                        </button>
                        <span>·</span>
                        <div></div>
                    </div>
                    {comments.map((comment, index) => (
                        <div className="comment" key={index}>
                            <h1 className="user_name-comment">{comment.user.name}</h1>
                            <h1 className="content_comment">{comment.content}</h1>
                        </div>
                    ))}
                </div>
            ) : (
                <h1 className="warring">To be able to read and add comments, please <Link to={"/join"}>register</Link></h1>
            )}
        </div>
    );
}