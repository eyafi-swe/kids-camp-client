import React from 'react';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
const MyReviewCard = ({myReview,handleReviewDelete}) => {
    const { _id,reviewText, service_name } = myReview;
    
    return (
        <div>
            <div className='mt-5 border px-3 py-2 rounded-lg shadow-lg bg-base-200 '>
                <div className='mb-2'>
                    <h1 className='text-xl font-semibold'>Service: {service_name}</h1>
                    <p>Review: {reviewText}</p>
                </div>
                <div className='flex justify-center mb-2'>
                    <button className='bg-red-500 p-3 rounded-lg mr-5 shadow-lg shadow-red-500 cursor-pointer' onClick={()=>handleReviewDelete(_id)}><TrashIcon className='h-6 text-white'></TrashIcon></button>
                    {/* onClick={()=>handleReviewDelete(_id)} */}

                    <button className='bg-cyan-500 p-3 rounded-lg shadow-lg shadow-cyan-500'><PencilSquareIcon className='h-6 text-white'></PencilSquareIcon></button>
                </div>
            </div>

        </div>
    );
};

export default MyReviewCard;