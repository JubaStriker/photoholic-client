import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import './styles/ServiceDetails.css'

const ServiceDetails = () => {

    const { user } = useContext(AuthContext);
    const { picture, price, details, _id, title } = useLoaderData();

    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = form.email.value;
        const contactNo = form.contactNo.value;
        const message = form.review.value;
        console.log(name, email, contactNo);

        const review = {
            serviceId: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            contactNo,
            message
        }

        fetch('http://localhost:5000/reviews', {
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

            <div className='max-w-xl text-center mx-auto my-8 text-xl px-1'>
                {details}
            </div>

            <div className='max-w-xl text-xl my-5 flex justify-around mx-auto'>
                <p> Price: <span className='text-green-600 font-medium font-sans'>{price}  ৳</span></p>
                <p className="btn text-white border-0 bg-orange-400 hover:bg-orange-500">Checkout</p>
            </div>


            {user ?
                <div>
                    <form onSubmit={handleReview} className='max-w-xl mx-auto my-10'>
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
                    Login to give reviews
                </h1>}


        </>
    );
};

export default ServiceDetails;