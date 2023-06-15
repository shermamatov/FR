import { Layout } from "@/components/Layout";
import { use } from "react";
import "./reviews.scss";
import ReviewsBlock1 from "./ReviewsBlock1";
import ReviewsBlock2 from "./ReviewsBlock2";
import ReviewsBlock3 from "./ReviewsBlock3";
import { fetchServices } from "@/api";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Hear What Our Satisfied Customers Say - Reviews of #1furniturerestoration",
    description:
      "At #1furniturerestoration, we value the satisfaction of our customers above all else. Take a moment to read through the reviews and testimonials from our delighted clients who have experienced the exceptional quality of our furniture repair and restoration services. From the heartfelt appreciation for the meticulous craftsmanship to the praise for our attentive customer service, these reviews serve as a testament to our commitment to exceeding expectations. Join the ranks of our satisfied customers and trust #1furniturerestoration to transform your furniture with precision and care.",
  };
}

export default function Reviews() {
  const services = use(fetchServices());

  return (
    <Layout>
      <ReviewsBlock1 services={services} />

      <ReviewsBlock2 services={services} />

      <ReviewsBlock3 services={services} />
    </Layout>
  );
}
