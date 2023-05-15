import React, { useEffect, useState } from "react";
import "./ServBlock2.css";
import i1 from "../../../../images/i1.png";
import i2 from "../../../../images/i2.png";
import i3 from "../../../../images/i3.png";
import { useDispatch, useSelector } from "react-redux";
import { createNestedList, getServicesSingle } from "../../../../redux/reducers/app";
import { useParams } from "react-router-dom";
import ServBlock2Card from "./ServBlock2Card";
import { useNavigate } from "react-router-dom";

const ServBlock2 = () => {
    const navigate = useNavigate();
    const servicesSingle = useSelector(s => s.app.servicesSingle);
    const currentLocation = useSelector(s => s.app.currentLocation);
    const dispatch = useDispatch()
    const params = useParams();
    const [childListWithPhoto, setChildListWithPhoto] = useState([]);
    const [childListWithoutPhoto, setChildListWithoutPhoto] = useState([]);

    const setOfferList = () =>{
        switch(true){
            case servicesSingle.children.length < 3:{
                setChildListWithPhoto(servicesSingle.children.map(item=>{
                    return item
                }))
            }
            default:{
                setChildListWithPhoto(servicesSingle.children.reduce((acc, rec,idx)=>{
                    if(idx < 3){
                        return [...acc, rec]
                    } else{
                        return acc
                    }
                },[]))
            }
        }
    }

    useEffect(()=>{
       dispatch(getServicesSingle(params.slug, currentLocation.id));
    }, [params, currentLocation]);
    useEffect(()=>{
        if(JSON.stringify(servicesSingle) !== '{}'){
           setOfferList()
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
                    setChildListWithPhoto.length === 0
                    ? ''
                    :childListWithPhoto.map(item =>{
                        return <ServBlock2Card key={item.id} item={item}/>
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
                                            return <li onClick={()=>{
                                                navigate(`/services/${item.slug}`)
                                              }}  key={element.id}>{element.name}</li>
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
