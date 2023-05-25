import './block5.css'
import { fetchServices } from '@/api';
import Link from 'next/link';
import { use } from 'react';

export default function HomeBlock5() {
    const services = use(fetchServices());
    return (
        <div className="services_block">
            <div className="content">
                <div
                    className={
                        "services__wrapper"
                    }
                >
                    <div className="container">
                        <div className="services__inner">
                            <div className="services__top">
                                <h2 className="services__title bord">
                                    FR Services in <br /> Southern California
                                </h2>
                                <p className="services__desc bord">
                                    The core SEO strategy has remained steady from
                                    day one: provide high-quality content to website
                                    visitors and be an authoritative thought leader
                                    in the industry; creating new, highly-useful
                                    content for the blog and landing pages; focusing
                                    on on-page optimizations targeting high-value
                                    search-terms.
                                </p>
                            </div>
                            <div className="services__bottom">
                                <ul className="services__list  grid grid-cols-3 gap-x-4 gap-y-9">

                                    {services?.results.map((item) => (
                                        <li key={item.id}>
                                            <Link href={`/services/${item.id}`}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={"d-none"}>

                                <button

                                >
                                    Read more
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
