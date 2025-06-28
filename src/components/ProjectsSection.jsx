import { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from 'react-icons/fa';

const ProjectsSection = () => {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch('projectsData.json')
        .then(res=>res.json())
        .then(data=>{
            setProjects(data)
        })
    },[])

  return (
    <section className="py-20 bg-base-100" id="projects">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                

                <ul className="mb-6 space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
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
                    className="btn btn-primary gap-2"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline gap-2"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a 
                    href={project.detailsLink} 
                    className="btn btn-ghost gap-2"
                  >
                    <FaInfoCircle /> Details
                  </a>
                </div>
              </div>
              

              <div className="md:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="rounded-lg shadow-xl w-full h-auto border-2 border-base-200 transition-transform duration-300 group-hover:scale-[1.02]"
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