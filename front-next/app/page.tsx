import { Blog } from "@/components/Blog";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import HomeBlock1 from './homeblock/homeBlock1/HomeBlock1';
import HomeBlock2 from './homeblock/homeBlock2/HomeBlock2';
import HomeBlock3 from './homeblock/homeBlock3/HomeBlock3';
import HomeBlock4 from './homeblock/homeBlock4/HomeBlock4';
import HomeBlock5 from './homeblock/homeBlock5/HomeBlock5';
import HomeBlock6 from './homeblock/homeBlock6/HomeBlock6';

export default async function Home() {
    return (
        <Layout isHome>
            <HomeBlock1 />
            <HomeBlock2 />
            <HomeBlock3 />
            <HomeBlock4 />
            <HomeBlock5 />
            <HomeBlock6 />

            <section className="bg-black text-white pt-[56px] pb-[180px]">
                <div className="content">
                    <h2 className="text-center">Words From Customers</h2>
                    <div></div>
                    <div></div>
                </div>
            </section>
            <Blog data={[]} />
        </Layout>
    );
}
