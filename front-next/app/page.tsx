import { Blog } from "@/components/Blog";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import HomeBlock1 from "./homeblock/homeBlock1/HomeBlock1";
import HomeBlock2 from "./homeblock/homeBlock2/HomeBlock2";
import HomeBlock3 from "./homeblock/homeBlock3/HomeBlock3";
import HomeBlock4 from "./homeblock/homeBlock4/HomeBlock4";
import HomeBlock5 from "./homeblock/homeBlock5/HomeBlock5";
import HomeBlock6 from "./homeblock/homeBlock6/HomeBlock6";
import HomeBlock7 from "./homeblock/homeBlock7/HomeBlock7";
import { fetchReviews } from "@/api";
import ServBlock9 from "./services/[id]/ServBlock9";
import { use } from "react";

export default function Home() {
    const reviews = use(fetchReviews());

    return (
        <Layout>
            <HomeBlock1 />
            <HomeBlock2 />
            <HomeBlock3 />
            <HomeBlock4 />
            <HomeBlock5 />
            <HomeBlock6 />
            <ServBlock9 reviews={reviews} />
            <Blog data={[]} />
        </Layout>
    );
}
