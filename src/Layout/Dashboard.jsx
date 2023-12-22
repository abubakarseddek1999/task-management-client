import React from 'react';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex flex-col md:flex-row max-w-[1300px] mx-auto '>

            <div className="div  md:min-h-screen bg-blue-200">
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


            <div className="flex-1 p-8 bg-slate-300">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;