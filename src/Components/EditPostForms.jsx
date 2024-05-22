// import React, { useState, useContext } from "react";
// import { PostContext } from "./PostContext";

// export const EditPostForm = ({ post }) => {
//   const { editContent } = useContext(PostContext);
//   const [updatedPost, setUpdatedPost] = useState({
//     title: post.title,
//     content: post.content,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     editContent(updatedPost, post.id);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Title"
//         value={updatedPost.title}
//         onChange={(e) =>
//           setUpdatedPost({ ...updatedPost, title: e.target.value })
//         }
//       />
//       <textarea
//         placeholder="Content"
//         value={updatedPost.content}
//         onChange={(e) =>
//           setUpdatedPost({ ...updatedPost, content: e.target.value })
//         }
//       />
//       <button type="submit">Save</button>
//     </form>
//   );
// };

import React, { useContext, useState } from "react";
import { PostContext } from "./PostContext";

const EditPostForm = ({ editPost, post }) => {
  const { categories } = useContext(PostContext);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [category, setCategory] = useState(post.category);

  const handleSubmit = (e) => {
    e.preventDefault();
    editPost({ title, content, category }, post.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Update Post</button>
    </form>
  );
};

export default EditPostForm;
