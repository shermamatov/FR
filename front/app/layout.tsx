import clsx from "clsx";
import "./globals.css";
import { Alfa_Slab_One, Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import { fetchServices, getCurrentLocation, fetchLocations } from "@/api";
import { use, Suspense } from "react";
import { cookies, headers } from "next/headers";
import Analytics from "@/components/Analytics";
import AnalyticsTwo from "@/components/AnalyticsTwo";

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
  const locations = use(fetchLocations());
  const locationCurrent = use(getCurrentLocation());
  const nextCookies = cookies();
  const location: any = nextCookies.get("currentLocation");
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  let locc = JSON.parse(location?.value);
  let path = fullUrl.split("/");
  let location_new = locations.results.filter(
    (item: any) =>
      item.location_name.replace(/%| /g, "_") === path[path.length - 1]
  );

  console.log("fullUrl", fullUrl);
  console.log("location_new", location_new);
  console.log("City", path[path.length - 1]);
  console.log("Locc", locc);

  // const loc: any = location_new ? location_new[0] : locationCurrent;
  const loc: any = location
    ? JSON.parse(location?.value)
    : location_new && locc?.location_name !== location_new[0]?.location_name
    ? location_new[0]
    : locationCurrent;

  return (
    <html lang="en" className={clsx(fontMain.variable, fontAlfa.variable)}>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta
          name="google-site-verification"
          content="VmYrpKg91VtR1vWxd3rNQPbsc0wBDd8rK-e3y0-kmYo"
        />
      </head>
      <body>
        <Suspense>
          <Analytics />
          <AnalyticsTwo />
        </Suspense>

        <Header services={services} locat={loc} locations={locations} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
