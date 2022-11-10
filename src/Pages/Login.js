import { Player } from '@lottiefiles/react-lottie-player';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import useTitle from '../Hooks/useTitle';

const Login = () => {

    const { signIn, providerLogin, user } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();

    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')

    const from = location.state?.from?.pathname || '/';


    const handleOnSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
        form.reset();



    }
    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setError('');

            })
            .catch(error => {
                console.error('Error', error);
                setError(error.message);
            });

    }




    return (
        <div className="hero min-h-scree">
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
                    <div className="card-body">
                        <form onSubmit={handleOnSubmit} >
                            <h1 className="text-5xl font-bold text-green-600 my-4">Login now!</h1>
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
                                    Don't have an account? <Link to='/signup' className='text-green-500'>Sign up</Link>
                                </p>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn text-white border-0 bg-orange-400 hover:bg-orange-500">Login</button>
                            </div>
                        </form>
                        <div className='text-center'>OR</div>

                        <button className='btn btn-outline hover:bg-green-400
                        ' onClick={handleGoogleLogin}>Continue with Google</button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;