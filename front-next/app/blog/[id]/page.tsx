import { fetchPostById } from "@/api";
import { PageNavProps } from "@/app/types";
import { Layout } from "@/components/Layout";
import { use } from "react";

export default function BlogSingle({ params }: PageNavProps) {
    const post = use(fetchPostById(params.id));
    return (
        <Layout className="content">
            <h1 className="mb-14">{post.title}</h1>
        </Layout>
    );
}
