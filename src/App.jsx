import './index.css';
import MainSection from "./components/MainSection.jsx";
import Header from "./components/Header.jsx";
import AboutSection from "./components/AboutSection.jsx";
import WorkSection from "./components/WorkSection.jsx";
import WhyChooseSection from "./components/WhyChooseSection.jsx";
import GetYourWebka from "./components/GetYourWebka.jsx";
import Contact from "./components/Contact.jsx";
import { Routes, Route } from "react-router-dom";

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

                <Route path="/getWebka" element={<GetYourWebka />} />

                <Route path="/contact" element={
                    <>
                        <Header />
                        <Contact />
                    </>
                } />
            </Routes>
        </>
    );
}

export default App;