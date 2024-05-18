import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePostPage = () => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const { postId } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`https://dummyjson.com/posts/${postId}`);
            setPost(response.data);
        };
        fetchPost();
    }, [postId]);

    useEffect(() => {
        const fetchComments = async () => {
            const response = await axios.get(`https://dummyjson.com/posts/${postId}/comments`);
            setComments(response.data.comments);
        };
        fetchComments();
    }, [postId]);

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <h4>Комментарии</h4>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.body}</li>
                ))}
            </ul>
        </div>
    );
};

export default SinglePostPage;
