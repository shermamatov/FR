import { PropsWithChildren, use } from "react";
import Header from "./Header";
import CookiesPL from "./CookiesPL";
import { fetchServices, getCurrentLocation } from "@/api";

interface LayoutProps extends PropsWithChildren {
    location?: boolean;
    className?: string;
}

export function Layout({ children, location = true, className }: LayoutProps) {
    const currLocation = use(getCurrentLocation());
    const services = use(fetchServices());

    return (
        <>
            <Header locat={currLocation} serv={services} />
            {/* <Header services={services} currLocation={currLocation} /> */}
            <main className={className}>{children}</main>
            <CookiesPL />
            {location && (
                <section>
                    <h2 className="content mb-[23px] text-brown-800 text-center text-3xl sm:text-5xl">
                        Project location
                    </h2>
                    <iframe
                        className="w-full"
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3024.0035599325865!2d-74.00071413419064!3d40.717938129331245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s73%20Canal%20Street%2C%20New%20York%2C%20Los!5e0!3m2!1sru!2skg!4v1680988403905!5m2!1sru!2skg"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </section>
            )}
        </>
    );
}
