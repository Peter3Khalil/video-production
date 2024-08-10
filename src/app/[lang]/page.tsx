import AboutUsSection from '@/components/about-us-section';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
import ServicesSection from '@/components/services-section';
import SplashScreen from '@/components/splash-screen';
import WhyUsSection from '@/components/why-us-section';

const Home = () => {
  return (
    <main className="pt-16">
      <SplashScreen />
      <Header />
      <div className="divide-y-[1px] divide-muted">
        <HeroSection />
        <ProjectsSection id="projects" />
        <AboutUsSection />
        <WhyUsSection />
        <ServicesSection />
      </div>
    </main>
  );
};

export default Home;
