import React from "react";
import "./App.css";
import TranscriptEditor from "./components/TranscriptEditor";

const initialTranscript = [
  { word: "Hello", start_time: 0, duration: 500 },
  { word: "world", start_time: 500, duration: 700 },
  { word: "This", start_time: 1200, duration: 300 },
  { word: "is", start_time: 1500, duration: 200 },
  { word: "a", start_time: 1700, duration: 100 },
  { word: "test", start_time: 1800, duration: 400 },
  { word: "transcript", start_time: 2200, duration: 600 },
  { word: "for", start_time: 2800, duration: 200 },
  { word: "playback", start_time: 3000, duration: 500 },
  { word: "and", start_time: 3500, duration: 250 },
  { word: "editing", start_time: 3750, duration: 800 },
  { word: "features.", start_time: 4550, duration: 650 },
];

const extendedTranscript = [
  { word: "Welcome", start_time: 0, duration: 400 },
  { word: "to", start_time: 400, duration: 100 },
  { word: "the", start_time: 500, duration: 150 },
  { word: "interactive", start_time: 650, duration: 500 },
  { word: "transcript", start_time: 1150, duration: 500 },
  { word: "editor", start_time: 1650, duration: 400 },
  { word: "where", start_time: 2050, duration: 300 },
  { word: "you", start_time: 2350, duration: 200 },
  { word: "can", start_time: 2550, duration: 200 },
  { word: "edit", start_time: 2750, duration: 300 },
  { word: "each", start_time: 3050, duration: 250 },
  { word: "word", start_time: 3300, duration: 300 },
  { word: "with", start_time: 3600, duration: 200 },
  { word: "precision.", start_time: 3800, duration: 500 },
  { word: "The", start_time: 4300, duration: 150 },
  { word: "goal", start_time: 4450, duration: 250 },
  { word: "is", start_time: 4700, duration: 100 },
  { word: "to", start_time: 4800, duration: 100 },
  { word: "make", start_time: 4900, duration: 300 },
  { word: "transcription", start_time: 5200, duration: 600 },
  { word: "as", start_time: 5800, duration: 100 },
  { word: "seamless", start_time: 5900, duration: 400 },
  { word: "and", start_time: 6300, duration: 150 },
  { word: "efficient", start_time: 6450, duration: 500 },
  { word: "as", start_time: 6950, duration: 100 },
  { word: "possible.", start_time: 7050, duration: 500 },
  { word: "You", start_time: 7550, duration: 200 },
  { word: "can", start_time: 7750, duration: 150 },
  { word: "modify", start_time: 7900, duration: 400 },
  { word: "start", start_time: 8300, duration: 250 },
  { word: "times,", start_time: 8550, duration: 300 },
  { word: "durations,", start_time: 8850, duration: 500 },
  { word: "and", start_time: 9350, duration: 150 },
  { word: "even", start_time: 9500, duration: 300 },
  { word: "the", start_time: 9800, duration: 100 },
  { word: "text.", start_time: 9900, duration: 400 },
];

function App() {
  return (
    <div className="App bg-black min-h-screen flex flex-col gap-6 justify-center items-center font-[Poppins]">
      <h2 className="text-2xl font-[600] tracking-wider text-center text-white uppercase mb-4">
        Transcript Editor
      </h2>
      <TranscriptEditor initialTranscript={initialTranscript} />
      <TranscriptEditor initialTranscript={extendedTranscript} />
    </div>
  );
}

export default App;
