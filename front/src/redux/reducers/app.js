import axios from 'axios';
const GET_STATES = 'GET_STATES';
const GET_LOCATIONS = 'GET_LOCATIONS';
const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION';
const GET_SERVICES = 'GET_SERVICES';
const GET_SERVICES_SINGLE = 'GET_SERVICES_SINGLE';
const DOMAIN = 'https://itek-dev.highcat.org/';

const initState = {
    states: [],
    locations: [],
    services: [],
    servicesSingle: {},
    currentLocation: {},
}


export default (state = initState, action) =>{
    switch(action.type){
        case GET_STATES:{
            return {
                ...state,
                states: action.data
            }
        }

        case GET_LOCATIONS:{
            return {
                ...state,
                locations: action.data
            }
        }

        case GET_SERVICES:{
            return {
                ...state,
                services: action.data
            }
        }

        case GET_SERVICES_SINGLE:{
            return {
                ...state,
                servicesSingle: action.data
            }
        }
        case GET_CURRENT_LOCATION:{
            return {
                ...state,
                currentLocation: action.data
            }
        }

    default : return state
    }
}

export const getStates = () =>{
    return (dispatch) =>{
        axios(`/api/states/`)
        .then(({data})=>{
            return dispatch({type: GET_STATES, data})
        })

    }
}

export const getLocations = () =>{
    return (dispatch) =>{
        axios(`/api/locations/`)
        .then(({data})=>{
            return dispatch({type: GET_LOCATIONS, data})
        })
    }
}

export const getServices = () =>{
    return (dispatch) =>{
        axios(`/api/service/`)
        .then(({data})=>{
            return dispatch({type: GET_SERVICES, data: data.filter(item =>{
                return item.main_menu
            })})
        })
    }
}


export const getServicesSingle = (id) =>{
    return (dispatch) =>{
        axios(`/api/service/${id}/`)
        .then(({data})=>{
            return dispatch({type: GET_SERVICES_SINGLE, data})
        })
    }
}
export const getCurrentLocation = () =>{
    return (dispatch) =>{
        axios(`https://ipwho.is/`)
        .then(({data})=>{
            return dispatch({type: GET_CURRENT_LOCATION, data})
        })
    }
}

export  const createNestedList = (arr = [], count = 10) => {
    let i = 0;
    let childList = [];
    return arr.reduce((acc, rec, idx) => {
      if (i === 0) {
        childList = [rec];
        i++;
        return [...acc, childList]
      } else if (i < (count - 1)) {
        childList = [...childList, rec];
        i++;
        if(idx === (arr.length - 1)){
            return [...acc, childList]
        }
        return [...acc]
      } else {
        i = 0;
        childList = [...childList, rec];
        return [...acc, childList];
      }
    }, []);
  };
