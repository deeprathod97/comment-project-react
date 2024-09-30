import React, { useState } from 'react';
import './App.css'; // Assuming you add styles in this file
import { FaComment } from 'react-icons/fa'; // Using FontAwesome for comment icon

const CommentComponent = () => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleIconClick = () => {
    setShowCommentBox(!showCommentBox);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !comment) {
      alert("Please enter both username and comment.");
      return;
    }

    const newComment = {
      id: commentsList.length + 1,
      username: username,
      comment: comment,
      avatar: 'https://via.placeholder.com/50', 
    };

    setCommentsList([newComment, ...commentsList]); // Add the new comment to the list
    setComment(''); // Clear the comment field
    setUsername(''); // Clear the username field
    setShowCommentBox(false); // Close the comment box after submission
  };

  return (
    <div className="comment-section">
      <div className="comment-icon" onClick={handleIconClick}>
        <FaComment size={24} />
      </div>

      {showCommentBox && (
        <div className="comment-box">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username"
            />
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Enter your comment"
              rows="4"
              cols="50"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      <div className="comments-display">
        {commentsList.map((item) => (
          <div key={item.id} className="comment-item">
            <img src={item.avatar} alt="avatar" className="comment-avatar" />
            <div className="comment-content">
              <strong>{item.username}</strong>
              <p>{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentComponent;
