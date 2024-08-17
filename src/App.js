import "./App.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import InfoSection from "./component/InfoSection";
import ServiceSlider from "./component/ServiceSlider";
import ExperienceArea from "./component/ExperienceArea";
import Portfolio from "./component/Portfolio";
import Testimonials from "./component/Testimonials";
import BlogUpdates from "./component/BlogUpdates";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <InfoSection />
      <ServiceSlider />
      <ExperienceArea />
      <Portfolio />
      <Testimonials />
      <BlogUpdates />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
