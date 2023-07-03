import { PaginationData, Service, fetchServices } from "@/api";
import Link from "next/link";
import { use } from "react";

export default function HeaderModal({
  setModal,
  services,
  location,
  modal,
  locations,
}: any) {
  return (
    <div
      onMouseOver={() => setModal(true)}
      className="nav_modal"
      style={{
        display: `${modal ? "flex" : "none"}`,
      }}>
      <ul className="h-auto">
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
                    <li className="mb-5" onClick={() => setModal(false)}>
                      {item.name}
                    </li>
                  </Link>
                )
            )}
        {/* {locations?.results?.length === 0 || services?.results?.length === 0
          ? ""
          : locations?.results?.map((locat: any) =>
              services?.results?.map(
                (item: Service) =>
                  item.main_menu && (
                    <Link
                      href={`/services/${item.slug}/${
                        locat?.id
                      }/${locat?.location_name?.replace(/%| /g, "_")}`}
                      key={item.id}
                      className={
                        location.location_name !== locat?.location_name
                          ? `hidden invisible`
                          : "flex mb-5"
                      }>
                      <li onClick={() => setModal(false)}>{item.name}</li>
                    </Link>
                  )
              )
            )} */}
      </ul>
    </div>
  );
}
