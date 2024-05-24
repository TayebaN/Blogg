import React, { useState, useContext } from "react";
import { PostContext } from "./PostContext";

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && category) {
      addPost({ title, content, category });
      setTitle("");
      setContent("");
      setCategory("");
    }
  };
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
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option value="Technology">Technology</option>
        <option value="Health">Health</option>
        <option value="Science">Science</option>
        <option value="Education">Education</option>
        <option value="Sports">Sports</option>
      </select>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
