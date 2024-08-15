import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { app } from '../firebase';
import { useSelector } from 'react-redux';
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';
import './css/AddStaff.css';

export default function AddStaff() {
  const [imagePercent, setImagePercent] = useState(0);
  const fileRef1 = useRef(null);

  const [imageError, setImageError] = useState(false);
  const [image1, setImage1] = useState(undefined);

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    userId: currentUser._id,
    staffId: "",
    firstName: "",
    lastName: "",
    emaill: "",
    phoneNumber: "",
    department: "",
    position:"",
    assignedShifts: "",
    workSchedule: "",
    profilePicture: "",
 
  });
  
  useEffect(() => {
    if (image1) {
      handleFileUpload(image1, 'profilePicture');
    }
  }, [image1]);

 

  const handleFileUpload = async (image, field) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
        setError('Image upload failed');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData((prev) => ({
            ...prev,
            [field]: downloadURL
          }));
        });
      }
    );
  };

  const handleImage1Click = () => {
    fileRef1.current.click();
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/auth/AddStaff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to create item');
      }

      alert('Staff added successfully');
      navigate('/StaffDetailsProfile')
     
    } catch (error) {
      setError('Something went wrong!');
    }
  };
  
  return (
    <div className="add-staff-container">
      <h1 id="main-topic of form">Add Working Shedule</h1>
      <h1 id="sub-first-topic of form">Basic Information</h1>
      <form id="add-staff-form"onSubmit={handleSubmit}>
        <input type="text" placeholder='staffId' onChange={(e) => setFormData({ ...formData, staffId: e.target.value })} />
        <input type="text" placeholder='firstName' onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
        <input type="text" placeholder='lastName' onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
        <input type="text" placeholder='emaill' onChange={(e) => setFormData({ ...formData, emaill: e.target.value })} />
        <input type="text" placeholder='phoneNumber' onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} />
        <h1 id="sub-second-topic of form">Work Information</h1>
        <input type="text" placeholder='department' onChange={(e) => setFormData({ ...formData, department: e.target.value })} />
        <input type="text" placeholder='position' onChange={(e) => setFormData({ ...formData, position: e.target.value })} />
        <h1 id="sub-third-topic of form">Schedule Management</h1>
        <input type="text" placeholder='assignedShifts' onChange={(e) => setFormData({ ...formData, assignedShifts: e.target.value })} />
        <input type="text" placeholder='workSchedule' onChange={(e) => setFormData({ ...formData, workSchedule: e.target.value })} />
    

        <input type='file' ref={fileRef1} id='profilePicture' hidden accept='image/*' onChange={(e) => setImage1(e.target.files[0])} />
      

        <div>
          <button className="upload-button" type="button" onClick={handleImage1Click}>
            Upload Profile Picture
          </button>
          
        </div>

        <div>
          <img src={formData.profilePicture || 'https://media.istockphoto.com/id/1294866141/vector/picture-reload.jpg?s=612x612&w=is&k=20&c=Ei6q4n6VkP3B0R30d1VdZ4i11CFbyaEoAFy6_WEbArE='} alt='Profile' onClick={handleImage1Click} />
          
        </div>

        <p className="upload-progress-errors">
          {imageError ? (
            <span>Error uploading image (file size must be less than 2 MB)</span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span>{`Uploading: ${imagePercent}%`}</span>
          ) : imagePercent === 100 ? (
            <span>Image uploaded successfully</span>
          ) : (
            ''
          )}
        </p>

        <button id='submit-button' type="submit">Submit</button><br></br><br></br>
     
      </form>
    
  
    </div>
  );
}
