import React, { useState } from 'react';


// Modal component
const Modal = ({ isOpen, onClose, title, content, image }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <img src={image} alt="Modal Image" />
          <h2>{title}</h2>
          <p>{content}</p>
          <div className="comments">
            <h3>Comments</h3>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button type="submit">Add Comment</button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

// Parent component
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  // Sample data
  const items = [
    {
      id: 1,
      title: 'Sample Title 1',
      content: 'Sample Content 1',
      image: 'sample-image-1.jpg',
    },
    {
      id: 2,
      title: 'Sample Title 2',
      content: 'Sample Content 2',
      image: 'sample-image-2.jpg',
    },
  ];

  return (
    <div>
      {/* Render items */}
      {items.map((item) => (
        <div key={item.id}>
          <a href="#" onClick={() => openModal(item)}>
            {item.title}
          </a>
        </div>
      ))}

      {/* Render modal */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={selectedItem?.title}
        content={selectedItem?.content}
        image={selectedItem?.image}
      />
    </div>
  );
};

export default App;
