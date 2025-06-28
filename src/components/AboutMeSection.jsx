import { FaUserTie, FaCode, FaLightbulb } from 'react-icons/fa';

const AboutMeSection = () => {
    return (
        <section className="pt-20 bg-base-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-10 -z-10"></div>
              <div className="absolute -inset-4 border-2 border-blue-500 rounded-lg opacity-30"></div>
              <img 
                src="/about-image.jpg" 
                alt="About Me" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-7/12">
            <h3 className="text-2xl font-semibold mb-6">
              Who I Am
            </h3>
            
            <p className=" mb-6">
              I'm a passionate frontend developer with 5 years of experience creating 
              responsive and user-friendly web applications. My expertise lies in React, 
              JavaScript, and modern CSS frameworks.
            </p>
            
            <p className=" mb-8">
              I believe in writing clean, efficient code and creating intuitive user 
              interfaces. When I'm not coding, you can find me contributing to open-source 
              projects or learning about new web technologies.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="card-body items-center text-center">
                  <FaUserTie className="text-3xl text-blue-500 mb-2" />
                  <h4 className="font-semibold">Experience</h4>
                  <p>1+ Years</p>
                </div>
              </div>

              <div className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="card-body items-center text-center">
                  <FaCode className="text-3xl text-blue-500 mb-2" />
                  <h4 className="font-semibold">Projects</h4>
                  <p>13+ Completed</p>
                </div>
              </div>

              <div className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="card-body items-center text-center">
                  <FaLightbulb className="text-3xl text-blue-500 mb-2" />
                  <h4 className="font-semibold">Specialization</h4>
                  <p>React & MongoDb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default AboutMeSection;