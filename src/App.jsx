import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import PostsPage from "./pages/PostsPage";
import CreatePostPage from "./pages/CreatePostPage";
import SinglePostPage from "./pages/SinglePostPage";

const routes = {
  posts: "/posts",
  createPost: "/create-post",
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={routes.posts} element={<PostsPage />} />
          <Route path="posts/:postId" element={<SinglePostPage />} />
          <Route path={routes.createPost} element={<CreatePostPage />} />
          <Route path="*" element={<h4>Страница не найдена</h4>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
