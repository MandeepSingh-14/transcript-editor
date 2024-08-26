import React from 'react';

function Word({ wordData, isActive, onClick }) {
  return (
    <span
      className={`cursor-pointer px-1 text-white text-lg font-[Poppins] p-1 ${isActive ? 'border-yellow-400 border-2 rounded-md font-[500]' : ''}`}
      onClick={onClick}
    >
      {wordData.word}
    </span>
  );
}

export default Word;
