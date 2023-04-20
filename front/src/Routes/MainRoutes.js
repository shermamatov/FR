import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "../Pages/AboutUsPage";
import HomePage from "../Pages/HomePage";
import PrivacyPolicyPage from "../Pages/PrivacyPolicyPage";
import BookNowPage from "../Pages/BookNowPage";
import ServicesPage from "../Pages/ServicesPage";
<<<<<<< HEAD
import ReviewsPage from "../Pages/ReviewsPage";
import PhotosPage from "../Pages/PhotosPage";
=======

import Photos from "../components/Photos/Photos";
import BlogPage from "../Pages/BlogPage";
import Services2Page from "../Pages/Services2Page";
>>>>>>> 18c9475f38aeb4a30e7b854c208b13e804609bdc
const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        { link: "/AboutUs", Element: <AboutUsPage />, id: 1 },
        { link: "/", Element: <HomePage />, id: 2 },
        { link: "/privacy_policy", Element: <PrivacyPolicyPage />, id: 3 },
        { link: "/book_now", Element: <BookNowPage />, id: 4 },
        { link: "/services", Element: <ServicesPage />, id: 5 },
<<<<<<< HEAD
        { link: "/photos", Element: <PhotosPage />, id: 6 },
        { link: "/reviews", Element: <ReviewsPage />, id: 7 },
=======
        { link: "/photos", Element: <Photos />, id: 6 },
        { link: "/blog", Element: <BlogPage />, id: 7 },
        { link: "/services2", Element: <Services2Page />, id: 8 },
>>>>>>> 18c9475f38aeb4a30e7b854c208b13e804609bdc
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
