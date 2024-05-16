import React from 'react';
import './DeleteDialog.css'

const DeleteDialog = ({ isOpen, onCancel, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="delete-dialog">
      <div className="delete-dialog-content">
        <p>Are you sure you want to delete this item?</p>
        <div className="delete-dialog-buttons">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onDelete} className="delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;