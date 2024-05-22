// CommentForm.jsx
import React, { useState } from "react";

const CommentForm = ({ postId, addComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(postId, comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button type="submit">Comment</button>
    </form>
  );
};

export default CommentForm;
