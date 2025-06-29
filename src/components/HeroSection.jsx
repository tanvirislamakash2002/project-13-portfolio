import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';

const HeroSection = () => {
    return (
        <section id='home' className=" flex bg-base-100 max-w-7xl mx-auto">
            <div className="w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row  justify-between items-center">
                {/* content section */}
                <div className="md:w-1/2 mb-12 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-blue-500">Tanvir Islam Akash</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                        Full Stack Web-Developer
                    </h2>

                    <p className="text-lg mb-8   max-w-lg">
                        I have 1 year experience at web developing. I have created more than 12 website.
                    </p>

                    {/* links */}
                    <div className="flex space-x-4 mb-8">
                        <a target='_blank' href="https://github.com/tanvirislamakash2002" className="text-3xl hover:text-blue-500 transition-colors">
                            <FaGithub />
                        </a>
                        <a target='_blank' href="https://www.facebook.com/tanvirislamakash2002/" className="text-3xl hover:text-blue-500 transition-colors">
                            <FaFacebook />
                        </a>
                        <a target='_blank' href="https://mail.google.com/mail/?view=cm&to=tanvirislamakash2002@gmail.com" className="text-3xl hover:text-blue-500 transition-colors">
                            <HiOutlineMail />
                        </a>
                    </div>


                    <button className="btn text-white bg-blue-500 rounded-full px-8 text-xl hover:bg-blue-600">
                        <FaFileDownload className="mr-2" />
                        Download Resume
                    </button>
                </div>

                {/* image section */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 -z-10"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-spin-slow"></div>
                        <img
                            src="profile.png"
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full border-4 border-base-100"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;