import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

const MyReviews = () => {

    const { user } = useContext(AuthContext)

    const [userReview, setUserReview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserReview(data))
    }, [user?.email])
    console.log(userReview);

    return (
        <div>
            <h1 className='text-center text-3xl my-16'>See all your reviews</h1>

            <div>
                <div className="w-full p-4 shadow-md lg:max-w-lg mx-auto rounded-xl">
                    <div className="space-y-2 flex justify-between items-center">
                        <div>
                            <h3 className="text-2xl font-semibold">
                                <span className="text-orange-500"> {user.displayName}</span>
                            </h3>
                            <p className="text-gray-600">
                                {user.email}
                            </p>
                        </div>
                        <div>
                            <img className='h-24 w-24 rounded-full' src={user.photoURL} alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-5 my-10'>
                {userReview.map(msg => <div key={msg.message}>

                    <div className="w-full p-4 shadow-md lg:max-w-lg">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold">
                                Review from <span className="text-orange-500"> {msg.customer}</span>
                            </h3>
                            <p className="text-gray-600">
                                Service name : <span className="text-green-600"> {msg.serviceName}</span>
                            </p>
                            <p className="text-gray-600">
                                "{msg.message}"
                            </p>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MyReviews;