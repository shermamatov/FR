import LocationBlock1 from "./LocationBlock1";
import LocationMap from "./LocationMap";
import LocationBlock2 from "./LocationBlock2";
import './location.scss';

const Location = () => {
    return (
        <div className="location">
            <LocationBlock1 />
            <LocationMap />
            <LocationBlock2 />
        </div>
    );
}

export default Location;
