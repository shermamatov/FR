import React, { useEffect, useState } from "react";
import "./ServBlock2.css";
import i1 from "../../../../images/i1.png";
import i2 from "../../../../images/i2.png";
import i3 from "../../../../images/i3.png";
import { useDispatch, useSelector } from "react-redux";
import { createNestedList, getServicesSingle } from "../../../../redux/reducers/app";
import { useParams } from "react-router-dom";

const ServBlock2 = () => {
    const servicesSingle = useSelector(s => s.app.servicesSingle);
    const dispatch = useDispatch()
    const params = useParams();
    const [childListWithPhoto, setChildListWithPhoto] = useState([]);
    const [childListWithoutPhoto, setChildListWithoutPhoto] = useState([]);

    useEffect(()=>{
       dispatch(getServicesSingle(params.serviceId));
    }, [params]);
    useEffect(()=>{
        if(JSON.stringify(servicesSingle) !== '{}'){
            setChildListWithPhoto([servicesSingle.children[0], servicesSingle.children[1], servicesSingle.children[2]])
            const bigList = servicesSingle.children.filter((item, idx) =>{
                return idx > 2
            })
            setChildListWithoutPhoto(createNestedList(bigList))
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
                    {
                        childListWithoutPhoto.map((item, idx) =>{
                            return <ul key={idx}>
                                    {
                                        item.map(element =>{
                                            return <li key={element.id}>{element.name}</li>
                                        })
                                    }
                            </ul>
                        })
                    }
            
                </div>
            </div>
        </div>
    );
};

export default ServBlock2;
