import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiGraphql,
  SiDocker,
  SiPostman,
  SiPhp,
  SiGithub,
  SiDaisyui,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const SkillsSection = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="w-full h-full" />, color: 'text-blue-500' },
    { name: 'Node.js', icon: <FaNodeJs className="w-full h-full" />, color: 'text-green-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-full h-full" />, color: 'text-cyan-400' },
    { name: 'DaisyUI', icon: <SiDaisyui className="w-full h-full" />, color: 'text-purple-500' },
    { name: 'Firebase', icon: <SiFirebase className="w-full h-full" />, color: 'text-yellow-500' },
    { name: 'MongoDB', icon: <SiMongodb className="w-full h-full" />, color: 'text-green-600' },
    { name: 'Express.js', icon: <SiExpress className="w-full h-full" />, color: 'text-gray-400' },
    { name: 'React Router', icon: <FaReact className="w-full h-full" />, color: 'text-red-500' },
    { name: 'Figma', icon: <FaFigma className="w-full h-full" />, color: 'text-pink-500' },
    { name: 'GitHub', icon: <SiGithub className="w-full h-full" />, color: 'text-gray-800' },
    { name: 'JavaScript', icon: <SiJavascript className="w-full h-full" />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript className="w-full h-full" />, color: 'text-blue-600' },
    { name: 'Next.js', icon: <SiNextdotjs className="w-full h-full" />, color: 'text-black' },
    { name: 'React Native', icon: <TbBrandReactNative className="w-full h-full" />, color: 'text-blue-400' },
    { name: 'Redux', icon: <SiRedux className="w-full h-full" />, color: 'text-purple-400' },
    { name: 'GraphQL', icon: <SiGraphql className="w-full h-full" />, color: 'text-pink-600' },
    { name: 'Docker', icon: <SiDocker className="w-full h-full" />, color: 'text-blue-400' },
    { name: 'Postman', icon: <SiPostman className="w-full h-full" />, color: 'text-orange-500' },
    { name: 'PHP', icon: <SiPhp className="w-full h-full" />, color: 'text-purple-700' },
  ];

  return (
    <section className="py-20 bg-base-100">
        
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6  max-w-2xl mx-auto">
            Technologies and tools I work with on a daily basis
          </p>
        </div>

        {/* Skills icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 mb-4 ${skill.color} transition-all duration-300 group-hover:scale-110`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-center">{skill.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">Proficiency Levels</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>React & Next.js</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Node.js & Express</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Tailwind & DaisyUI</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>PHP</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;