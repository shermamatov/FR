import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "../Pages/AboutUsPage";
import HomePage from "../Pages/HomePage";
import PrivacyPolicyPage from "../Pages/PrivacyPolicyPage";
import BookNowPage from "../Pages/BookNowPage";
import ServicesPage from "../Pages/ServicesPage";
import Photos from "../components/Photos/Photos";
const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        { link: "/AboutUs", Element: <AboutUsPage />, id: 1 },
        { link: "/", Element: <HomePage />, id: 2 },
        { link: "/privacy_policy", Element: <PrivacyPolicyPage />, id: 3 },
        { link: "/book_now", Element: <BookNowPage />, id: 4 },
        { link: "/services", Element: <ServicesPage />, id: 5 },
        { link: "/photos", Element: <Photos />, id: 6 },
    ];
    return (
        <>
            <Routes>
                {PUBLIC_ROUTES.map((item) => (
                    <Route
                        path={item.link}
                        element={item.Element}
                        key={item.id}
                    />
                ))}
            </Routes>
        </>
    );
};

export default MainRoutes;
