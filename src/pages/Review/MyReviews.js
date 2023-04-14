import { useEffect, useState } from 'react';
import axios from 'axios';

function MyReviews({ user }) {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await axios.get(`https://propertyhomierocco-server.vercel.app/reviews?email=${user.email}`);
                setReviews(res.data);
            } catch (err) {
                setError(err.response.data.message);
            }
        };
        fetchReviews();
    }, [user]);

    return (
        <div>
            <h2 className="text-xl font-bold">My Reviews</h2>
            {error && <div className="text-red-500">{error}</div>}
            <div className="mt-4">
                {reviews.map((review) => (
                    <div key={review._id} className="bg-gray-100 p-4 rounded-md mt-4">
                        <p className="text-gray-800 font-bold">{review.review}</p>
                        <p className="text-gray-600">Rating: {review.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyReviews;
