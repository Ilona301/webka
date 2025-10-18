import './index.css';
import MainSection from "./components/MainSection.jsx";
import Header from "./components/Header.jsx";
import AboutSection from "./components/AboutSection.jsx";
import WorkSection from "./components/WorkSection.jsx";
import WhyCooseSection from "./components/WhyCooseSection.jsx";
import GetYourWebka from "./components/GetYourWebka.jsx";
import { Routes, Route } from "react-router-dom"; // ✅ add Route here

function App() {
    return (
        <>
            <Header />
            <MainSection />
            {/*<AboutSection />*/}
            <WorkSection />
            <WhyCooseSection />

            <Routes>
                <Route path="/getWebka" element={<GetYourWebka />} />
            </Routes>
        </>
    );
}

export default App;
