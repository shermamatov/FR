import { fetchPhotos } from "@/api";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import { use } from "react";

export default function Photos() {
    const photos = use(fetchPhotos());

    return (
        <Layout className="content mb-20">
            <h1 className="mb-14 md:text-5xl text-3xl">Project photos</h1>
            <div></div>
            <div className="grid lg:grid-cols-3 grid-cols-2  gap-x-4 gap-y-9">
                {photos?.results.slice(0, 9).map((item) => (
                    <Image
                        key={item.id}
                        src={item.photo}
                        alt={item.caption}
                        width={300}
                        height={300}
                        unoptimized
                        className="aspect-video"
                        style={{ width: "100%" }}
                    />
                ))}
            </div>
        </Layout>
    );
}
