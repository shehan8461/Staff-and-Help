import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal, Table } from 'flowbite-react';
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase'; // Adjust the path as per your project structure
import './css/Staffprofile.css';
import logo from './css/delete-icon.png'
import logo1 from './css/update-icon.png'

export default function StaffDetailsProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [orderIdToDelete, setOrderIdToDelete] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`/api/auth/Staff/${currentUser._id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      const data = await response.json();
      setOrders(data);

      // Fetch images from Firebase for each order
      data.forEach(order => {
        if (order.profilePicture) {
          fetchFirebaseImage(order.profilePicture, 'profilePicture', order._id);
        }
        
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const fetchFirebaseImage = async (imageUrl, field, orderId) => {
    const storageRef = ref(storage, imageUrl);
    try {
      const downloadUrl = await getDownloadURL(storageRef);
      setOrders(prevOrders => prevOrders.map(order => {
        if (order._id === orderId) {
          return {
            ...order,
            [field]: downloadUrl
          };
        }
        return order;
      }));
    } catch (error) {
      console.error(`Error fetching image from Firebase for ${field}:`, error);
    }
  };

  const handleDeleteOrder = async () => {
    try {
      const res = await fetch(`/api/user/deleteStaff/${orderIdToDelete}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order._id !== orderIdToDelete)
        );
      }
      
      setShowModal(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='table-auto'>
   <h2 className="your-staff-information-main-topic">Staff Information</h2>


      {orders.length > 0 ? (
        <Table id='one-details-table'>
          <Table.Head>
            <Table.HeadCell>staff Id</Table.HeadCell>
            <Table.HeadCell>First Name</Table.HeadCell>
            <Table.HeadCell>Last Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            <Table.HeadCell>Department</Table.HeadCell>
            <Table.HeadCell>Position</Table.HeadCell>
            <Table.HeadCell>Assigned Shifts</Table.HeadCell>
            <Table.HeadCell>WorkSchedule</Table.HeadCell>
            <Table.HeadCell>Photos</Table.HeadCell>
            <Table.HeadCell> Action</Table.HeadCell>
          </Table.Head>
          <Table.Body id='one-details-body'>
            {orders.map((order) => (
              <Table.Row key={order._id} id='table-row-your-details' >
                <Table.Cell>{order.staffId}</Table.Cell>
                <Table.Cell>{order.firstName}</Table.Cell>
                <Table.Cell>{order.lastName}</Table.Cell>
                <Table.Cell>{order.emaill}</Table.Cell>
                <Table.Cell>{order.phoneNumber}</Table.Cell>
                <Table.Cell>{order.department}</Table.Cell>
                <Table.Cell>{order.position}</Table.Cell>
                <Table.Cell>{order.assignedShifts}</Table.Cell>
                <Table.Cell>{order.workSchedule}</Table.Cell>
                <Table.Cell>
                  <div className="flex gap-2">
                    {order.profilePicture && (
                      <img src={order.profilePicture} alt="Profile" className="h-15 w-10 m--10 p-0 object-cover rounded" />
                    )}
                   
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/update-staff/${order._id}`}>
                    <Button id='one-details-update-btn' className="text-green-500"><img src={logo1} alt='logo1' width="10%" height="10%"/></Button>
                  </Link>
                  <Button id='one-details-delete-btn' className="text-red-500" onClick={() => {
                    setShowModal(true);
                    setOrderIdToDelete(order._id);
                  }}><img src={logo} alt='logo' width="10%" height="10%"></img></Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : (
        <p>You have no orders yet!</p>
      )}

      <Modal show={showModal} onClose={() => setShowModal(false)} popup size='md'>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center-alert">
            <HiOutlineExclamationCircle  />
            <h3 >Are you sure you want to delete this order?</h3>
          </div>
          <div >
<button id='orders-for-delete'>
            <Button color='failure' id='failure'onClick={handleDeleteOrder}>
              Yes, I am sure
          </Button>
            <Button color='gray' id='gray' onClick={() => setShowModal(false)}>
              No, cancel
            </Button>
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
