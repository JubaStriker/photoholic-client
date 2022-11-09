import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

    }







    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Player
                        src='https://assets9.lottiefiles.com/packages/lf20_mjlh3hcy.json'
                        className="player"
                        loop
                        autoplay
                    />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleOnSubmit} className="card-body">
                        <h1 className="text-5xl font-bold text-green-600">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <p>
                                Don't have an account? <Link to='/signup'>Sign up</Link>
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn text-white border-0 bg-orange-400 hover:bg-orange-500">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;