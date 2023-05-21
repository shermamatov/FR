import { fetchBlog } from '@/api';
import { Layout } from '@/components/Layout';
import Link from 'next/link';
import { use } from 'react';

export default function Blog() {
  const posts = use(fetchBlog());

  console.log('posts', posts)

  return (
    <Layout className="content">
      <h1 className="mb-14">Blog</h1>
      <div></div>

      <div className="grid grid-cols-3 gap-x-4 gap-y-9">
        {posts?.results.map((item) => (
          <Link key={item.id} href={`/blog/${item.id}`}>{item.title}</Link>
        ))}
      </div>
    </Layout>
  );
}
