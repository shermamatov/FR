import { PaginationData, Service, fetchServices } from "@/api";
import Link from "next/link";
import { use } from "react";

export default function HeaderModal({
  setModal,
  services,
  location,
  modal,
}: any) {
  return (
    <div
      onMouseOver={() => setModal(true)}
      className="nav_modal"
      style={{
        display: `${modal ? "flex" : "none"}`,
      }}>
      <ul>
        {services?.results?.length === 0
          ? ""
          : services?.results.map(
              (item: Service) =>
                item.main_menu && (
                  <Link
                    href={`/services/${item.slug}/${
                      location?.id
                    }/${location?.location_name?.replace(/%| /g, "_")}`}
                    key={item.id}>
                    <li className="mb-5">{item.name}</li>
                  </Link>
                )
            )}
      </ul>
    </div>
  );
}
