import { Layout } from "@/components/Layout";
import BooknowFirst from "../../components/bookNow/booknowFirst";
import BooknowSecond from "../../components/bookNowSecond/booknowSecond";
import { fetchServices } from "@/api";
import { use } from "react";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Book Your Furniture Restoration Appointment with 1#furniturerestoration",
    description:
      "Ready to bring new life to your beloved furniture? Book your appointment with 1Furniture Restoration today. Our skilled team of artisans is dedicated to providing expert furniture repair and restoration services tailored to your specific needs. With our seamless booking process, you can easily schedule a convenient time for an assessment and discuss the details of your project. Trust us to revitalize your furniture and preserve its beauty for years to come. Don't wait, book your restoration appointment now and embark on a journey of furniture transformation with #1furniturerestoration..",
  };
}

export default function Book() {
  const services = use(fetchServices());
  return (
    <Layout className="">
      <BooknowFirst />
      <BooknowSecond services={services.results} />
    </Layout>
  );
}
