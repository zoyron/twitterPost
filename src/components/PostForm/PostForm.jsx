import React, { useState } from 'react';
import { createTweetContent } from '../../utils/tweet/tweetFormatter';
import { postToTwitter } from '../../utils/twitter/twitterApi';
import PhotoUpload from '../PhotoUpload/PhotoUpload';
import FormInput from '../FormInput/FormInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const PostForm = () => {
  const [formData, setFormData] = useState({
    photo: null,
    funFact: '',
    currentNode: '',
    parentNode: '',
  });
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState('');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, photo: file }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPosting(true);
    setError('');

    try {
      const tweetContent = createTweetContent({
        ...formData,
        nodesVisited: 4
      });
      
      await postToTwitter(tweetContent, formData.photo);
      setFormData({
        photo: null,
        funFact: '',
        currentNode: '',
        parentNode: '',
      });
    } catch (err) {
      setError('Failed to post tweet. Please try again.');
      console.error(err);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6">
      <PhotoUpload onChange={handlePhotoChange} />
      
      <FormInput
        label="Fun Fact"
        name="funFact"
        value={formData.funFact}
        onChange={handleInputChange}
      />
      
      <FormInput
        label="Current Node"
        name="currentNode"
        value={formData.currentNode}
        onChange={handleInputChange}
      />
      
      <FormInput
        label="Parent Node"
        name="parentNode"
        value={formData.parentNode}
        onChange={handleInputChange}
      />

      <ErrorMessage message={error} />
      <SubmitButton isPosting={isPosting} />
    </form>
  );
};

export default PostForm;