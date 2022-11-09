import React from 'react';

const AddService = () => {

    const handleAddService = event => {
        event.preventDefault();

    }

    return (
        <div className='py-10 container mx-auto px-5'>
            <div>
                <h1 className='text-3xl text-center font-semibold mb-2'>Add New Service To Kids Camp</h1><hr />

                <div className='mt-5 w-3/4 mx-auto'>
                    <form className="card-body" onSubmit={handleAddService}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title Of Service</span>
                            </label>
                            <input type="text" name='title' placeholder="Title of service" className="input input-bordered focus:outline-none input-info" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name='imageurl' placeholder="Image URL" className="input input-info input-bordered focus:outline-none" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Method</span>
                            </label>
                            <input type="text" name='method' placeholder="Service Method (At Home/My Place)" className="input input-info input-bordered focus:outline-none" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Provider Name</span>
                            </label>
                            <input type="text" name='tutor' placeholder="Service provider name" className="input input-info input-bordered focus:outline-none" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name='rating' placeholder="Average rating of service" className="input input-info input-bordered focus:outline-none" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="textarea textarea-info focus:outline-none w-full" placeholder="Description of service" name='description' required></textarea>
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