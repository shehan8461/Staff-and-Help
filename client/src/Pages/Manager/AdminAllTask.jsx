import { useState, useEffect } from 'react';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import logo from '../css/delete-icon.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/AdminTasks.css';

export default function AdminAllTask() {
  const [tasks, setTasks] = useState([]);
  const [orderIdToDelete, setOrderIdToDelete] = useState('');
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

  const handleDeleteOrder = async () => {
    try {
      const res = await fetch(`/api/user/deletetask/${orderIdToDelete}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log('Delete failed:', data.message);
      } else {
        setTasks((prevTasks) =>
          prevTasks.filter((task) => task._id !== orderIdToDelete)
        );
        setOrderIdToDelete(''); // Reset orderIdToDelete after deletion
        console.log('Task deleted successfully');
      }
      setShowModal(false);
    } catch (error) {
      console.log('Error deleting task:', error.message);
    }
  };

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, is_complete: true } : task
      )
    );
  };

  return (
    <div className="task-overview">
      <h2 className="overview-heading">All Tasks</h2>

      {tasks.length > 0 ? (
        <ul className="task-list-container">
          {tasks.map((task) => (
            <li key={task._id} className="task-item-card">
              <div className="task-info">
                <p className="task-info-detail"><b><strong>Staff ID:</strong><b>{task.stafffid}</b> </b></p>
                <p className="task-info-detail"><strong>Task Name:</strong> {task.task_name}</p>
                <p className="task-info-detail"><strong>Task Description:</strong> {task.task_description}</p>
                <p className="task-info-detail"><strong>Start Date:</strong> {task.start_date}</p>
                <p className="task-info-detail"><strong>End Date:</strong> {task.end_date}</p>
              </div>
              <div className="task-action-buttons">
                <button
                  className={`status-button ${task.is_complete ? 'completed-status' : 'pending-status'}`}
                  onClick={() => handleCompleteTask(task._id)}
                >
                  {task.is_complete ? 'Completed' : 'Pending'}
                </button>
                <Button
                  className="delete-task-button"
                  onClick={() => {
                    setShowModal(true);
                    setOrderIdToDelete(task._id);
                  }}
                >
                  <img src={logo} alt="delete icon" className="delete-icon-img" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-tasks-message">You have no tasks yet!</p>
      )}

      <Modal show={showModal} onClose={() => setShowModal(false)} popup size="md">
        <Modal.Header />
        <Modal.Body>
          <div className="modal-content-wrapper">
            <HiOutlineExclamationCircle className="modal-warning-icon" />
            <h3 className="modal-warning-text">Are you sure you want to delete this Task?</h3>
          </div>
          <div className="modal-action-buttons">
            <Button color="danger" onClick={handleDeleteOrder} className="modal-confirm-button">
              Yes, I am sure
            </Button>
            <Button color="secondary" onClick={() => setShowModal(false)} className="modal-cancel-button">
              No, cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
