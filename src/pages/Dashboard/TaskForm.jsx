// TaskForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const TaskForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data); // Pass the form data to the parent component for further processing
    reset(); // Reset the form after submission
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Title:</label>
          <input
            {...register('title', { required: 'Title is required' })}
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Description:</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Deadline:</label>
          <input
            {...register('deadline', { required: 'Deadline is required' })}
            type="date"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Priority:</label>
          <select
            {...register('priority', { required: 'Priority is required' })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
