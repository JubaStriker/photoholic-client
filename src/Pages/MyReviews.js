import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

const MyReviews = () => {

    const { user } = useContext(AuthContext)

    const [userReview, setUserReview] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserReview(data))
    }, [user?.email])

    return (
        <div>

        </div>
    );
};

export default MyReviews;