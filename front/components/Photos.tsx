import { Photo } from '@/api';
import Image from 'next/image';

interface PhotosProps {
  data: Photo[];
}

export function Photos({ data = [] }: PhotosProps) {
  return (
    <section className="content pt-[151px] pb-[58px]">
      <h2>Our photos</h2>

      <div className="grid grid-cols-3 gap-16">
        {data?.map((item) => (
          <figure key={item.id}>
            <Image src={item.photo} alt="" className="grid__img" />
            <figcaption className="grid__desc bord">{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div>
        <button></button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button></button>
      </div>
    </section>
  );
}
