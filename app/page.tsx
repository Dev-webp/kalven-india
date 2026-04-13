import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Partners from "./components/Partners";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import About from "./components/About";

const HomePage = () => {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Services />
      <Divider />
      <Partners />
      <Divider />
      <WhyUs />
      <Divider />
      <Contact />
      <Divider />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;