import "./block4.css";
import clsx from "clsx";
import grid_img from "../../../../images/grid_img.png";
import { useResize } from "../../../../hooks/useResize"
import { useChel } from "../../../../Contexts/ChelContext";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import { json } from "react-router-dom";
import { createNestedList } from "../../../../redux/reducers/app";

const FrServer = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const servicesSingle = useSelector(s => s.app.servicesSingle);
    const [photosList, setPhotosList] = useState([]);
    const { checked3 } = useChel();

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    function addBordClass() {
        const grid__desc = document.querySelectorAll(".grid__desc");
        for (let i of grid__desc) {
            i.classList.add("bord");
        }
    }
    useEffect(() => {
        addBordClass();
    }, []);
=======
import { useQuery } from "@tanstack/react-query";
import { fetchPhotos } from "../../../../api";


const FrServer = () => {
    const width = useResize();
    const { checked3 } = useChel();
    const { data } = useQuery(['photos'], fetchPhotos)
>>>>>>> 6a097312f0b51888754c86271aeb9eaf69b8e63c

    useEffect(()=>{
        if(JSON.stringify(servicesSingle) !== '{}'){
            setPhotosList(createNestedList(servicesSingle.media, 9))
        }
    }, [servicesSingle])
    return (
        <div className="fr_server">
            <h2 className="transparent_text">at manufacturing plants</h2>
            <div className="container">
<<<<<<< HEAD
                <h2 className={`fr__title bord ${checked3 && "big_fz_h2"}`}>
                    OUR photos
                </h2>
                {
                    photosList.map(element =>{
                        return <div key={element[0].id} className="grid_block grid_block--none">
                        {
                            element.map(item =>{
                                return  <div key={item.id} className="grid__item">
                                <img src={item.photo} alt="" className="grid__img" />
                                <p className="grid__desc">
                                    The unseen of spending three years at Pixelgrade,
                                    spending three years at
                                </p>
                            </div>
                            })
                        }

=======
                <h2 className={clsx(`fr__title bord`, checked3 && "big_fz_h2")}>our photos</h2>
                <div className="grid_block grid_block--none">
                    {data?.map((item) => (
                        <div key={item.id} className="grid__item">
                            <img src={item.photo} alt="" className="grid__img" />
                            <p className="grid__desc bord">{item.caption}</p>
                        </div>
                    ))}
                </div>
                <div
                    className={width < 850 ? "grid_block" : "grid_block d-none"}
                >
                    <div className="grid__item">
                        <img src={grid_img} alt="" className="grid__img" />
                        <p className="grid__desc">
                            The unseen of spending three years at Pixelgrade
                        </p>
                    </div>
                    <div className="grid__item">
                        <img src={grid_img} alt="" className="grid__img" />
                        <p className="grid__desc">
                            The unseen of spending three years at Pixelgrade
                        </p>
                    </div>
                    <div className="grid__item">
                        <img src={grid_img} alt="" className="grid__img" />
                        <p className="grid__desc">
                            The unseen of spending three years at Pixelgrade
                        </p>
                    </div>
                    <div className="grid__item">
                        <img src={grid_img} alt="" className="grid__img" />
                        <p className="grid__desc">
                            The unseen of spending three years at Pixelgrade
                        </p>
>>>>>>> 6a097312f0b51888754c86271aeb9eaf69b8e63c
                    </div>
                    })
                }


{
                    photosList.map(element =>{
                        return <div key={element[0].id}  className={width < 850 ? "grid_block" : "grid_block d-none"}>
                        {
                            element.map(item =>{
                                return  <div key={item.id} className="grid__item">
                                <img src={item.photo} alt="" className="grid__img" />
                                <p className="grid__desc">
                                    The unseen of spending three years at Pixelgrade,
                                    spending three years at
                                </p>
                            </div>
                            })
                        }

                    </div>
<<<<<<< HEAD
                    })
                }
                
                {
                    JSON.stringify(servicesSingle) !== '{}' && servicesSingle.media.length > 9
                    ?<div className="paggination d-flex">
=======
                </div>
                <div className="paggination d-flex">
>>>>>>> 6a097312f0b51888754c86271aeb9eaf69b8e63c
                    <button className="prev__btn btn">
                        <svg
                            width="12"
                            height="24"
                            viewBox="0 0 12 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.27513 0.463377L11.1914 10.8452C11.2972 10.9688 11.372 11.1027 11.4157 11.2469C11.4602 11.3911 11.4824 11.5456 11.4824 11.7104C11.4824 11.8752 11.4602 12.0297 11.4157 12.1739C11.372 12.3181 11.2972 12.452 11.1914 12.5756L2.27513 22.9883C2.0282 23.2767 1.71952 23.4209 1.34911 23.4209C0.978705 23.4209 0.661213 23.2664 0.396636 22.9574C0.132059 22.6484 -0.000229836 22.288 -0.000229836 21.876C-0.000229836 21.464 0.132059 21.1035 0.396636 20.7945L8.17521 11.7104L0.396636 2.62626C0.149697 2.33788 0.026228 1.98276 0.026228 1.56089C0.026228 1.1382 0.158516 0.77236 0.423094 0.463377C0.687671 0.154392 0.996345 -9.91821e-05 1.34911 -9.91821e-05C1.70188 -9.91821e-05 2.01056 0.154392 2.27513 0.463377Z"
                                fill="#2A2A2A"
                            />
                        </svg>
                    </button>
                    <div className="d-flex pagg_numbers">
                        <p className="pagg__number">1</p>
                        <p className="pagg__number">2</p>
                        <p className="pagg__number">3</p>
                        <p className="pagg__number">.</p>
                        <p className="pagg__number">.</p>
                        <p className="pagg__number">.</p>
                        <p className="pagg__number">.</p>
                        <p className="pagg__number">.</p>
                        <p className="pagg__number">16</p>
                    </div>
                    <button className="next__btn btn">
                        <svg
                            width="12"
                            height="24"
                            viewBox="0 0 12 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.27513 0.463377L11.1914 10.8452C11.2972 10.9688 11.372 11.1027 11.4157 11.2469C11.4602 11.3911 11.4824 11.5456 11.4824 11.7104C11.4824 11.8752 11.4602 12.0297 11.4157 12.1739C11.372 12.3181 11.2972 12.452 11.1914 12.5756L2.27513 22.9883C2.0282 23.2767 1.71952 23.4209 1.34911 23.4209C0.978705 23.4209 0.661213 23.2664 0.396636 22.9574C0.132059 22.6484 -0.000229836 22.288 -0.000229836 21.876C-0.000229836 21.464 0.132059 21.1035 0.396636 20.7945L8.17521 11.7104L0.396636 2.62626C0.149697 2.33788 0.026228 1.98276 0.026228 1.56089C0.026228 1.1382 0.158516 0.77236 0.423094 0.463377C0.687671 0.154392 0.996345 -9.91821e-05 1.34911 -9.91821e-05C1.70188 -9.91821e-05 2.01056 0.154392 2.27513 0.463377Z"
                                fill="#2A2A2A"
                            />
                        </svg>
                    </button>
                </div>
                : ''
                }

            </div>
        </div>
    );
};

export default FrServer;
