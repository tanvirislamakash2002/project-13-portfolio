import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const ProjectsSection = () => {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch('projectsData.json')
        .then(res=>res.json())
        .then(data=>{
            setProjects(data)
        })
    },[])

      useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="project-section" className="pb-20 bg-base-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="space-y-28">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >

              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                
                <p className="mb-6">
                  {project.description}
                </p>                

                <ul className="mb-6 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="badge badge-outline border-blue-500 text-blue-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                

                <div className="flex flex-wrap gap-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn bg-blue-500 text-white hover:bg-white hover:border-blue-500 hover:text-blue-500 gap-2"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline border-blue-500 text-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white gap-2"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <Link 
                    to={`project-details/${project.detailsLink}`} 
                    className="btn gap-2 hover:bg-blue-100 border-blue-200"
                  >
                    <FaInfoCircle /> Details
                  </Link>
                </div>
              </div>
              

              <div  data-aos={`${index % 2 === 0 ? 'fade-up' : 'fade-up'}`} className="md:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="rounded-lg shadow-xl w-96 h-96 border-2 border-base-200 transition-all duration-1300 group-hover:scale-[1.02] object-cover object-top hover:object-bottom"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;