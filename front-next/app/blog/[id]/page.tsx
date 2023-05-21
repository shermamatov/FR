import { fetchPhotos, fetchPostById } from '@/api';
import { PageNavProps } from '@/app/types';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function BlogSingle({ params }: PageNavProps) {
  const post = use(fetchPostById(params.id));

  return (
    <main className="content">
      <h1 className="mb-14">{post.title}</h1>
    </main>
  );
}
