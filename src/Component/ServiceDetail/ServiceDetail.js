import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const ServiceDetail = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, title, image, fee, rating, description, method, tutor } = service;
    const [review,setReview] = useState({});
    const handleAddReview = event =>{
        event.preventDefault();
        console.log(review);
        fetch('https://kids-camp-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                if (data.acknowledged) {
                    alert("Success");
                    event.target.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    const handleBlur = event => {
        const value = event.target.value;
        const service_id = _id;
        const user_email = user?.email;
        const user_photoURL = user?.photoURL;
        let newReview = {...review};
        // newReview[field] = value;
        newReview = {reviewText:value,service_id,user_email,user_photoURL};
        setReview(newReview);
        // const newUser = { ...users };
        // newUser[field] = value;
        // setUsers(newUser);
    }

    return (
        <div className='py-10 container mx-auto'>
            <div className='grid grid-cols-2 gap-10'>
                <div className=''>
                    <h1 className='mb-2 text-3xl font-semibold'>Service Title: {title} for Kids</h1><hr />
                    <img src={image} alt="" className='mt-5 rounded-lg h-96 w-full' />
                    <p className='mt-5 text-lg font-semibold text-gray-600'>Service Fee: {fee}</p>
                    <p className='text-lg font-semibold text-gray-600'>Service Method: {method}</p>
                    <p className='text-lg font-semibold text-gray-600'>Service Ratings: {rating} Star</p>
                    <p className='text-lg font-semibold text-gray-600'>Service Tutor: {tutor}</p>
                    <p className='text-lg'><span className='font-semibold'>About Service: </span> {description}</p>

                </div>

                <div className=''>
                    <h1 className='mb-2 text-3xl font-semibold'>People's reviews about this service</h1><hr />
                    {
                        user ?
                            <>
                                <div className='mt-5'>
                                    <form onSubmit={handleAddReview}>
                                        <textarea className="textarea textarea-info focus:outline-none w-full" placeholder="Write A Review" name='reviewText' onBlur={handleBlur}></textarea>
                                        <button className='btn bg-cyan-500 border-none mt-2'>Add Review</button>
                                    </form>
                                </div>
                            </>
                            :
                            <>You need to login</>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;