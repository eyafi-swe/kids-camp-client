import React from 'react';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
const MyReviewCard = (props) => {
    const { reviewText, service_name } = props.myReview;
    return (
        <div>
            <div className='mt-5 border px-3 py-2 rounded-lg shadow-lg bg-base-200 '>
                <div className='mb-2'>
                    <h1 className='text-xl font-semibold'>Service: {service_name}</h1>
                    <p>Review: {reviewText}</p>
                </div>
                <div className='flex justify-center mb-2'>
                    <div>
                        <input type="checkbox" id="deleteModal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="deleteModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">Confirm to delete the review?</h3>
                                <div className='flex justify-center'>
                                    <label htmlFor="deleteModal" className="btn bg-cyan-500 border-none mt-2 ">Confirm</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="deleteModal" className='bg-red-500 p-3 rounded-lg mr-5 shadow-lg shadow-red-500 cursor-pointer'><TrashIcon className='h-6 text-white'></TrashIcon></label>


                    <button className='bg-cyan-500 p-3 rounded-lg shadow-lg shadow-cyan-500'><PencilSquareIcon className='h-6 text-white'></PencilSquareIcon></button>
                </div>
            </div>

        </div>
    );
};

export default MyReviewCard;