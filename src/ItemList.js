import React, { useState } from 'react';

const ItemList = ({ items, deleteItem, editItem }) => {
  const [editText, setEditText] = useState('');
  const [editItemId, setEditItemId] = useState(null);
    
  const handleEdit = (item) => {
    setEditItemId(item.id);
    setEditText(item.text);
  };

  const handleSaveEdit = () => {
    editItem(editItemId, editText);
    setEditItemId(null);
    setEditText('');
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {editItemId === item.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button className="save-btn" onClick={handleSaveEdit}>
                Save
              </button>
            </>
          ) : (
            <>
              <div className="item-text">{item.text}</div>
              <div className="btn-group">
                <button className="edit-btn" onClick={() => handleEdit(item)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
