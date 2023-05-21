import { fetchReviews } from '@/api';
import { Layout } from '@/components/Layout';
import { use } from 'react';

export default function Reviews() {
  const reviews = use(fetchReviews());

  return (
    <Layout className="content">
      <h1 className="mb-14">Reviews</h1>
      <div></div>

      <div className="grid grid-cols-3 gap-x-4 gap-y-9">
        {reviews?.results.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </Layout>
  );
}
