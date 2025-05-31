'use client';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiAward } from 'react-icons/fi';
import PublishedBooks from './PublishedBooks';
import AboutAuthor from './AboutAuthor';
import AwardSection from './AwardSection';
import Hero from './Hero';
import Gallery from './Gallery';
const HomePage = () => {
  return (
    <>
    <Hero/>
    <PublishedBooks/>
    <AboutAuthor/>
    <AwardSection/>
    <Gallery/>
    </>
  );
};

export default HomePage;
