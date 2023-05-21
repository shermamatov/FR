import { fetchPhotos, fetchPostById, fetchServiceById } from '@/api';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { use } from 'react';

export default function ServiceSingle({ params }) {
  const service = use(fetchServiceById(params.id));

  return (
    <main className="content">
      <h1 className="mb-14">{service.title}</h1>
      <div></div>
    </main>
  );
}
