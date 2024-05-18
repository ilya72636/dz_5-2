import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePostPage = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://dummyjson.com/posts/add", {
                title,
                body,
                userId: 1, 
            });
            if (response.status === 200 || response.status === 201) {
                navigate("/posts");
            }
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div>
            <h2>Создать пост</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Заголовок</label>
                    <input 
                        type="text" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Текст</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button type="submit">Создать</button>
            </form>
        </div>
    );
};

export default CreatePostPage;
