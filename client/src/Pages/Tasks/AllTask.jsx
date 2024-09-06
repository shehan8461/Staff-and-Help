import { useState, useEffect } from 'react';
import { Button, Modal, Table } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import logo from '../css/delete-icon.png';
import '../css/AllTasks.css';
import { Link } from 'react-router-dom';

export default function AllTask() {
  const [tasks, setTasks] = useState([]);
  const [taskIdToDelete, setTaskIdToDelete] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/auth/users/AllTasks');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleCompleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/user/updateTask`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: taskId,
          status: 'completed', // Update task status to completed
        }),
      });

      const data = await response.json();
      if (data.success) {
        // Update the local state to reflect the status change
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === taskId ? { ...task, status: 'completed' } : task
          )
        );
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className='task-list-container'>
      <h2 className="task-list-heading">All Tasks</h2>
      <h3 id="select-task-topic">Please select your task according to your assigned staff ID</h3>

      {tasks.length > 0 ? (
        <div className='task-list'>
          {tasks.map((task) => (
            <div key={task._id} className='task-item'>
              <div className='task-item-details'>
                <h4>{task.task_name}</h4>
                <p><strong>Staff ID:</strong> {task.stafffid}</p>
                <p><strong>Description:</strong> {task.task_description}</p>
                <p><strong>Start Date:</strong> {task.start_date}</p>
                <p><strong>End Date:</strong> {task.end_date}</p>
              </div>
              <div className='task-item-actions'>
                <Link
                  to={`/update-task/${task._id}`}
                  className='task-item-update-btn'
                  onClick={() => handleCompleteTask(task._id)}
                >
                  Get My Task
                </Link>
                <button
                  className={`task-item-status-btn ${task.status === 'completed' ? 'completed' : 'pending'}`}
                >
                  {task.status === 'completed' ? 'Completed' : 'Pending'}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>You have no tasks yet!</p>
      )}
    </div>
  );
}
