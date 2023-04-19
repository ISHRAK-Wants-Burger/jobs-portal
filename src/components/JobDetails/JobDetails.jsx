import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleDollarToSlot, faEnvelope, faCalendar} from '@fortawesome/free-solid-svg-icons';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import './JobDetails.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const JobDetails = () => {
    const jobDetails = useLoaderData();
    const pathName = (window.location.pathname).split('/');
    const jobId = parseInt(pathName[pathName.length - 1]);
    const jobDetail = jobDetails.find(jd => jd.id === jobId);

    return (
        <div>
            <h1 className='text-center text-bold text-3xl pt-6 pb-16 mb-16 bg-gradient-to-r from-indigo-100'>Job Details</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 mx-36 gap-10 mb-20 h-full w-500'>
                <div className='job-description'>
                    <p><span className='text-xl font-bold'>Job Description:</span> {jobDetail.jobDescription}</p>
                    <p><span className='text-xl font-bold'>Job Responsibility:</span> {jobDetail.jobResponsibilities}</p>
                    <p><span className='text-xl font-bold'>Educational Requirements:</span> {jobDetail.educationalRequirements}</p>
                    <p><span className='text-xl font-bold'>Experiences:</span> {jobDetail.experience}</p>
                </div>
                <div className='job-details'>
                    <div className='bg-indigo-50 px-10 py-5 mb-5'>
                        <div>
                            <h1 className='text-xl font-bold'>Job Details</h1>
                            <p><FontAwesomeIcon className='job-details-icon' icon={faCircleDollarToSlot} /><span>Salary:</span> {jobDetail.salary}</p>
                            <p><FontAwesomeIcon className='job-details-icon' icon={faCalendar} /><span>Job Title</span>: {jobDetail.jobTitle}</p>
                        </div>
                        <div className=''>
                            <h1 className='text-xl font-bold'>Contact Information</h1>
                            <p><FontAwesomeIcon className='job-details-icon' icon={faPhone} /><span>Phone:</span> {jobDetail.phone}</p>
                            <p><FontAwesomeIcon className='job-details-icon' icon={faEnvelope} /><span>Email:</span> {jobDetail.email}</p>
                            <p><FontAwesomeIcon className='job-details-icon' icon={faLocationDot} /><span>Address:</span> {jobDetail.location}</p>
                        </div>
                    </div>
                    <button className="btn bg-indigo-400 bg-gradient-to-l from-indigo-500 w-full" onClick={() => addToDb(jobDetail.id)}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;