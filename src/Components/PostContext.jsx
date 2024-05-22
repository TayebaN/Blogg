import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const PostContext = createContext();

const generateId = () => uuidv4();

const categories = ["Technology", "Health", "Science", "Education", "Sports"];

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (posts) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }, [posts]);

  const addPost = (post) => {
    setPosts([
      ...posts,
      {
        id: generateId(),
        title: post.title,
        content: post.content,
        category: post.category,
        comments: [],
        isEditing: false,
      },
    ]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const editPost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, isEditing: !post.isEditing } : post
      )
    );
  };

  const editContent = (updatedPost, id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, ...updatedPost, isEditing: false } : post
      )
    );
  };

  const addComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { id: generateId(), text: comment, isEditing: false },
              ],
            }
          : post
      )
    );
  };

  const deleteComment = (postId, commentId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.filter(
                (comment) => comment.id !== commentId
              ),
            }
          : post
      )
    );
  };

  const editComment = (postId, commentId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? { ...comment, isEditing: !comment.isEditing }
                  : comment
              ),
            }
          : post
      )
    );
  };

  const editCommentContent = (postId, commentId, text) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? { ...comment, text, isEditing: false }
                  : comment
              ),
            }
          : post
      )
    );
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <PostContext.Provider
      value={{
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
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
