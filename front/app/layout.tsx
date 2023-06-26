import clsx from "clsx";
import "./globals.css";
import { Alfa_Slab_One, Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import { fetchServices, getCurrentLocation } from "@/api";
import { use, Suspense } from "react";
import { cookies } from "next/headers";
import Analytics from "@/components/Analytics";
export const fontAlfa = Alfa_Slab_One({
  weight: ["400"],
  style: ["normal"],
  variable: "--font-alfa",
  display: "swap",
  subsets: ["latin"],
});

export const fontMain = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  variable: "--font-main",
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Family Owned Business of Furniture Restoration with 20+ Years of Experience | #1FurnitureRestoration.com",
  description:
    "Our professionals with over 20 years of experience offer high-quality furniture restoration services. We value and preserve family traditions in our craftsmanship!",
};
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const services = use(fetchServices());
  // const location = use(getCurrentLocation());
  const nextCookies = cookies();
  const location: any = nextCookies.get("currentLocation");
  // console.log(typeof location?.value);
  const loc: any = location
    ? JSON.parse(location?.value)
    : {
        geo_latitude: 34.0522,
        geo_longitude: -118.2437,
        id: 369,
        location_name: "Los Angeles",
        population: 3977683,
        state: { id: 4, name: "California" },
      };

  return (
    <html lang="en" className={clsx(fontMain.variable, fontAlfa.variable)}>
      <body>
        <Suspense>
          <Analytics />
        </Suspense>

        <Header services={services} locat={loc} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
