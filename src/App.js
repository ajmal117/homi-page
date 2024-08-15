import "./App.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import InfoSection from "./component/InfoSection";
import ServicesSlider from "./component/ServiceSlider";

function App() {
  return (
    <>
      <Navbar />
        <Banner />
        <InfoSection/>
        <ServicesSlider/>
       
    </>
  );
}

export default App;
