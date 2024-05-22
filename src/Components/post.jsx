import React, { useContext, useState } from "react";
import { PostContext } from "./PostContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Post = ({ post }) => {
  const {
    deletePost,
    editPost,
    addComment,
    deleteComment,
    editComment,
    editCommentContent,
  } = useContext(PostContext);
  const [comment, setComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(post.id, comment);
      setComment("");
    }
  };

  return (
    <div className="Post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => editPost(post.id)}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button onClick={() => deletePost(post.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>

      <form onSubmit={handleAddComment}>
        <input
          type="text"
          placeholder="Leave a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>

      <div className="comments">
        {post.comments.map((comment) =>
          comment.isEditing ? (
            <EditCommentForm
              key={comment.id}
              postId={post.id}
              comment={comment}
              editCommentContent={editCommentContent}
            />
          ) : (
            <Comment
              key={comment.id}
              postId={post.id}
              comment={comment}
              deleteComment={deleteComment}
              editComment={editComment}
            />
          )
        )}
      </div>
    </div>
  );
};

const Comment = ({ postId, comment, deleteComment, editComment }) => {
  return (
    <div className="Comment">
      <p>{comment.text}</p>
      <button onClick={() => editComment(postId, comment.id)}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button onClick={() => deleteComment(postId, comment.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

const EditCommentForm = ({ postId, comment, editCommentContent }) => {
  const [text, setText] = useState(comment.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    editCommentContent(postId, comment.id, text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};
