import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.ico'
import { AuthContext } from '../../Context/UserContext';
import { UserCircleIcon } from '@heroicons/react/24/solid';
const Header = () => {
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/signin');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-gradient-to-r from-sky-900 to-cyan-500  text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-cyan-500 to-blue-500  rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/weblog'>Weblog</Link></li>
                        {
                        user?.uid ?
                            <>
                                <li><Link to='/myreviews'>My Reviews</Link></li>
                                <li><Link to='/addservice' >Add Service</Link></li>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </>
                            :
                            <>
                                <li><Link to='/signup' >Sign Up</Link></li>
                                <li><Link to='/signin' >Sign In</Link></li>

                            </>
                    }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="Logo" className='h-10 mr-1' /> KidsCamp</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/' className={`${location.pathname === '/' ? 'border-b-2' : ''}`}>Home</Link></li>
                    <li><Link to='/services' className={`${location.pathname === '/services' ? 'border-b-2' : ''}`}>Services</Link></li>
                    <li><Link to='/weblog' className={`${location.pathname === '/weblog' ? 'border-b-2' : ''}`}>Weblog</Link></li>

                    {
                        user?.uid ?
                            <>
                                <li><Link to='/myreviews' className={`${location.pathname === '/myreviews' ? 'border-b-2' : ''}`}>My Reviews</Link></li>
                                <li><Link to='/addservice' className={`${location.pathname === '/addservice' ? 'border-b-2' : ''}`}>Add Service</Link></li>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </>
                            :
                            <>
                                <li><Link to='/signup' className={`${location.pathname === '/signup' ? 'border-b-2' : ''}`}>Sign Up</Link></li>
                                <li><Link to='/signin' className={`${location.pathname === '/signin' ? 'border-b-2' : ''}`}>Sign In</Link></li>

                            </>
                    }
                </ul>
            </div>
            <div className="navbar-end text-white">
                <div>

                    {
                        user?.uid && <div className='tooltip tooltip-left tooltip-info' data-tip={user?.displayName ? user?.displayName : user?.email}>

                            {
                                user?.photoURL ?
                                    <img src={user?.photoURL} alt="" className='h-10 rounded-full' />
                                    :
                                    <UserCircleIcon className='h-8 w-8' />
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;