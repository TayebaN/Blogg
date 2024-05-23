import React, { useContext } from "react";
import PostForm from "./PostForm";
import { Post } from "./post";
import EditPostForm from "./EditPostForms";
import { PostContext } from "./PostContext";

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

  const filteredPosts =
    selectedCategory === "All"
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
