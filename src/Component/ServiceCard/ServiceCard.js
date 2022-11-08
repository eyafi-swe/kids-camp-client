import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    const { title, image, fee, rating, description } = props.service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Service" className='h-60 w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex justify-between text-lg font-semibold text-gray-600'>
                        <p>Fees: {fee}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <p>{description.slice(0, 100)}...</p>
                    <div className="card-actions justify-end">
                        <Link to='/services' className='btn bg-sky-600 border-none text-lg'>DETAILS</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;