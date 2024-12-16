import React from "react";
import FormInput from "./FormInput";

const TweetForm = ({ formData, onInputChange, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 bg-white p-6 rounded-lg shadow"
    >
      <FormInput
        label="Current Node"
        name="currentNode"
        value={formData.currentNode}
        onChange={onInputChange}
      />
      <FormInput
        label="Parent Node"
        name="parentNode"
        value={formData.parentNode}
        onChange={onInputChange}
      />
      <FormInput
        label="Fun Fact"
        name="funFact"
        value={formData.funFact}
        onChange={onInputChange}
      />
      <FormInput
        label="Nodes Visited"
        name="nodesVisited"
        value={formData.nodesVisited}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Generate Output
      </button>
    </form>
  );
};

export default TweetForm;
