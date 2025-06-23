'use client';

import { useState } from 'react';

const VoiceInput = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  let recognition: any;

  if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
    recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
    };
  }

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">🎙️ Voice Recognition</h2>
      <button
        onClick={isListening ? stopListening : startListening}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isListening ? 'Stop' : 'Start'} Listening
      </button>
      <p className="mt-4">You said: <strong>{transcript}</strong></p>
    </div>
  );
};

export default VoiceInput;
