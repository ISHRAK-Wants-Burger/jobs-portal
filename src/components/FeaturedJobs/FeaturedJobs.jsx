import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const FeaturedJobs = ({ featuredJob }) => {
    const { address, companyLogo, companyName, educationalRequirements, email, experience, id, jobDescription, jobResponsibilities, jobTitle, jobType, location, phone, salary } = featuredJob;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className='mt-2 sm:w-48'>
                <figure><img src={`${companyLogo}`} alt="..." className='w-16' /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title text-2xl my-2">
                    {jobTitle}
                </h2>
                <p className='mb-2 text-xl text-gray-500'>{companyName}</p>
                <div className='my-2'>
                    <button className="btn btn-primary btn-outline mr-10">{jobType}</button>
                    <button className="btn btn-primary btn-outline">Full Time</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 my-2 text-xl text-gray-500">
                    <div><FontAwesomeIcon icon={faLocationDot} /> {location}</div>
                    <div><FontAwesomeIcon icon={faCircleDollarToSlot} /> Salary: {salary}</div>
                </div>
                <div className='my-2'>
                    <Link to={`/job-details/${id}`} className="btn bg-indigo-400 bg-gradient-to-l from-indigo-500">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;