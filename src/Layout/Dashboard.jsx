import React from 'react';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex max-w-[1300px] mx-auto bg-slate-300'>

            <div className="div w-64 min-h-screen bg-blue-200">
                <ul className="menu p-3">
                    <li>

                        <NavLink className="text-black text-xl font-bold" to="/dashboard/addTask"> Add Task</NavLink>
                    </li>
                    <li>

                        <NavLink className="text-black text-xl font-bold" to="/dashboard/manage">Task Management</NavLink>
                    </li>
                    <li>

                        <NavLink className="text-black text-xl font-bold" to="/">Home</NavLink>
                    </li>

                </ul>

            </div>


            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;