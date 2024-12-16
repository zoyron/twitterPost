import React, { useState } from 'react';
import TweetForm from './components/Form/TweetForm';
import OutputDisplay from './components/Output/OutputDisplay';
import { formatTweetOutput } from './utils/formatOutput';

function App() {
  const [formData, setFormData] = useState({
    funFact: '',
    currentNode: '',
    parentNode: '',
    nodesVisited:''
  });
  const [output, setOutput] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(formatTweetOutput(formData));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          DFS Project Tweet Generator
        </h1>
        
        <TweetForm
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        
        <OutputDisplay output={output} />
      </div>
    </div>
  );
}

export default App;
