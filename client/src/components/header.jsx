import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.css';  // Ensure this points to where your CSS is stored

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="nav"> 
      <div className='navbardetails'>
        <Link to='/'><h1 className='twebpagename'>Shopping Buddy</h1></Link> 
        <h3 id='h3'>Shopping application for visually challenged.</h3>
        <ul className='other-topics'>
          <Link to='/'><li>Home</li></Link>  
          <Link to='/manager-sign-in'><li>Manager Sign In</li></Link>  
          <Link to='/AddTask'><li>Add Task</li></Link>
          <Link to='/AllTask'><li>All Task</li></Link>
          <Link to='/about'><li>About</li></Link>
          
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='Staff Profile' className='h-7 w-7 rounded-full object-cover'></img>
            ) : (
              <li>Staff Sign In</li>
            
            )}
          </Link>  
          
        </ul>
      </div>   
    </div>
  );
}
