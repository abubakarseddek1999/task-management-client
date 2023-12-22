// Dashboard.jsx
// import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';
// import TaskList from './TaskList';

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const users= user?.email
  console.log(user?.email);
  // const [tasks, setTasks] = useState({
  //   todo: [],
  //   ongoing: [],
  //   completed: [],
  // });

  // useEffect(() => {
  //   // Fetch tasks from the backend and update the state
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://y-flax-two.vercel.app/tasks');
  //       const data = await response.json();
  //       setTasks(data);
  //     } catch (error) {
  //       console.error('Error fetching tasks:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const addTask = async (taskData) => {
    console.log(taskData);
    console.log(taskData);
    const fullData ={...taskData,users}
    console.log(fullData);

    // send data to the server
    fetch('https://y-flax-two.vercel.app/task', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(fullData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: 'success!',
            text: 'Task Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })

        }
      })
  };

  // const deleteTask = async (taskId) => {
  //   try {
  //     // Send a DELETE request to the backend to delete a task
  //     await fetch(`/api/tasks/${taskId}`, {
  //       method: 'DELETE',
  //     });

  //     // Fetch updated tasks after deleting a task
  //     const response = await fetch('/api/tasks');
  //     const data = await response.json();
  //     setTasks(data);
  //   } catch (error) {
  //     console.error('Error deleting task:', error);
  //   }
  // };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold">Add Your Task </h1>
      </div>
      <div className="flex justify-between">
        <div className="w-full">
          <TaskForm onSubmit={addTask} />
        </div>
        <div className="flex w-2/3 space-x-4">
          {/* <TaskList tasks={tasks.todo} status="To-Do" onDelete={deleteTask} />
          <TaskList tasks={tasks.ongoing} status="Ongoing" onDelete={deleteTask} />
          <TaskList tasks={tasks.completed} status="Completed" onDelete={deleteTask} /> */}
        </div>
      </div>
    </div>
  );
};

export default AddTask;
