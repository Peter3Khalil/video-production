import HeroSection from '@/components/hero-section';
import OurClientsSection from '@/components/our-clients-section';
import ProjectsSection from '@/components/projects-section';
import SplashScreen from '@/components/splash-screen';

const Home = () => {
  const sections = [
    {
      component: HeroSection,
      id: 'home',
    },
    {
      component: ProjectsSection,
      id: 'projects',
    },
    {
      component: OurClientsSection,
      id: 'our_clients',
    },
  ];
  return (
    <div>
      <SplashScreen />
      <div className="divide-y-[1px] divide-muted">
        {sections.map(({ component: Section, id }) => (
          <Section key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
