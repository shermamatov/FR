import axios from "axios";
const GET_STATES = "GET_STATES";
const GET_LOCATIONS = "GET_LOCATIONS";
const GET_CURRENT_LOCATION = "GET_CURRENT_LOCATION";
const GET_SERVICES = "GET_SERVICES";
const GET_SERVICES_SINGLE = "GET_SERVICES_SINGLE";
const GET_BLOGS = "GET_BLOGS";
const GET_REVIEWS = "GET_REVIEWS";

const DOMAIN = "https://itek-dev.highcat.org/";
const currentLocationFindApi =
    "https://itek-dev.highcat.org/api/location/find/";
const activeLoctionsAPi =
    "https://itek-dev.highcat.org/api/locations/?is_active=1";
const servicesForLocationApi = `https://itek-dev.highcat.org/api/service/1/?for_location=`;
const servicesAPI = "https://itek-dev.highcat.org/api/service/";
const blogsAPI = "https://itek-dev.highcat.org/api/blogs/";
const reviewsAPI = "https://itek-dev.highcat.org/api/review/";

const initState = {
    states: [],
    locations: [],
    services: [],
    servicesSingle: {},
    currentLocation: localStorage.getItem("currentLocation")
        ? JSON.parse(localStorage.getItem("currentLocation"))
        : {},
    blogs: [],
    reviews: [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_STATES: {
            return {
                ...state,
                states: action.data,
            };
        }

        case GET_LOCATIONS: {
            return {
                ...state,
                locations: action.data,
            };
        }

        case GET_SERVICES: {
            return {
                ...state,
                services: action.data,
            };
        }

        case GET_SERVICES_SINGLE: {
            return {
                ...state,
                servicesSingle: action.data,
            };
        }
        case GET_CURRENT_LOCATION: {
            localStorage.setItem(
                "currentLocation",
                JSON.stringify(action.data)
            );
            return {
                ...state,
                currentLocation: action.data,
            };
        }

        case GET_BLOGS: {
            return {
                ...state,
                blogs: action.data,
            };
        }

        case GET_REVIEWS: {
            return {
                ...state,
                reviews: action.data,
            };
        }

        default:
            return state;
    }
};

export const getStates = () => {
    return (dispatch) => {
        axios(`https://itek-dev.highcat.org/api/states/`).then(({ data }) => {
            return dispatch({ type: GET_STATES, data });
        });
    };
};

export const getLocations = () => {
    return (dispatch) => {
        axios(activeLoctionsAPi).then(({ data }) => {
            return dispatch({ type: GET_LOCATIONS, data });
        });
    };
};

export const getServices = (locationId) => {
    return (dispatch) => {
        axios(servicesAPI).then(({ data }) => {
            return dispatch({
                type: GET_SERVICES,
                data: data.filter((item) => {
                    return item.main_menu;
                }),
            });
        });
    };
};

export const getServicesSingle = (id, locationId) => {
    return (dispatch) => {
        dispatch({ type: GET_SERVICES_SINGLE, data: {} });
        axios(
            `https://itek-dev.highcat.org/api/service/${id}/?for_location=${locationId}`
        ).then(({ data }) => {
            return dispatch({ type: GET_SERVICES_SINGLE, data });
        });
    };
};

export const getCurrentLocation = (location = {}) => {
    return (dispatch) => {
        if (JSON.stringify(location) === "{}") {
            axios(currentLocationFindApi).then(({ data }) => {
                return dispatch({ type: GET_CURRENT_LOCATION, data });
            });
        }
        return dispatch({ type: GET_CURRENT_LOCATION, data: location });
    };
};

export const getBlogs = () => {
    return (dispatch) => {
        axios(blogsAPI).then(({ data }) => {
            return dispatch({ type: GET_BLOGS, data });
        });
    };
};

export const getReviews = () => {
    return (dispatch) => {
        axios(reviewsAPI).then(({ data }) => {
            return dispatch({ type: GET_REVIEWS, data });
        });
    };
};

export const createNestedList = (arr = [], count = 10) => {
    let i = 1;
    let childList = [];
    return arr.reduce((acc, rec, idx) => {
        switch (true) {
            case i === 1: {
                childList = [rec];
                i++;
                if (idx === arr.length - 1) {
                    return [...acc, childList];
                }
                return [...acc];
            }
            case i === count: {
                i = 1;
                childList = [...childList, rec];
                return [...acc, childList];
            }
            default: {
                childList = [...childList, rec];
                i++;
                if (idx === arr.length - 1) {
                    return [...acc, childList];
                }
                return [...acc];
            }
        }
    }, []);
};
