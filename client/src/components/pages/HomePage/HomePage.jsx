import Landing from './LandingPage/LandingPage';
import About from './About/About';
import Client from './Client/Client';
import Projects from './Projects/Projects';
import Testimonial from './Testimonial/Testimonial';

function HomePage() {
  return (
    <>
      <Landing />
      <About />
      <Client />
      <Projects />
      <Testimonial />
    </>
  );
}
export default HomePage;
