"use client";
import { PaginationData, Photo, fetchPhotos, getPaggPage } from "@/api";
import { Layout } from "@/components/Layout";
import "./photos.scss";
import { use, useEffect, useState } from "react";
import axios from "axios";

export default function Photos() {
  const [modal, setModal] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>();
  const [photos2, setPhotos2] = useState<PaginationData<Photo>>();
  const [currentPage, setCurrentPage] = useState(0);
  const [filterYear, setFilterYear] = useState<number | string>();
  const num = 9;

  async function getData(limit = num, offset = 0) {
    axios(
      `https://1furniturerestoration.com/api/media/?limit=${limit}&offset=${offset}`
    ).then(({ data }) => {
      setPhotos(data.results);
      setPhotos2(data);
    });
  }

  useEffect(() => {
    getData(num, num * currentPage);
  }, [currentPage]);
  async function getFilter(filterArr = [], filterArrTypes = []) {
    let filter: any = [];
    let results = [...(photos ?? [])];
    if (
      results.length !== 0 &&
      filterArr.length !== 0 &&
      filterArrTypes.length !== 0
    ) {
      let yearArr: any = [];
      let typeArr: any = [];
      for (let i of filterArr) {
        for (let j of results) {
          if (j?.created_at?.slice(0, 4) == i) {
            yearArr.push(j);
          }
        }
      }
      for (let i of filterArrTypes) {
        for (let j of results) {
          if (j?.type_of == i) {
            typeArr.push(j);
          }
        }
      }
      if (yearArr.length >= typeArr.length) {
        let filtered = yearArr.filter((value: any) => typeArr.includes(value));
        for (let i of filtered) {
          filter.push(i);
        }
      } else {
        let filtered = typeArr.filter((value: any) => yearArr.includes(value));
        for (let i of filtered) {
          filter.push(i);
        }
      }
      // for (let i of filterArr) {
      //   for (let k of filterArrTypes) {
      //     for (let j of results) {
      //       if (j?.created_at?.slice(0, 4) == i && j?.type_of === k) {
      //         filter.push(j);
      //       }
      //     }
      //   }
      // }
    } else if (
      results.length !== 0 &&
      filterArr.length !== 0 &&
      filterArrTypes.length === 0
    ) {
      for (let i of filterArr) {
        for (let j of results) {
          if (j?.created_at?.slice(0, 4) == i) {
            filter.push(j);
          }
        }
      }
    } else if (
      results.length !== 0 &&
      filterArrTypes.length !== 0 &&
      filterArr.length === 0
    ) {
      for (let i of filterArrTypes) {
        for (let j of results) {
          if (j?.type_of === i) {
            filter.push(j);
          }
        }
      }
    }
    console.log(filter);
    setPhotos(filter);
  }
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilterYear(e.currentTarget.value);
  }

  function filterHandler() {
    let arr: any = [];
    let arrTypes: any = [];
    let checkboxArr: any = document.getElementsByName("year");
    let checkboxArrType: any = document.getElementsByName("horns");
    for (let i = 0; i < checkboxArr.length; i++) {
      if (checkboxArr[i].checked) {
        arr.push(checkboxArr[i].value);
      }
    }
    if (filterYear) {
      arr.push(filterYear);
    }
    for (let i = 0; i < checkboxArrType.length; i++) {
      if (checkboxArrType[i].checked) {
        arrTypes.push(checkboxArrType[i].value);
      }
    }

    // console.log(arr);
    getFilter(arr, arrTypes);
  }

  function filter() {
    filterHandler();
  }

  return (
    <Layout className="content mb-16 pb-10 overflow-hidden">
      <div onClick={() => setModal(false)}>
        <h1 className="mb-14 md:text-5xl text-3xl">Project photos</h1>
        <div
          className="photos_filter_block relative"
          onClick={(e) => {
            setModal(!modal);
            getData();
            e.stopPropagation();
          }}>
          <img src="./filterIcon.png" alt="" />
          <p>Filter</p>
          {modal && (
            <div className="photo_filter" onClick={(e) => e.stopPropagation()}>
              <div className="photo_filter_top h-auto">
                <h2>By year</h2>
                <input type="text" value={filterYear} onChange={onChange} />
                <div>
                  <div>
                    <input
                      type="checkbox"
                      id="year"
                      name="year"
                      value={"2019"}
                    />
                    <label htmlFor="year">2019</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="year"
                      name="year"
                      value={"2020"}
                    />
                    <label htmlFor="year">2020</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="year"
                      name="year"
                      value={"2021"}
                    />
                    <label htmlFor="year">2021</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="year"
                      name="year"
                      value={"2022"}
                    />
                    <label htmlFor="year">2022</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="year"
                      name="year"
                      value={"2023"}
                    />
                    <label htmlFor="year">2023</label>
                  </div>
                  <p>more</p>
                </div>
              </div>
              <div className="photo_filter_bottom h-auto">
                <h2>By type</h2>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      id="horns"
                      name="horns"
                      value={"community"}
                    />
                    <label htmlFor="horns">Community</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="horns"
                      name="horns"
                      value={"before-after"}
                    />
                    <label htmlFor="horns">Before-After</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="horns"
                      name="horns"
                      value={"other"}
                    />
                    <label htmlFor="horns">Other</label>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  filter();
                  setModal(false);
                }}>
                Save
              </button>
            </div>
          )}
        </div>
        {photos?.length == 0 && (
          <div className="h-[80vh]">
            <h2 style={{ textAlign: "center", margin: "50px 0px" }}>
              there’s nothing here{" "}
            </h2>
            <h4 onClick={() => getData()}>back</h4>
          </div>
        )}
        <div className="grid lg:grid-cols-3 grid-cols-2  gap-x-4 gap-y-9 mt-5">
          {photos?.map((item) => (
            <img
              key={item.id}
              src={item.photo}
              alt={item.caption}
              className="aspect-video"
              style={{ width: "100%" }}
            />
          ))}
        </div>
        {/* {photos2 && photos2?.count > num && ( */}
        {photos?.length !== 0 && (
          <div className="paggination flex">
            <button
              className={`prev__btn btn ${currentPage <= 0 && "noActive"}`}
              onClick={() =>
                setCurrentPage(currentPage < 0 ? currentPage : currentPage - 1)
              }>
              <svg
                width="12"
                height="24"
                viewBox="0 0 12 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.27513 0.463377L11.1914 10.8452C11.2972 10.9688 11.372 11.1027 11.4157 11.2469C11.4602 11.3911 11.4824 11.5456 11.4824 11.7104C11.4824 11.8752 11.4602 12.0297 11.4157 12.1739C11.372 12.3181 11.2972 12.452 11.1914 12.5756L2.27513 22.9883C2.0282 23.2767 1.71952 23.4209 1.34911 23.4209C0.978705 23.4209 0.661213 23.2664 0.396636 22.9574C0.132059 22.6484 -0.000229836 22.288 -0.000229836 21.876C-0.000229836 21.464 0.132059 21.1035 0.396636 20.7945L8.17521 11.7104L0.396636 2.62626C0.149697 2.33788 0.026228 1.98276 0.026228 1.56089C0.026228 1.1382 0.158516 0.77236 0.423094 0.463377C0.687671 0.154392 0.996345 -9.91821e-05 1.34911 -9.91821e-05C1.70188 -9.91821e-05 2.01056 0.154392 2.27513 0.463377Z"
                  fill="#2A2A2A"
                />
              </svg>
            </button>
            <div className="flex pagg_numbers">
              {getPaggPage(photos2?.count, num).map((item: any) => (
                <p
                  onClick={() => setCurrentPage(item)}
                  key={item}
                  className="pagg__number">
                  {item != ". . ." ? item + 1 : item}
                </p>
              ))}
            </div>
            <button
              className={`next__btn btn ${
                photos2 &&
                currentPage >= Math.ceil(photos2?.count / num) - 1 &&
                "noActive"
              } `}
              onClick={() => {
                setCurrentPage(
                  photos2 && currentPage >= Math.ceil(photos2?.count / num) - 1
                    ? currentPage
                    : currentPage + 1
                );
              }}>
              <svg
                width="12"
                height="24"
                viewBox="0 0 12 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.27513 0.463377L11.1914 10.8452C11.2972 10.9688 11.372 11.1027 11.4157 11.2469C11.4602 11.3911 11.4824 11.5456 11.4824 11.7104C11.4824 11.8752 11.4602 12.0297 11.4157 12.1739C11.372 12.3181 11.2972 12.452 11.1914 12.5756L2.27513 22.9883C2.0282 23.2767 1.71952 23.4209 1.34911 23.4209C0.978705 23.4209 0.661213 23.2664 0.396636 22.9574C0.132059 22.6484 -0.000229836 22.288 -0.000229836 21.876C-0.000229836 21.464 0.132059 21.1035 0.396636 20.7945L8.17521 11.7104L0.396636 2.62626C0.149697 2.33788 0.026228 1.98276 0.026228 1.56089C0.026228 1.1382 0.158516 0.77236 0.423094 0.463377C0.687671 0.154392 0.996345 -9.91821e-05 1.34911 -9.91821e-05C1.70188 -9.91821e-05 2.01056 0.154392 2.27513 0.463377Z"
                  fill="#2A2A2A"
                />
              </svg>
            </button>
          </div>
        )}

        {/* )} */}
      </div>
    </Layout>
  );
}
