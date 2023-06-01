import { Layout } from "@/components/Layout";
import BooknowFirst from "./bookpopup/booknow/booknowFirst";
import BooknowSecond from "./bookpopup/booknowSecond/booknowSecond";

export default function Book() {
  return (
    <Layout className="">
      {" "}
      <BooknowFirst />
      <BooknowSecond />
    </Layout>
  );
}
