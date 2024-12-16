import React, { useState } from 'react';
import PhotoInput from './Form/PhotoInput';
import TextInput from './Form/TextInput';
import SubmitButton from './Form/SubmitButton';
import OutputDisplay from './Output/OutputDisplay';
import { formatOutput } from '../utils/formatOutput';

const PostForm = () => {
  const [formData, setFormData] = useState({
    photo: null,
    funFact: '',
    currentNode: '',
    parentNode: '',
  });
  const [output, setOutput] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, photo: file }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(formatOutput(formData));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <PhotoInput onChange={handlePhotoChange} />
        
        <TextInput
          label="Fun Fact"
          name="funFact"
          value={formData.funFact}
          onChange={handleInputChange}
        />
        
        <TextInput
          label="Current Node"
          name="currentNode"
          value={formData.currentNode}
          onChange={handleInputChange}
        />
        
        <TextInput
          label="Parent Node"
          name="parentNode"
          value={formData.parentNode}
          onChange={handleInputChange}
        />

        <SubmitButton />
      </form>

      <OutputDisplay output={output} photo={formData.photo} />
    </div>
  );
};

export default PostForm;