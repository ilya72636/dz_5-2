import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get("https://dummyjson.com/posts");
            setPosts(response.data.posts);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Список постов</h2>
            <Link to="/create-post">Создать пост</Link>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            {post.title.slice(0, 25)} ...
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsPage;
