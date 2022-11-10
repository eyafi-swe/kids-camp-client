import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signuppng from '../../Assets/signin.png'
import { AuthContext } from '../../Context/UserContext';
const Signup = () => {
    const { userSignUp, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const imageUrl = form.imageurl.value;
        const email = form.email.value;
        const password = form.password.value;
        setLoading(true);
        console.log(name, imageUrl, email, password);
        userSignUp(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                handleUpdateUserProfile(name, imageUrl);

                setLoading(false);
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                form.reset();
                fetch('https://kids-camp-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('KidsCampToken', data.token);
                        navigate('/');
                    });

            })
            .catch(error => {
                const errormsg = error.message;
                let errorSplit = errormsg.split(' ')
                //let lastElement = arry[arry.length - 1];
                let errorMessage = errorSplit[errorSplit.length - 1];
                setError(errorMessage);
                console.log(error.message);
                setLoading(false);
            })
    }

    const handleUpdateUserProfile = (name, imageUrl) => {
        const profile = {
            displayName: name,
            photoURL: imageUrl
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className={`py-10`}>
            <h1 className='text-center text-4xl font-bold '>Register To KidsCamp</h1>

            <div className='mb-10 flex lg:flex-row flex-col items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <img src={signuppng} alt="pngwing-com" border="0" className='h-72 mr-5' />

                </div>
                <div className={`card md:w-1/2 lg:w-2/6 shadow-2xl mt-10 bg-base-100`}>
                    <form className="card-body" onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Full Name" className="input input-bordered focus:outline-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url (optional)</span>
                            </label>
                            <input type="text" name='imageurl' placeholder="Image Url (optional)" className="input input-bordered focus:outline-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered focus:outline-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered focus:outline-none" required />
                            <label className="label">
                                <Link to='/signin' className="label-text-alt link link-hover">Already, have an account? Login Here</Link>
                            </label>
                        </div>
                        {error && <p className='text-red-600'>Error: {error}</p>}
                        <div className="form-control">
                            <button className={`btn bg-sky-600 border-none ${loading ? 'loading' : ''}`}>Register</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Signup;