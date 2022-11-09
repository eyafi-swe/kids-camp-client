import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid'
const ReviewCard = (props) => {
    const { reviewText, user_name, user_photoURL } = props.oneReview;
    return (
        <div className='border mt-5 flex rounded-md shadow-lg bg-base-200 py-2'>
            <div className="avatar">
                {
                    user_photoURL ?
                        <div className="w-16 rounded">
                            <img src={user_photoURL} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                        :
                        <UserCircleIcon className='h-8 w-8 text-gray-500' />
                }

            </div>
            <div className='px-3'>
                <p className='text-gray-600 font-semibold'>{user_name}</p>
                <p>{reviewText}</p>
            </div>
        </div>
    );
};

export default ReviewCard;

