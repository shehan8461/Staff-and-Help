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

  const handleDeleteTask = async () => {
    try {
      const res = await fetch(`/api/user/deletetask/${taskIdToDelete}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setTasks((prevTasks) =>
          prevTasks.filter((task) => task._id !== taskIdToDelete)
        );
        setShowModal(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, status: 'completed' } : task
      )
    );
  };

  return (
    <div className='task-table-auto'>
      <h2 className="my-8 text-center font-bold text-4xl text-gray-800">All Tasks</h2>

      {tasks.length > 0 ? (
        <Table hoverable id='task-all-details-table'>
          <Table.Head id="task-all-details-table-head">
            <Table.HeadCell>Staff ID</Table.HeadCell>
            <Table.HeadCell>Task Name</Table.HeadCell>
            <Table.HeadCell>Task Description</Table.HeadCell>
            <Table.HeadCell>Start Date</Table.HeadCell>
            <Table.HeadCell>End Date</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body id="task-details-table-body">
            {tasks.map((task) => (
              <Table.Row key={task._id} >
                <Table.Cell>{task.stafffid}</Table.Cell>
                <Table.Cell>{task.task_name}</Table.Cell>
                <Table.Cell>{task.task_description}</Table.Cell>
                <Table.Cell>{task.start_date}</Table.Cell>
                <Table.Cell>{task.end_date}</Table.Cell>
                <Table.Cell>
                  <Link to={`/update-task/${task._id}`} id='task-one-details-update-btn'    onClick={() => handleCompleteTask(task._id)}>
                  
                      Get My Task
                   
                  </Link>
                  <button
                      id="task-one-details-statues-btn"
                      style={{ backgroundColor: task.is_complete ? 'red' : 'yellow' }}
                    >
                   {task.is_complete ? 'Completed' : 'Pending'}
                  </button>
                  
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : (
        <p>You have no tasks yet!</p>
      )}

    </div>
  );
}
