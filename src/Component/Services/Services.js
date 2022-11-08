import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const allServices = useLoaderData();

    return (
        <div className='py-10 container mx-auto'>
            <h1 className='text-center text-4xl font-bold '>My All Services</h1>
            <p className='text-center font-semibold text-gray-600 text-xl mb-2'>Total Services: {allServices.length}</p>
            <hr />
            <div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 container mx-auto mt-10 px-5'>
                    {
                        allServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;