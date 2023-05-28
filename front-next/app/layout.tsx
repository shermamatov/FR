import clsx from "clsx";
import "./globals.css";
import { Alfa_Slab_One, Montserrat } from "next/font/google";

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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={clsx(fontMain.variable, fontAlfa.variable)}>
            <body>
                {children}
                <footer>
                    <div className="content grid grid-cols-3 gap-5 pt-14 pb-40">
                        <section>
                            <h3>About</h3>
                            <p>
                                We are an award winning HVAC company with over
                                10+ years experience in the business. We provide
                                a wide range of services for both residential
                                and commercial clients.
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
                                <a
                                    href="tel:+18188881010"
                                    className="font-bold"
                                >
                                    +1-818-888-10-10
                                </a>
                            </div>
                            <div>
                                {/* icon */}
                                <p>E-mail</p>
                                <a
                                    href="tel:+18188881010"
                                    className="font-bold"
                                >
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
