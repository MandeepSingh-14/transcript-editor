import React, { useState } from 'react';
import Word from './Word';
import Modal from './Modal';

function TranscriptEditor({ initialTranscript }) {
  const [transcript, setTranscript] = useState(initialTranscript);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wordToEdit, setWordToEdit] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const handleEditWord = (newText) => {
    const updatedTranscript = [...transcript];
    updatedTranscript[editIndex].word = newText;
    setTranscript(updatedTranscript);
  };

  const openModal = (index) => {
    setEditIndex(index);
    setWordToEdit(transcript[index].word);
    setIsModalOpen(true);
  };

  const speakWord = (word, duration) => {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 1; // Adjust the rate of speech if needed
      utterance.onend = () => {
        resolve(); // Resolve the promise when speech ends
      };
      window.speechSynthesis.speak(utterance);
    });
  };

  const playTranscript = async () => {
    setIsPlaying(true);

    for (let index = 0; index < transcript.length; index++) {
      setCurrentWordIndex(index);
      await speakWord(transcript[index].word, transcript[index].duration);
      await new Promise((resolve) => setTimeout(resolve, transcript[index].duration));
    }

    setIsPlaying(false);
    setCurrentWordIndex(-1);
  };

  return (
    <div className="transcript-editor container mx-auto p-6 border border-white rounded-lg">
      <div className="transcript-container bg-gray-800 p-4 rounded-md shadow-md mb-6 flex flex-wrap">
        {transcript.map((wordData, index) => (
          <Word
            key={index}
            wordData={wordData}
            isActive={currentWordIndex === index}
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      <button
        onClick={playTranscript}
        className="bg-blue-500 text-white font-[500] tracking-wide uppercase font-[Poppins] py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
        disabled={isPlaying}
      >
        {isPlaying ? 'Playing...' : 'Play'}
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleEditWord}
        word={wordToEdit}
      />
    </div>
  );
}

export default TranscriptEditor;
