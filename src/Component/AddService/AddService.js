import React, { useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddService = () => {

    useTitle('Add Service|Kids')
    const [service,setService] = useState({});

    const notify = () => toast("Service Added");

    const handleAddService = event => {
        event.preventDefault();
        console.log(service);
        fetch('https://kids-camp-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                notify();
                event.target.reset();
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const hanldeValue = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...service };
        newService[field] = value;
        setService(newService);
    }

    return (
        <div className='py-10 container mx-auto px-5'>
            <div>
                <h1 className='text-3xl text-center font-semibold mb-2'>Add New Service To Kids Camp</h1><hr />

                <div className='mt-5 lg:w-3/4 mx-auto'>
                    <form className="card-body" onSubmit={handleAddService}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title Of Service</span>
                            </label>
                            <input onChange={hanldeValue} type="text" name='title' placeholder="Title of service" className="input input-bordered focus:outline-none input-info" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input onChange={hanldeValue} type="text" name='image' placeholder="Image URL" className="input input-info input-bordered focus:outline-none" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Fee</span>
                            </label>
                            <input onChange={hanldeValue} type="text" name='fee' placeholder="Service Fee" className="input input-info input-bordered focus:outline-none" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Method</span>
                            </label>
                            <input onChange={hanldeValue} type="text" name='method' placeholder="Service Method (At Home/My Place)" className="input input-info input-bordered focus:outline-none" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Provider Name</span>
                            </label>
                            <input onChange={hanldeValue} type="text" name='tutor' placeholder="Service provider name" className="input input-info input-bordered focus:outline-none" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input onChange={hanldeValue} type="number" name='rating' placeholder="Average rating of service" className="input input-info input-bordered focus:outline-none" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea onChange={hanldeValue} className="textarea textarea-info focus:outline-none w-full" placeholder="Description of service" name='description' required></textarea>
                        </div>
                        <div className="form-control mt-5">
                            <button className="btn bg-sky-600 border-none">Add Service</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddService;