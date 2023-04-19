import React from "react";
import "./PhotoFilter.scss";
const PhotoFilter = () => {
    return (
        <div className="photo_filter" onClick={(e) => e.stopPropagation()}>
            <div className="photo_filter_top">
                <h2>By year</h2>
                <input type="text" value={"2010"} />
                <div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">2018</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">2019</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">2020</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">2021</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">2022</label>
                    </div>
                    <p>more</p>
                </div>
            </div>
            <div className="photo_filter_bottom">
                <h2>By services</h2>
                <div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">Repairing</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">Cooling</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">Mini split</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">Heating</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">Commercial</label>
                    </div>
                </div>
            </div>
            <button>Save</button>
        </div>
    );
};

export default PhotoFilter;
