import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        try {
            const response = await axios.post("/send-email", {
                name,
                email,
                message,
            });

            if (response.status === 200) {
                setSubmitted(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <div className="lg:mx-80 mx-20 ">
            <form onSubmit={handleSubmit}>
                <h1 className="text-center text-5xl font-bold  my-5 text-orange-600">
                    Contact Me
                </h1>
                <h1 className="text-center text-xl my-5 text-slate-700">
                    Please fill up the boxes and send me if you have any query
                </h1>
                <div className="mb-5 pt-0 ">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-5 pt-0">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-5 pt-0">
                    <textarea
                        placeholder="Your message"
                        name="message"
                        className="px-3 py-10 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0 text-center">
                    <button
                        className="bg-orange-600 text-white active:bg-purple-4n00 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                        type="submit"
                    >
                        Send a message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
