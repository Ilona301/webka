import './index.css';
import MainSection from "./components/MainSection.jsx";
import Header from "./components/Header.jsx";
import AboutSection from "./components/AboutSection.jsx";
import WorkSection from "./components/WorkSection.jsx";
import WhyCooseSection from "./components/WhyCooseSection.jsx";

function App() {

  return (
    <>
        <Header/>
        <MainSection />
        {/*<AboutSection />*/}
        <WorkSection />
        <WhyCooseSection/>
    </>
  )
}

export default App
