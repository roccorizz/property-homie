import React from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
function Contactme() {
    const notify = () => { toast.success("Message sent successfully!\nWe'll be in touch soon.") }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_52fhl94', 'template_yk9fivb', {
            from_name: e.target.name.value,
            from_email: e.target.email.value,
            message: e.target.message.value,
            sender_email: e.target.email.value,
            to_name: 'PropertyHomie Rocco',
        }, 'ltl4yhMRm5g-IgpFl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <div className='container mx-auto h-screen px-10 md:px-32 lg:px-48 py-5 md:py-10'>
            <form onSubmit={sendEmail}>
                <h1 className="text-center text-2xl md:text-4xl lg:text-5xl  font-bold  my-5 text-orange-700">Contact Me</h1>
                <h1 className="text-center text-md md:text-xl my-5 text-slate-700">Please fill up the boxes and send me if you have any query</h1>
                <div className="mb-5 pt-0 ">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-5 pt-0">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-5 pt-0">
                    <textarea
                        placeholder="Your message"
                        name="message"
                        className="px-3 py-10 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0 text-center">
                    <button
                        className="bg-orange-600 text-white active:bg-purple-4n00 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                        type="submit" value="Send" onClick={notify}
                    >
                        Send a message
                    </button>
                </div>
                <Toaster />
            </form>
        </div>
    );
}

emailjs.init('ltl4yhMRm5g-IgpFl');

export default Contactme;
