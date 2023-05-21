import { fetchServices } from '@/api';
import { Layout } from '@/components/Layout';
import Link from 'next/link';
import { use } from 'react';

export default function Services() {
  const services = use(fetchServices());

  return (
    <Layout className="content">
      <h1 className="mb-14">Services</h1>
      <div></div>

      <div className="grid grid-cols-3 gap-x-4 gap-y-9">
        {services?.results.map((item) => (
          <Link key={item.id} href={`/services/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </Layout>
  );
}
