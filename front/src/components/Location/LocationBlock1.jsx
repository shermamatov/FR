import circleImg from './img/circle-img.png';

const LocationBlock1 = () => {
    return (
        <section>
            <div className="container">
                <div className="location_row">
                    <div className="location_row_left">
                        <p className="location_subtitle">Locations</p>
                        <h1 className="location_title">Your city is  Glendale</h1>
                    </div>
                    <input type="text" placeholder="insert your city or zip coude" className="location_input" />
                    <img src={circleImg} alt="" className="location_row_img" />
                </div>
            </div>
        </section>
    );
}

export default LocationBlock1;
