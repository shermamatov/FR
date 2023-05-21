import { fetchPhotos } from '@/api';
import Image from 'next/image';
import { use } from 'react';

export default function Photos() {
  const photos = use(fetchPhotos());

  return (
    <main className="content">
      <h1 className="mb-14">Project photos</h1>
      <div></div>

      <div className="grid grid-cols-3 gap-x-4 gap-y-9">
        {photos?.results.map((item) => (
          <Image
            key={item.id}
            src={item.photo}
            alt={item.caption}
            width={300}
            height={300}
            className="aspect-video"
          />
        ))}
      </div>
    </main>
  );
}
