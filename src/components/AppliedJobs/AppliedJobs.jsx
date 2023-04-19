import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import ShowAppliedJob from '../ShowAppliedJob/ShowAppliedJob';

const AppliedJobs = () => {

    const jobData = useLoaderData();

    const appliedJobId = Object.getOwnPropertyNames(getShoppingCart());

    return (
        <div>
            <h1 className='text-center text-bold text-4xl pt-6 pb-16 mb-16 bg-gradient-to-r from-indigo-100'>Applied Job</h1>

            <div className='mx-48 my-28'>
                <div className='flex justify-end '>
                    <button className='btn rounded border-none mb-5 bg-gray-200 text-black'>Filter By</button>
                </div>
                <div>
                    {
                        appliedJobId.map(appliedId => <ShowAppliedJob key={appliedId} props={(jobData.find(jd => jd.id == appliedId))}></ShowAppliedJob>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;