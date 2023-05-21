import { fetchServiceById } from '@/api';
import { PageNavProps } from '@/app/types';
import { Layout } from '@/components/Layout';
import { use } from 'react';

export default function ServiceSingle({ params }: PageNavProps) {
  const service = use(fetchServiceById(params.id));

  return (
    <Layout className="content">
      <h1 className="mb-14">{service.name}</h1>
      <div></div>
    </Layout>
  );
}
