"use client";
import { fetchPhotos } from "@/api";
import { Layout } from "@/components/Layout";
import axios from "axios";
import Image from "next/image";
import { use, useEffect, useState } from "react";

// async function getPaggination(limit = 10, offset = 0) {
//     const { data } = await axios(
//         `https://itek-dev.highcat.org/api/blogs?limit=${limit}&offset=${offset}`
//     );
//     console.log("ddd");
// }
export default function Photos() {
    // const [photos, setPhotos] = useState();
    // const photos = use(fetchPhotos(3));
    // useEffect(() => {
    //     getPaggination(10, 0);
    //     // setPhotos(fetchPhotos());
    // }, []);
    return (
        <Layout className="content mb-20">
            <h1 className="mb-14 md:text-5xl text-3xl">Project photos</h1>
            <div></div>
            <div className="grid lg:grid-cols-3 grid-cols-2  gap-x-4 gap-y-9">
                {/* {photos?.results.map((item) => (
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
                ))} */}
            </div>
        </Layout>
    );
}
