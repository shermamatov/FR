import { Blog } from '@/components/Blog';
import { Layout } from '@/components/Layout';
import Link from 'next/link';

export default async function Home() {
  return (
    <Layout isHome>
      <section className="content">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <h1>Family owners business of engineers</h1>
            <div>
              <p>30+ years experience in engineering</p>
              <p>Available 24/7 for Emergencies</p>
              <p>Quick service Same-Day inspection and estimate</p>
              <div>
                {/* rating */}
                <p>95% of clients recommend us</p>
              </div>
              <div>{/* logo */}</div>
            </div>
            <Link href="/book" className="btn-book">
              Book online now
            </Link>
          </div>
          {/* Image */}

          {/* Image before */}
          {/* Image after */}
        </div>
      </section>
      <div className="flex justify-center">
        <Link href="/book" className="btn-book px-12 text-lg">
          Book online now
        </Link>
      </div>
      <section className="bg-primary pt-[79px] pb-[131px]">
        <div className="content flex gap-16">
          <div></div>
          <div>
            <h2 className="mb-11">SEO TITLE HVAC CONTRACTOR IN LOS ANGELES</h2>
            <p>
              A global print fulfillment company partnered with Mason
              Interactive to grow omnichannel sales via Search Engine
              Optimization (SEO). During the course of the engagement, the
              client saw a 134% increase in organic traffic, resulting in a
              measurable increase in leads, and sales.
            </p>
            <Link href="/book">Read more</Link>
          </div>
        </div>
      </section>
      <p>Our engineers are trained</p>
      <p>at manufacturing plants</p>

      <section className="bg-brown-300  pt-[68px] pb-[83px]">
        <div className="content">
          <h2>FR Services in Southern California</h2>
          <p>
            The core SEO strategy has remained steady from day one: provide
            high-quality content to website visitors and be an authoritative
            thought leader in the industry; creating new, highly-useful content
            for the blog and landing pages; focusing on on-page optimizations
            targeting high-value search-terms.
          </p>
          <nav className="grid grid-cols-3 divide-y-0 divide-black"></nav>
        </div>
      </section>
      <div className="flex justify-center py-24 gap-16">
        <div>
          {/* Icon */}
          <b>+1000</b>
          <p className="capitalize">Completed project</p>
        </div>
        <div>
          {/* Icon */}
          <b>+5000</b>
          <p className="capitalize">clients reviews</p>
        </div>
      </div>
      <section className="bg-black text-white pt-[56px] pb-[180px]">
        <div className="content">
          <h2 className="text-center">Words From Customers</h2>
          <div></div>
          <div></div>
        </div>
      </section>
      <Blog data={[]} />
    </Layout>
  );
}
