import { fetchServices } from "@/api";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { use } from "react";
import "./services.scss";
import HomeBlock5 from "../homeblock/homeBlock5/HomeBlock5";
import ServBlock1 from "@/components/servBlock1";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Comprehensive Furniture Repair and Restoration Services by #1furniturerestoration",
    description:
      "Discover a wide range of comprehensive furniture repair and restoration services at #1furniturerestoration. Our dedicated team of experts is equipped with the skills and expertise to handle everything from minor repairs to complete restorations. Whether it's fixing damaged joints, refinishing surfaces, reupholstering, or even recreating missing parts, we take pride in our meticulous approach and commitment to preserving the integrity of your furniture. With our tailored solutions and attention to detail, trust 1Furniture Restoration to breathe new life into your cherished pieces. Explore our services page and let us exceed your expectations with our unrivaled craftsmanship and passion for furniture restoration.",
  };
}

export default function Services() {
  const services = use(fetchServices());
  return (
    <Layout>
      {/* <ServBlock1 /> */}
      <section className="mb-16">
        <HomeBlock5 />
      </section>
      {/* <h1 className="mb-14">Services</h1>
            <div></div>

            <div className="grid grid-cols-3 gap-x-4 gap-y-9">
                {services?.results.map((item) => (
                    <Link key={item.id} href={`/services/${item.id}`}>
                        {item.name}
                    </Link>
                ))}
            </div> */}
    </Layout>
  );
}
