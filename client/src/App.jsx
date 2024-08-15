import {BrowserRouter ,Routes,Route } from 'react-router-dom';


import Signin from './Pages/Signin';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Header from './components/header';
import PrivateRoutes from './components/PrivateRoutes';





import OnePetShow from './Pages/OnePetShow'
import AddStaff from './Pages/AddStaff';
import StaffDetailsProfile from './Pages/StaffDetailsProfile';
import UpdateStaff from './Pages/UpdateStaff';
import ManagerSignUp from './Pages/Manager/ManagerSignUp';
import ManagerSignin from './Pages/Manager/ManagerSignin';

import AllStaffDetails from './Pages/AllDetails';
import ManagerProfile from './Pages/Manager/ManagerProfile';

import AddTask from './Pages/Tasks/AddTask';
import AllTask from './Pages/Tasks/AllTask';
import UpdateTask from './Pages/Tasks/UpdateTask';
import ManagerAllDetails from './Pages/Manager/ManagerAllDetails';






export default function App() {
  return <BrowserRouter>
<Header/>
  <Routes>
    <Route path="/" element={<AllStaffDetails/>}></Route>
    <Route path="/login-manager" element={<ManagerAllDetails/>}></Route>
    <Route path="/AllTask" element={<AllTask/>}></Route>
    
    <Route path="/manager-sign-up" element={<ManagerSignUp/>}></Route>
    <Route path="/manager-sign-in" element={<ManagerSignin/>}></Route>
    <Route path="/AddTask" element={<AddTask/>}></Route>
   

    <Route path="/sign-in" element={<Signin/>}></Route>
    <Route path="/AddStaff" element={<AddStaff/>}></Route>
    <Route path="/sign-up" element={<SignUp/>}></Route>
   

    <Route path="/onepet/:id" element={<OnePetShow/>}></Route>
 





    <Route element={<PrivateRoutes/>}>

    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/ManagerProfile" element={<ManagerProfile/>}></Route>
    <Route path="/StaffDetailsProfile" element={<StaffDetailsProfile/>}></Route>
    <Route path="/update-staff/:id" element={<UpdateStaff/>}></Route>
    <Route path="/update-task/:id" element={<UpdateTask/>}></Route>


   
    </Route>
 
    
  </Routes>
  
  </BrowserRouter>
  
}
