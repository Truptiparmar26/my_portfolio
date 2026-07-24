import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AISection from '../components/AISection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import CertificatesSection from '../components/CertificatesSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <AISection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <CertificatesSection />
      <Testimonials />
      <ContactSection />
    </main>
  );
};

export default Home;
