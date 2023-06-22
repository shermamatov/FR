import clsx from "clsx";
import "./globals.css";
import { Alfa_Slab_One, Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
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
    title: "Family Owned Business of Furniture Restoration with 20+ Years of Experience | #1FurnitureRestoration.com",
    description:
        "Our professionals with over 20 years of experience offer high-quality furniture restoration services. We value and preserve family traditions in our craftsmanship!",
};
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={clsx(fontMain.variable, fontAlfa.variable)}>
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
}
