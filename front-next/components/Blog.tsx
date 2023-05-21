import { Post } from '@/api';
import Link from 'next/link';

interface BlogProps {
  data: Post[];
}

export function Blog({ data = [] }: BlogProps) {
  return (
    <section className="content pt-[108px] pb-[93px]">
      <h2>Latest posts</h2>
      <div></div>
      <Link href="/book">View all posts</Link>
    </section>
  );
}
