import { Player } from '@lottiefiles/react-lottie-player';
import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import app from '../Firebase/Firebase.config';
import useTitle from '../Hooks/useTitle';

const SignUp = () => {
    const auth = getAuth(app);

    const { createUser, user } = useContext(AuthContext)
    useTitle('SignUp')

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

        createUser(email, password)
            .then(result => {

                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => { })
                    .catch(error => { console.log(error.message) })


            })
            .catch(error => {
                console.error(error)

            })
        console.log(email, password);
        form.reset();

        console.log(user);

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Player
                        src='https://assets9.lottiefiles.com/packages/lf20_y7qo8rnh.json'
                        className="player"
                        loop
                        autoplay
                    />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleOnSubmit} className="card-body">
                        <h1 className="text-5xl font-bold text-green-600">Sign Up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <p className='mt-1'>
                                Already have an account? <Link to='/login' className='text-green-500'>Log in</Link>
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn text-white border-0 bg-orange-400 hover:bg-orange-500">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;