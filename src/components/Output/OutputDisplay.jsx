import React from 'react';
import { copyToClipboard } from '../../utils/clipboard';

const OutputDisplay = ({ output }) => {
  if (!output) return null;

  const handleCopy = () => {
    copyToClipboard(JSON.stringify(output, null, 2));
  };

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Formatted Output:</h2>
        <button
          onClick={handleCopy}
          className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md flex items-center gap-2"
        >
          <span>Copy</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto whitespace-pre-wrap">
        {JSON.stringify(output, null, 8)}
      </pre>
    </div>
  );
};

export default OutputDisplay;
