import { useState } from 'react';
import axios from 'axios';

function AddReview({ user }) {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`https://propertyhomierocco-server.vercel.app/reviews/${user.email}`, {
                name: user.name,
                review,
                rating,
            });
            setReview('');
            setRating(0);
            setError(null);
            setSuccess(true);
        } catch (err) {
            setError(err.response.data.message);
            setSuccess(false);
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold">Write a Review</h2>
            {error && <div className="text-red-500">{error}</div>}
            {success && <div className="text-green-500">Review submitted successfully.</div>}
            <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="review" className="block text-gray-700 font-bold mb-2">
                        Review
                    </label>
                    <textarea
                        id="review"
                        name="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
                        Rating
                    </label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        min="1"
                        max="5"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit Review
                </button>
            </form>
        </div>
    );
}

export default AddReview;
