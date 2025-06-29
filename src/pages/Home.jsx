import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMeSection from '../components/AboutMeSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactMe from '../components/ContactMe';

const Home = () => {
    return (
        <div>
            <section className='mt-28'>
                <HeroSection></HeroSection>
            </section>
            <section className="mt-14">
                <AboutMeSection></AboutMeSection>
            </section>
            <section className="mt-14">
                <SkillsSection></SkillsSection>
            </section>
            <section className="mt-14">
                <ProjectsSection></ProjectsSection>
            </section>
            <section className="mt-14">
                <ContactMe></ContactMe>
            </section>
        </div>
    );
};

export default Home;