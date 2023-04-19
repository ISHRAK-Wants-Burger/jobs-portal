import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='flex sm:flex-col md:flex-row space-x-1 px-28 bg-gradient-to-r from-indigo-100 md:space-x-72 mb-12'>
                <div className='py-16'>
                    <h1 className='text-bold text-5xl'>One Step <br /> Closer To Your <br /> <span className='text-indigo-400'>Dream Job</span></h1>
                    <p className='py-5 text-gray-500'>Explore thousands of job opportunities with all the information you need. <br /> Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn bg-indigo-400 bg-gradient-to-l from-indigo-500'>Get Started</button>
                </div>
                <img className='h-96' src="P3OLGJ1 copy 1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;