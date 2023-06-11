import { Layout } from "@/components/Layout";
import { use } from "react";
import "./reviews.scss";
import ReviewsBlock1 from "./ReviewsBlock1";
import ReviewsBlock2 from "./ReviewsBlock2";
import ReviewsBlock3 from "./ReviewsBlock3";
import { fetchServices } from "@/api";

export default function Reviews() {
    const services = use(fetchServices());

    return (
        <Layout>
            <ReviewsBlock1 services={services} />

            <ReviewsBlock2 />

            <ReviewsBlock3 />
        </Layout>
    );
}
