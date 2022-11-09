import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../../Hooks/useTitle';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    useTitle('My Reviews|KidsCamp');
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch(`https://kids-camp-server.vercel.app/reviews?user_email=${user?.email}`)
            .then(response => response.json())
            .then(data => {
                setMyReviews(data);
                
            })

    }, [user?.email])

    // console.log(myReviews)

    return (
        <div className='container mx-auto px-5 py-10'>
            <h1 className='text-center font-semibold text-3xl mb-2'>Your Reviews: {myReviews.length}</h1> <hr />

            {/* {
                myReviews ? 

            } */}
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    myReviews.map(myReview => <MyReviewCard key={myReview._id} myReview={myReview}></MyReviewCard>)
                }
            </div>

        </div>
    );
};

export default MyReviews;