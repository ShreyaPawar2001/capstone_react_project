import React, { useState } from "react";
import './comment.css';
const CommentsSection = ({ videoData }) => {
  const [comments, setComments] = useState(videoData.comments);
  const [editedComment, setEditedComment] = useState("");

  // Edit comment
  const handleEdit = (commentId, newText) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.commentId === commentId
          ? { ...comment, text: newText, timestamp: new Date().toISOString() }
          : comment
      )
    );
    setEditedComment(""); // Clear the editing text input
  };

  // Delete comment
  const handleDelete = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.commentId !== commentId)
    );
  };

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.commentId} className="comment-item">
            <div className="comment-user">{comment.userId}</div>
            {editedComment === comment.commentId ? (
              <div>
                <textarea
                  value={comment.text}
                  onChange={(e) => setEditedComment(e.target.value)}
                />
                <button
                  onClick={() => handleEdit(comment.commentId, editedComment)}
                >
                  Save
                </button>
              </div>
            ) : (
              <p className="comment-text">{comment.text}</p>
            )}
            <span className="comment-timestamp">
              {new Date(comment.timestamp).toLocaleString()}
            </span>

            {/* Edit and Delete buttons */}
            <button onClick={() => setEditedComment(comment.commentId)}>
              Edit
            </button>
            <button onClick={() => handleDelete(comment.commentId)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsSection;
