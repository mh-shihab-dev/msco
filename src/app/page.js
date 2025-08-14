import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";


const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Industries />
      <Features />
      <Testimonials/>
      <Contact/>
    </div>
  );
};

export default HomePage;
