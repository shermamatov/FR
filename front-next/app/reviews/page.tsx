import { fetchReviews } from '@/api';
import { Layout } from '@/components/Layout';
import { use } from 'react';
import './reviews.scss';
import ReviewsBlock1 from './ReviewsBlock1';
import ReviewsBlock2 from './ReviewsBlock2';
import ReviewsBlock3 from './ReviewsBlock3';

export default function Reviews() {
  const reviews = use(fetchReviews());

  return (
    <Layout>

    <ReviewsBlock1 />

<ReviewsBlock2 />

<ReviewsBlock3 />

    </Layout>
  );
}
