import React, { useEffect, useState } from "react";
import "./ServBlock2.css";
import i1 from "../../../../images/i1.png";
import i2 from "../../../../images/i2.png";
import i3 from "../../../../images/i3.png";
import { useDispatch, useSelector } from "react-redux";
import { getServicesSingle } from "../../../../redux/reducers/app";
import { useParams } from "react-router-dom";

const ServBlock2 = () => {
    const servicesSingle = useSelector(s => s.app.servicesSingle);
    const dispatch = useDispatch()
    const params = useParams();
    const [childListWithPhoto, setChildListWithPhoto] = useState([]);

    useEffect(()=>{
       dispatch(getServicesSingle(params.serviceId));
    }, [params]);
    useEffect(()=>{
        console.log(servicesSingle);
        if(JSON.stringify(servicesSingle) !== '{}'){
            setChildListWithPhoto([servicesSingle.children[0], servicesSingle.children[1], servicesSingle.children[2]])
        }
    }, [servicesSingle])
    return (
        <div className="servBlock2 container">
            <div className="servBlock2-box">
                <div className="for-image-block">
                {
                    childListWithPhoto.map(item =>{
                        return <div key={item.id} className="image-box-2">
                        <img src={item.offer_image} alt="" />
                        <div className="asd">
                            <p>
                                {item.name}
                            </p>
                        </div>
                    </div>
                    })
                }
                   
                </div>
                {/* //////////////////////// */}
                <div className="textaboveserv">
                    <ul>
                        <li>How often should the system be cleaned and why?</li>
                        <li>Can I clean the air conditioner myself?</li>
                        <li>How often should the system be cleaned and why?</li>
                        <li>How often should the system be cleaned and why?</li>
                        <li>Can I clean the air conditioner myself?</li>
                        <li>Can I clean the air conditioner myself?</li>
                    </ul>
                    <ul>
                        <li>How often should the system be cleaned and why?</li>
                        <li>Can I clean the air conditioner myself?</li>
                        <li>How often should the system be cleaned and why?</li>
                        <li>How often should the system be cleaned and why?</li>
                        <li>Can I clean the air conditioner myself?</li>
                        <li>Can I clean the air conditioner myself?</li>
                    </ul>
                    <ul>
                        <li>How often should the system be cleaned and why?</li>
                        <li>Can I clean the air conditioner myself?</li>
                        <li>How often should the system be cleaned and why?</li>
                        <li>How often should the system be cleaned and why?</li>
                        <li>Can I clean the air conditioner myself?</li>
                        <li>Can I clean the air conditioner myself?</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServBlock2;
