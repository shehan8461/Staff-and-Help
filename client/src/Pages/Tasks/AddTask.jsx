import { useState, useEffect } from "react";
import '../css/AddTask.css'
import { useNavigate } from "react-router-dom";

function AddTask() {
    const [orders, setOrders] = useState([]);
    const navigate=useNavigate();
    const [order, setOrder] = useState({
        stafffid: "",
        task_name: "",
        task_description: "",
        start_date: "",
        end_date: ""
    });

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch(`/api/auth/users/AllStaff`);
            if (!response.ok) {
                throw new Error('Failed to fetch orders');
            }
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setOrder(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/auth/AddTASK', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order),
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || 'Failed to create task');
            }
            alert('successfully send to task')
            navigate('/AdminAllTask')
            // Optionally, reset the form or give feedback to the user
        } catch (error) {
            console.error('Something went wrong!', error.message);
        }
    };

    return (
        <div id="task-body">
            <div className="add-task">
                <div id="task-form">
                    <h2 id="main-topic-task-form"><b>Add Task</b></h2>
                    <form id="task-form" onSubmit={handleSubmit}>
                        <label htmlFor="stafffid">Staff Id:</label>
                        <select id="stafffid" name="stafffid" onChange={handleOnChange} value={order.stafffid}>
                            <option value="">Select Staff Id</option>
                            {orders.map((staff) => (
                                <option key={staff._id}>
                                    {staff.staffId}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="task_name">Task Name:</label>
                        <input type="text" id="task_name" name="task_name" onChange={handleOnChange} />

                        <label htmlFor="task_description">Task Description:</label>
                        <input type="text" id="task_description" name="task_description" onChange={handleOnChange}  />

                        <label htmlFor="start_date">Start Date:</label>
                        <input type="date" id="start_date" name="start_date" onChange={handleOnChange}  />

                        <label htmlFor="end_date">End Date:</label>
                        <input type="date" id="end_date" name="end_date" onChange={handleOnChange} />

                        <button type="send-task-btn">Send Task to Member</button>
                    </form>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default AddTask;
