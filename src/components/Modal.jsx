import React, { useEffect, useState } from 'react';

function Modal({ isOpen, onClose, onSave, word }) {
  const [newText, setNewText] = useState(word);

  useEffect(() => {
    setNewText(word);
  },[word])

  const handleSave = () => {
    onSave(newText);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
      <div className="bg-gray-600 p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-xl font-[500] tracking-wider text-center text-white uppercase mb-4">Edit Word</h2>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="w-full p-2 font-[Poppins] border border-gray-300 bg-gray-800 text-white rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white font-[500] font-[Poppins] py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white font-[500] font-[Poppins] py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
