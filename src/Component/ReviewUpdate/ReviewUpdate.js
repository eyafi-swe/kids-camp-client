import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hooks/useTitle';

const ReviewUpdate = () => {
    useTitle('Update Review|KidsCamp');
    const review = useLoaderData();
    const { _id, reviewText, service_id, service_name, user_name, user_email, user_photoURL } = review;

    const [updatedReview, setUpdatedReview] = useState({});
    const notify = () => toast("Review Updated");

    const hanldeUpdate = event => {
        event.preventDefault();
        console.log(updatedReview);
        fetch(`https://kids-camp-server.vercel.app/update_review/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedReview),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                notify();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const hanldeValue = event => {
        const value = event.target.value;
        let newReview = { ...review };
        newReview = { reviewText: value, service_id, service_name, user_name, user_email, user_photoURL };
        setUpdatedReview(newReview);
    }
    return (
        <div className='container mx-auto py-10 px-5'>
            <h1 className='text-3xl font-semibold mb-2 text-center'>Update Your Review</h1><hr />
            <div className='mt-5 lg:w-3/4 mx-auto'>
                <form className="card-body" onSubmit={hanldeUpdate}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Reviewer Name</span>
                        </label>
                        <input type="text" name='user_name' value={user_name} className="input input-bordered input-info" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Reviewer Email</span>
                        </label>
                        <input type="text" name='user_email' value={user_email} className="input input-bordered input-info" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name='service_name' value={service_name} className="input input-bordered input-info" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Review Text</span>
                        </label>
                        <textarea onChange={hanldeValue} className="textarea textarea-info focus:outline-none w-full" placeholder="Review Text" name='reviewText' defaultValue={reviewText} required></textarea>

                    </div>
                    <div className="form-control mt-5">
                        <button className="btn bg-sky-600 border-none">Update Review</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ReviewUpdate;