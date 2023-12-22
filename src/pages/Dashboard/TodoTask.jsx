import React, { useState } from 'react';

const TodoTask = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the edited task and update it in the state
    onEdit(editedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset the edited task and exit edit mode
    setEditedTask(task);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    // Update the edited task as the user types
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  return (
    <div className="todo-task">
      {isEditing ? (
        <div className='border p-2'>
          <label>Title:</label> <br />
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
          /> <br />
          <label>Desc:</label> <br />
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleChange}
          /> <br />
          <label>Date:</label> <br />
          <input
            type="datetime-local"
            name="deadline"
            value={editedTask.deadline}
            onChange={handleChange}
          /> <br />
          <label>Priority:</label> <br />
          <select
            name="priority"
            value={editedTask.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select> <br />
          <div className='flex gap-2'>
            <button className='btn' onClick={handleSave}>Save</button>
            <button className='btn' onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className='border p-2'>
          <div>
            <h3>Title:{task?.title}</h3>
            <p>Des:{task?.description}</p>
            <p>Deadline: {task?.deadline}</p>
            <p>Priority: {task?.priority}</p>
            <div className='flex gap-5'>
              <button className='btn' onClick={handleEdit}>Edit</button>
              <button className='btn' onClick={() => onDelete(task._id)}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoTask;
