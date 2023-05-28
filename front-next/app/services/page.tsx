import { fetchServices } from "@/api";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { use } from "react";
import "./services.scss";
import HomeBlock5 from "../homeblock/homeBlock5/HomeBlock5";
import ServBlock1 from "./servBlock1";

export default function Services() {
    const services = use(fetchServices());
    return (
        <Layout>
            <ServBlock1 />
            <section className="mb-32 mt-[100px] md:mt-[200px]">
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
