import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../../Hooks/useTitle';
import MyReviewCard from './MyReviewCard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyReviews = () => {
    useTitle('My Reviews|KidsCamp');
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://kids-camp-server.vercel.app/reviews?user_email=${user?.email}`)
            .then(response => response.json())
            .then(data => {
                setMyReviews(data);
                setLoading(false)
            })

    }, [user?.email])

    const notify = () => toast("Review Deleted!");

    const handleReviewDelete = (id) => {
        console.log(id);
        fetch(`https://kids-camp-server.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const remaining = myReviews.filter(review => {
                     return review._id !== id
                })
                setMyReviews(remaining);
                notify()
            }
            )
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className='container mx-auto px-5 py-10'>
            <h1 className='text-center font-semibold text-3xl mb-2'>Your Reviews: {myReviews.length}</h1> <hr />

            {
                isLoading ?
                    <div className='flex justify-center mt-20'><button className="btn loading">loading</button></div>
                    :
                    <div>
                        {
                            myReviews.length ?

                                <div className='grid lg:grid-cols-3 gap-5'>
                                    {

                                        myReviews.map(myReview => <MyReviewCard key={myReview._id} myReview={myReview} handleReviewDelete={handleReviewDelete}></MyReviewCard>)


                                    }
                                </div>
                                :
                                <div className='flex justify-center mt-10'><p className='text-red-500 text-2xl font-semibold '>You did not post any review yet!!</p></div>
                        }
                    </div>

            }


        </div>
    );
};

export default MyReviews;