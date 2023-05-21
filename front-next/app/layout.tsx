import clsx from 'clsx';
import './globals.css';
import logo from '@/assets/navLogo.png';
import { Alfa_Slab_One, Montserrat } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

export const fontAlfa = Alfa_Slab_One({
  weight: ['400'],
  style: ['normal'],
  variable: '--font-alfa',
  display: 'swap',
  subsets: ['latin'],
});

export const fontMain = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
  variable: '--font-main',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata = {
  title: '#1furniture restoration',
  description:
    'We offer a wide range of HVAC services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(fontMain.variable, fontAlfa.variable)}>
      <body>
        <header>
          <div className="bg-brown-200">
            <div className="discount content items-center h-16 px-40">
              <div className="flex gap-2 text-sm items-center">
                <address>73 Canal Street, California, LA</address>
                <Link href="/location">change</Link>
              </div>
              <p className="text-center text-brown-800 text-xl font-bold flex-shrink">
                <span className="pr-4">20%</span> Todays special Deal in your
                city
              </p>
            </div>
          </div>

          <div className="content pl-40 relative">
            {/* TODO: Fix position */}
            <Link href="/">
              <Image
                src={logo}
                width={188}
                height={160}
                alt="logo"
                className="absolute left-8 -z-10"
              />
            </Link>
            <div className="header-content">
              <nav>
                <a href="/about-us">About us</a>
                <a href="/services">Services</a>
                <a href="/reviews">Reviews</a>
                <a href="/blog">Blog</a>
                <a href="/photos">Project photos</a>
              </nav>
              <div className="flex gap-4">
                <a href="tel:+18188881010" className="phone">
                  +1-818-888-10-10
                </a>
                <Link href="/book" className="btn">
                  Book online now
                </Link>
              </div>
            </div>
          </div>
        </header>
        {children}
        <section>
          <h2 className="content mb-[23px] text-brown-800 text-center">
            Project location
          </h2>
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3024.0035599325865!2d-74.00071413419064!3d40.717938129331245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s73%20Canal%20Street%2C%20New%20York%2C%20Los!5e0!3m2!1sru!2skg!4v1680988403905!5m2!1sru!2skg"
            height="543"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
        <footer>
          <div className="content grid grid-cols-3 gap-5 pt-14 pb-40">
            <section>
              <h3>About</h3>
              <p>
                We are an award winning HVAC company with over 10+ years
                experience in the business. We provide a wide range of services
                for both residential and commercial clients.
              </p>

              <a href="">facebook</a>
              <a href="">gmail</a>
              <a href="">yumi</a>
            </section>
            <section>
              <h3>Contacts</h3>
              <div>
                {/* icon */}
                <p>Address</p>
                <address className="font-bold">
                  73 Canal Street, New York, Los
                </address>
              </div>
              <div>
                {/* icon */}
                <p>Phone number</p>
                <a href="tel:+18188881010" className="font-bold">
                  +1-818-888-10-10
                </a>
              </div>
              <div>
                {/* icon */}
                <p>E-mail</p>
                <a href="tel:+18188881010" className="font-bold">
                  +1-818-888-10-10
                </a>
              </div>
            </section>
            <section>
              <h3>Quick links</h3>
              <nav className="grid divide-y-0 divide-white font-bold">
                <a href="/about-us">About us</a>
                <a href="/services">Services</a>
                <a href="/blog">Blog</a>
                <a href="/location">Locations</a>
                <a href="/services">Contacts</a>
              </nav>
            </section>
          </div>
        </footer>
      </body>
    </html>
  );
}
