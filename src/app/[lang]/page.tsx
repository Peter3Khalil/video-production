import AboutUsSection from '@/components/about-us-section';
import Contact from '@/components/contact';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import OurCustomerSection from '@/components/our-customers-section';
import ProjectsSection from '@/components/projects-section';
import ServicesSection from '@/components/services-section';
import SplashScreen from '@/components/splash-screen';
import VisionSection from '@/components/vision-section';
import WhyUsSection from '@/components/why-us-section';

const Home = () => {
  const sections = [
    {
      component: HeroSection,
      id: 'home',
    },
    {
      component: OurCustomerSection,
      id: 'our_customers',
    },
    {
      component: ProjectsSection,
      id: 'projects',
    },
    {
      component: VisionSection,
      id: 'vision',
    },
    {
      component: AboutUsSection,
      id: 'about',
    },
    {
      component: WhyUsSection,
      id: 'why_choose_us',
    },
    {
      component: ServicesSection,
      id: 'services',
    },
    {
      component: Contact,
      id: 'contact',
    },
  ];
  return (
    <main className="pt-16">
      <SplashScreen />
      <Header />
      <div className="divide-y-[1px] divide-muted">
        {sections.map(({ component: Section, id }) => (
          <Section key={id} id={id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
