import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Loader from './components/Loader';
import Background from './components/Background';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Capabilities from './components/Capabilities';
import Projects from './components/Projects';
import Credentials from './components/Credentials';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  // `?static` skips the intro loader (used for screenshots and automated checks).
  const [loading, setLoading] = useState(() => !new URLSearchParams(window.location.search).has('static'));

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 1100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <Background />
      <ScrollProgress />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-electric-600 focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <Summary />
        <Experience />
        <Expertise />
        <Capabilities />
        <Projects />
        <Credentials />
        <Learning />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  );
}
