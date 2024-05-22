import React, { useState, useContext } from "react";
import { PostContext } from "./PostContext";

const PostForm = ({ addPost }) => {
  const { categories } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content, category });
    setTitle("");
    setContent("");
    setCategory(categories[0]);
  };

  // const PostForm = ({ post, isEditing, onCancel }) => {
  //   const { addPost, editPost } = useContext(PostContext);
  //   const [title, setTitle] = useState(post ? post.title : "");
  //   const [content, setContent] = useState(post ? post.content : "");
  //   const [category, setCategory] = useState(post ? post.category : "");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (isEditing) {
  //     editPost(post.id, title, content, category);
  //   } else {
  //     addPost(title, content, category);
  //   }
  //   setTitle("");
  //   setContent("");
  //   setCategory("");
  //   if (onCancel) onCancel();
  // };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Add Post</button>

      {/* <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="" disabled>
          Select category
        </option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Education">Education</option>
      </select>
      <button type="submit">{isEditing ? "Edit" : "Add"} Post</button>
      {isEditing && <button onClick={onCancel}>Cancel</button>} */}
    </form>
  );
};

export default PostForm;
