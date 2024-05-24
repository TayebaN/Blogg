import React, { useContext, useState } from "react";
import PostForm from "./PostForm";
import { Post } from "./post";
import EditPostForm from "./EditPostForms";
import { PostContext } from "./PostContext";
import { UserContext } from "../contexts/UserContext";

export const PostWrapper = () => {
  const {
    posts,
    addPost,
    deletePost,
    editPost,
    editContent,
    addComment,
    deleteComment,
    editComment,
    editCommentContent,
    filterByCategory,
    selectedCategory,
    categories,
  } = useContext(PostContext);

  const { user } = useContext(UserContext);
  const [showUserPosts, setShowUserPosts] = useState(false);

  const filteredPosts = showUserPosts
    ? posts.filter((post) => post.author === user)
    : selectedCategory === "All"
    ? posts
    : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="PostWrapper">
      <h1>Welcome to My Blog!</h1>

      <PostForm addPost={addPost} />
      <select
        onChange={(e) => filterByCategory(e.target.value)}
        value={selectedCategory}
      >
        {["All", ...categories].map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button onClick={() => setShowUserPosts(!showUserPosts)}>
        {showUserPosts ? "Show All Posts" : "Show My Posts"}
      </button>

      {filteredPosts.map((post) =>
        post.isEditing ? (
          <EditPostForm editPost={editContent} post={post} key={post.id} />
        ) : (
          <Post
            post={post}
            key={post.id}
            deletePost={deletePost}
            editPost={editPost}
            addComment={addComment}
            deleteComment={deleteComment}
            editComment={editComment}
            editCommentContent={editCommentContent}
          />
        )
      )}
    </div>
  );
};

export default PostWrapper;
