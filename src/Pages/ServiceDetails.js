import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import useTitle from '../Hooks/useTitle';
import './styles/ServiceDetails.css'

const ServiceDetails = () => {
    useTitle('Service Details');
    const { user } = useContext(AuthContext);
    const { picture, price, details, _id, title } = useLoaderData();
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://photoholic.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(reviews);




    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = form.email.value;
        const contactNo = form.contactNo.value;
        const message = form.review.value;


        const review = {
            serviceId: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            contactNo,
            message
        }

        fetch('https://photoholic.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully');
                    form.reset()
                }
            })
            .catch(error => console.log(error))

    };


    return (
        <>
            <div className='my-14'>
                <h1 className='text-4xl md:text-6xl font-semibold text-center'>Customer Satisfaction</h1>
                <h2 className='text-2xl md:text-4xl font-medium text-center'>is our first priority</h2>
            </div>

            <div>
                <h1 className='text-4xl text-center'>Check out our <span className='text-orange-400'>{title}</span> service</h1>
            </div>

            <div className='my-16 flex justify-center px-4'>
                <img className='rounded-lg card-img' src={picture} alt="" />
            </div>

            <div className='max-w-xl lg:max-w-6xl text-center mx-auto my-8 text-xl px-1'>
                {details}
            </div>

            <div className='max-w-xl text-xl my-5 flex justify-around mx-auto'>
                <p> Price: <span className='text-green-600 font-medium font-sans'>{price}  ৳</span></p>
                <p className="btn text-white border-0 bg-orange-400 hover:bg-orange-500">Checkout</p>
            </div>

            <h1 className='text-center text-4xl my-16'>Customer Reviews</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-5 my-10'>
                {reviews?.map(review => <div key={review.message}>

                    <div className="w-full p-4 shadow-md lg:max-w-lg">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold">
                                Review from <span className="text-orange-500"> {review.customer}</span>
                            </h3>
                            <p className="text-gray-600">
                                Service name : <span className="text-green-600"> {review.serviceName}</span>
                            </p>
                            <p className="text-gray-600">
                                "{review.message}"
                            </p>
                        </div>
                    </div>
                </div>)}
            </div>

            {user ?
                <div>
                    <h1 className='text-3xl text-center my-11'>Send us your review</h1>
                    <form onSubmit={handleReview} className='max-w-xl mx-auto my-10 px-2'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-xl mx-auto my-10'>
                            <input type="text" name='firstName' placeholder="First Name" className="input input-bordered input-warning w-full max-w-xs" />
                            <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered input-warning w-full max-w-xs" />
                            <input type="text" name='contactNo' placeholder="Contact no." className="input input-bordered input-warning w-full max-w-xs" />
                            <input type="email" name='email' placeholder="email" defaultValue={user?.email} readOnly className="input input-bordered input-warning w-full max-w-xs" />

                        </div>

                        <textarea name='review' className="textarea textarea-warning w-full" placeholder="Type your review"></textarea>

                        <button type='submit' className='btn my-2 text-white border-0 bg-orange-400 hover:bg-orange-500'>Submit</button>
                    </form>
                </div>
                :
                <h1 className='text-3xl text-center my-10'>
                    <Link to='/login'><span className='text-green-500'>Login</span></Link> to give reviews
                </h1>}


        </>
    );
};

export default ServiceDetails;