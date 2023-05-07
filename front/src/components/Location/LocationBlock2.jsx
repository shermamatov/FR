import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getLocations, createNestedList } from "../../redux/reducers/app";

const LocationBlock2 = () => {
  const dispatch = useDispatch();
 const locations = useSelector(s => s.app.locations);
 const [nestedList, setNestedList] = useState([]);
  useEffect(() => {
    dispatch(getLocations());
  }, []);
  useEffect(()=>{
    setNestedList(createNestedList(locations, 20));
  }, [locations])
  return (
    <section className="location_block2">
      <div className="container">
        <h1 className="location_block2_title">
          Select from the list your city
        </h1>
        <div className="row">
            {
                nestedList.map(item =>{
                    return <div className="col" key={item[0].id}>
                        {item.map(elem =>{
                           return <p className="location_block2_item" key={elem.id}>{elem.location_name}</p>
                        })}
                    </div>
                })
            }

        </div>
        <div className="location_block2_bottomLine"></div>
      </div>
    </section>
  );
};

export default LocationBlock2;
