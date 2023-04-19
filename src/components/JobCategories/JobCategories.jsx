import React from 'react';

const JobCategories = ({ category }) => {
    const { id, categoryLogo, categoryName, categoryAvailable } = category;

    return (
            <div className="card bg-base-100 shadow-xl bg-gradient-to-r from-indigo-50">
                <figure className="px-10 pt-10">
                    <img src={`${categoryLogo}`} alt="Invalid Logo" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{categoryName}</h2>
                    <p>{categoryAvailable}</p>
                </div>
            </div>
    );
};

export default JobCategories;