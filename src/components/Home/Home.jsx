import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import JobCategories from '../JobCategories/JobCategories';

const Home = () => {
    const jobData = useLoaderData();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);


    return (
        <div>
            <Banner></Banner>

            <div className='my-20'>
                <div className='text-bold text-4xl text-center p-10 mb-4'>
                    <h1>Job Category List</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-24 '>
                    {
                        categories.map(category => <JobCategories key={category.id} category={category}></JobCategories>
                        )
                    }
                </div>
            </div>

            <div className='mx-24 mb-24'>
                <div className='text-center p-6'>
                    <h1 className='text-bold text-4xl my-2'>Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                
                <div className='grid md:grid-cols-2 gap-4'>
                    {
                        jobData.map(featuredJob => <FeaturedJobs key={featuredJob.id} featuredJob={featuredJob}></FeaturedJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;