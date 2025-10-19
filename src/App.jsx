import './index.css';
import MainSection from "./components/MainSection.jsx";
import Header from "./components/Header.jsx";
import AboutSection from "./components/AboutSection.jsx";
import WorkSection from "./components/WorkSection.jsx";
import WhyChooseSection from "./components/WhyChooseSection.jsx";
import GetYourWebka from "./components/GetYourWebka.jsx";
import Contact from "./components/Contact.jsx";
import { Routes, Route } from "react-router-dom";
import OurWorks from "./components/OurWorks.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <MainSection />
                        {/*<AboutSection />*/}
                        <WorkSection />
                        <WhyChooseSection />
                    </>
                } />

                <Route path="/getWebka" element={
                    <>
                        <Header />
                        <GetYourWebka />
                    </>}
                    />

                <Route path="/contact" element={
                    <>
                        <Header />
                        <Contact />
                    </>
                } />

                <Route path="/about" element={
                    <>
                        <Header />
                        <AboutSection />
                    </>
                } />
                <Route path="/our-works" element={
                    <>

                        <OurWorks />
                    </>
                } />
            </Routes>
        </>
    );
}

export default App;