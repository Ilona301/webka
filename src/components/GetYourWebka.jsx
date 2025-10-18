import './index.css';
import MainSection from "./components/MainSection.jsx";
import Header from "./components/Header.jsx";
import AboutSection from "./components/AboutSection.jsx";
import WorkSection from "./components/WorkSection.jsx";
import WhyCooseSection from "./components/WhyCooseSection.jsx";
import GetYourWebka from "./components/GetYourWebka.jsx";
import { useRoutes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx"; // example home page
import SectionAboutUs from "./pages/SectionAboutUs.jsx"; // example about page

function App() {
    // define routes using useRoutes
    const router = useRoutes([
        {
            path: '/',
            children: [
                { index: true, element: <HomePage /> },
                { path: 'aboutUs', element: <SectionAboutUs /> },
                { path: 'getWebka', element: <GetYourWebka /> },
                // add other routes here if needed
            ],
        },
    ]);

    return (
        <>
            <Header />
            <MainSection />
            {/*<AboutSection />*/}
            <WorkSection />
            <WhyCooseSection />

            {/* render the router */}
            {router}
        </>
    );
}

export default App;
