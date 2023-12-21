import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div style={{ position: 'relative' }}>
            <img className='w-full' src="https://i.postimg.cc/k4FYJGzP/serious-unshaven-man-drinks-takeaway-coffee-colorful-blank-stickers-attached-wall-drinks-coffee-from.jpg" alt="" />

            <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)', color: 'white', textAlign: 'right' }}>
                <p className='text-3xl md:text-7xl text-red-400 font-bold'>Best Way To</p>
                <p className='text-3xl md:text-7xl  font-bold'> Manage Your </p>
                <p className='text-3xl md:text-7xl text-amber-600 font-bold'>Daily Task</p>
                <div className='flex justify-center items-center'>
                    <Link to={"/login"}>
                        <button className='btn  bg-orange-600  font-bold hover:bg-slate-950 uppercase p-4 m-5 text-white '>Let’s Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;