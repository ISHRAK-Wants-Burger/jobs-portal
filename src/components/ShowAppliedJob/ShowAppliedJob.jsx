import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ShowAppliedJob = ({ props }) => {
    const { companyLogo, jobTitle, companyName, jobType, location, salary, id } = props;

    return (
        <div className='flex rounded-lg my-10 border border-gray-300 bg-indigo-50'>
            <div className='flex-none p-2 w-56'>
                <img className='border h-40 w-40' src={`${companyLogo}`} alt="..." />
            </div>

            <div className='grow p-3'>
                <h2 className="font-bold text-lg">{jobTitle}</h2>
                <p className=' text-gray-500 text-lg my-1'>{companyName}</p>

                <div className='my-2'>
                    <button className='btn btn-primary btn-outline'>{jobType}</button>
                    <button className='btn btn-primary btn-outline'>Full Time</button>
                </div>

                <div className='flex text-gray-500 gap-8'>
                    <div className=''><FontAwesomeIcon icon={faLocationDot} /> {location}</div>
                    <div className=''><FontAwesomeIcon icon={faCircleDollarToSlot} />Salary: {salary}</div>
                </div>
            </div>

            <div className='flex-none w-60 content-center justify-center my-16'>
                <Link to={`/job-details/${id}`} className="btn bg-indigo-400 bg-gradient-to-l from-indigo-500 rounded">View Details</Link>
            </div>
        </div>
    );
};

export default ShowAppliedJob;
