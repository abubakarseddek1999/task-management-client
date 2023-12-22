import React, { useContext } from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { MdOutlineNoteAdd } from "react-icons/md";
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { CiLogout } from "react-icons/ci";

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        return logOut()

    }
    return (
        <div className='flex flex-col md:flex-row max-w-[1300px] mx-auto '>

            <div className="div  md:min-h-screen bg-blue-200">
                {/* Profile Information */}
                <div className="profile-section border p-5 m-5 ">
                    {user ? (
                        <div className='text-center'>
                            <div className="avatar">
                                <div className="w-24 rounded-xl">
                                    <img className='border rounded-full' src={user?.photoURL} alt='user photo' />
                                </div>
                            </div>
                            <p className='text-start'>Name: {user.displayName}</p>
                            <p>Email: {user.email}</p>
                            {/* Add other profile information here */}
                        </div>
                    ) : (
                        <p>Please log in to view your profile.</p>
                    )}
                </div>

                <ul className="menu p-3">
                    <li>

                        <NavLink className="text-black text-xl font-bold" to="/dashboard/manage"><FaTasks /> Task Manage </NavLink>
                    </li>
                    <li>

                        <NavLink className="text-black text-xl font-bold" to="/dashboard/addTask"><MdOutlineNoteAdd /> Add Task</NavLink>
                    </li>

                    <li>

                        <NavLink className="text-black text-xl font-bold" to="/"><IoHomeSharp /> Home </NavLink>
                    </li>
                    <li>
                        <button onClick={handleLogOut} className="text-black text-xl font-bold"><CiLogout className='text-xl font-bold' /> Logout </button>

                    </li>

                </ul>

            </div>


            <div className="flex-1 p-8 bg-slate-300">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;