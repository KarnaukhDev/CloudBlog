import React from "react";
import {Routes, Route} from "react-router-dom";
import PostsPage from "./components/PostsPage";
import PostPage from "./components/PostPage";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PostsPage />} />
            <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
    );
}

export default Router;