
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const ContactMe = () => {
    return (
        <section id='contact-me' className="mx-4 mb-16">
            <div className={` max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md `}>
                <h2 className="text-3xl text-center font-bold mb-12">
                    Contact <span className="text-blue-500">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h1 className="text-2xl font-bold mb-6">Contact Me</h1>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium ">FIRST NAME</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="mt-1 block w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium ">LAST NAME</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="mt-1 block w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium ">EMAIL</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 block w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium ">PHONE NUMBER</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="mt-1 block w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="query" className="block text-sm font-medium ">WHAT DO YOU HAVE IN MIND</label>
                                <p className="text-xs mb-1">Please enter query...</p>
                                <textarea
                                    id="query"
                                    rows="4"
                                    className="mt-1 block w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2"
                                ></textarea>
                            </div>

                            <button
                                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-blue-500 border-2 transition-all duration-200 cursor-pointer"
                            >
                                Submit
                            </button>
                        </form>
                    </div>


                    <div className="flex flex-col justify-between">
                        <div>
                            <p className=" mb-6">
                                I'm always excited to connect with like-minded individuals, discuss new opportunities, or collaborate on innovative projects. Whether you have a question, a proposal, or just want to say hello—feel free to reach out!
<br />
<br />
                                Drop me a message below, and I’ll get back to you as soon as possible. Let’s turn ideas into reality!!
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <FaPhone />
                                    <span className="">+880 132 830 2600</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <MdEmail />
                                    <span className="">tanvirislamakash2002@gmail.com</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <FaLocationDot />
                                    <span className="">Sagarpara/ Rajshahi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;