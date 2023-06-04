import { Layout } from "@/components/Layout";
import BooknowFirst from "./bookpopup/booknow/booknowFirst";
import BooknowSecond from "./bookpopup/booknowSecond/booknowSecond";
import {fetchServices} from '@/api'
import {use} from 'react';

export default function Book() {
  const services = use(fetchServices());
  return (
    <Layout className="">
      {" "}
      <BooknowFirst />
      <BooknowSecond services={services.results} />
    </Layout>
  );
}
