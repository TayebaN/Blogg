import React, { useContext } from "react";
import { PostContext } from "./PostContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../contexts/UserContext";

export const Post = ({
  post,
  deletePost,
  addComment,
  deleteComment,
  editComment,
  editCommentContent,
}) => {
  const { user } = useContext(UserContext);
  const { editPost } = useContext(PostContext);

  const handleDelete = () => {
    deletePost(post.id);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    const commentText = e.target.elements.comment.value;
    if (commentText) {
      addComment(post.id, `${user}: ${commentText}`);
      e.target.elements.comment.value = "";
    }
  };

  const handleDeleteComment = (commentId) => {
    deleteComment(post.id, commentId);
  };

  const handleEditComment = (commentId) => {
    editComment(post.id, commentId);
  };

  const handleEditCommentContent = (commentId, text) => {
    editCommentContent(post.id, commentId, text);
  };

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>
        <strong>Category:</strong> {post.category}
      </p>
      <p>
        <strong>Author:</strong> {post.author}
      </p>

      {user === post.author && (
        <div className="post-controls">
          <button onClick={() => editPost(post.id)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}

      <div className="comments">
        <h3>Comments:</h3>
        {post.comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            {(user === post.author || user === comment.author) && (
              <div>
                <button onClick={() => handleEditComment(comment.id)}>
                  <FontAwesomeIcon icon={faEdit} />{" "}
                  {comment.isEditing ? "Cancel" : ""}
                </button>
                <button onClick={() => handleDeleteComment(comment.id)}>
                  <FontAwesomeIcon icon={faTrash} />{" "}
                </button>
                {comment.isEditing && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleEditCommentContent(
                        comment.id,
                        e.target.elements.text.value
                      );
                    }}
                  >
                    <input
                      type="text"
                      name="text"
                      defaultValue={comment.text}
                    />
                    <button type="submit">Save</button>
                  </form>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleAddComment}>
        <input type="text" name="comment" placeholder="Add a comment" />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};
