import React, { useContext } from 'react';
import TodoList from './TodoList';
import { AuthContext } from '../../provider/AuthProvider';

const TaskMange = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <div className='flex justify-between'>
                <div className='W-1/3'>
                    <h2 className='text-xl md:text-2xl font-bold'>TODO </h2>
                    <TodoList></TodoList>

                </div>
                <div className='W-1/3 '>
                    <h2 className='text-xl md:text-2xl font-bold'>PENDING </h2>

                </div>
                <div className='W-1/3'>
                    <h2 className='text-xl md:text-2xl font-bold'>COMPLETE </h2>

                </div>

            </div>

            <section className="bg-gray-400 mt-24 py-12 px-5">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Who Can Benefit?</h2>

                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Developer Benefit */}
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Developers</h3>
                            <p className="text-gray-700">
                                Streamline your task management and enhance collaboration with your team.
                            </p>
                        </div>

                        {/* Corporate Professionals Benefit */}
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="bg-white p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Corporate Professionals</h3>
                            <p className="text-gray-700">
                                Efficiently organize and track tasks for projects and daily workflow.
                            </p>
                        </div>

                        {/* Bankers Benefit */}
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="bg-white p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Bankers</h3>
                            <p className="text-gray-700">
                                Manage and prioritize financial tasks, deadlines, and project milestones.
                            </p>
                        </div>

                        {/* Add more user types as needed */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TaskMange;