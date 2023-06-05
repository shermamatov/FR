import { Layout } from "@/components/Layout";
import BooknowFirst from "../../components/bookNow/booknowFirst";
import BooknowSecond from "../../components/bookNowSecond/booknowSecond";
import { fetchServices } from "@/api";
import { use } from "react";

export default function Book() {
  const services = use(fetchServices());
  return (
    <Layout className="">
      <BooknowFirst />
      <BooknowSecond services={services.results} />
    </Layout>
  );
}
