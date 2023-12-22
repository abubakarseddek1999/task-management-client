import React, { useContext, useEffect, useState } from 'react';
import TodoTask from './TodoTask'; // Update the path based on your project structure
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const TodoList = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const [tasks, setTasks] = useState([]); // Replace with your actual tasks state
    console.log(tasks);
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => {
                setTasks(data);

            })

    }, [])

    const handleDelete = (taskId) => {
        console.log(taskId);
        // Implement logic to delete the task with the given ID
        // Update the state accordingly
        console.log(taskId);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/task/${taskId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your task has been deleted.',
                                'success'
                            )
                            const remaining = tasks.filter(ser => ser._id !== taskId);
                            setTasks(remaining);
                        }
                    })
            }
        })
    };

    const handleEdit = (editedTask) => {
        const _id = editedTask?.id || {};
        console.log(_id);
        const confirmEditTask = { ...editedTask, userEmail }
        console.log(confirmEditTask?._id);
        // Implement logic to edit the task
        // Update the state accordingly
        // send data to the server
        fetch(`http://localhost:5000/task/${confirmEditTask?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(confirmEditTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'task Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    };

    return (
        <div className="todo-list flex flex-col gap-5 ">
            {tasks?.map((task) => (
                <TodoTask key={task?.id} task={task} onDelete={handleDelete} onEdit={handleEdit} />
            ))}
        </div>
    );
};

export default TodoList;
