import React from 'react';

const PhotoPreview = ({ photo }) => {
  if (!photo) return null;

  return (
    <div className="mt-4">
      <p className="text-sm text-gray-600 mb-2">Selected Photo:</p>
      <img 
        src={URL.createObjectURL(photo)} 
        alt="Selected" 
        className="max-w-full h-auto rounded-md"
      />
    </div>
  );
};

export default PhotoPreview;