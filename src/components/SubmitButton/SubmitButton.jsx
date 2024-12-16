import React from 'react';

const SubmitButton = ({ isPosting }) => {
  return (
    <button
      type="submit"
      disabled={isPosting}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
    >
      {isPosting ? 'Posting...' : 'Post to Twitter'}
    </button>
  );
};

export default SubmitButton;