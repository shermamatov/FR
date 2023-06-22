import clsx from "clsx";
import "./globals.css";
import { Alfa_Slab_One, Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import { fetchServices, getCurrentLocation } from "@/api";
import { use } from "react";
import { cookies } from "next/headers";
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
  title: "#1furniture restoration",
  description:
    "We offer a wide range of HVAC services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts.",
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
  const loc: any = JSON.parse(location?.value);

  return (
    <html lang="en" className={clsx(fontMain.variable, fontAlfa.variable)}>
      <body>
        <Header services={services} locat={loc} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
