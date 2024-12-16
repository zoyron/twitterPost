import React from 'react';

const PhotoInput = ({ onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">Photo</label>
    <input
      type="file"
      accept="image/*"
      onChange={onChange}
      className="mt-1 block w-full"
      required
    />
  </div>
);

export default PhotoInput;