import { 
    CHOOSE_ADDRESS,
    CLICK_BACK_BTN,
    CLICK_NEXT_BTN,
    AREA_NAME_CHANGE,
    AREA_TYPE_CHOOSE,
    AREA_SPORT_TYPES_CHOOSE,
    AREA_CONTACTS_CHANGE,
    AREA_DESC_CHANGE,
    AREA_PRICE_CHANGE,
    AREA_WORKTIME_CHANGE,    
 } from '../reducers/areaReducer'

export const chooseAddress = (location) =>{
    return (dispatch) => {
        dispatch({type: CHOOSE_ADDRESS, payload: location});
    }
}

export const chooseAreaType = (id) =>{
    return (dispatch) =>{
        dispatch({type: AREA_TYPE_CHOOSE, payload: id});
    }
}

export const chooseAreaSportTypes = (sportTypes) => {
    return (dispatch) =>{
        dispatch({type: AREA_SPORT_TYPES_CHOOSE, payload: sportTypes});
    }
}

export const clickNextBtn = () =>{
    console.log('next');
    return (dispatch, getState) =>{
        dispatch({type: CLICK_NEXT_BTN});
    }
}

export const clickBackBtn = () =>{
    console.log('back')
    return (dispatch, getState) =>{
        dispatch({type: CLICK_BACK_BTN});
    }
}

export const areaNameChange = (areaName) =>{
    console.log('areaNameChg -->', areaName);
    return (dispatch) => {
        dispatch({type: AREA_NAME_CHANGE, payload: areaName});
    }
}

export const areaDescChange = (areaDesc) => {
    return (dispatch) =>{
        dispatch({type:AREA_DESC_CHANGE, payload: areaDesc});
    }
}

export const areaPriceChange = (areaPrice) => {
    return (dispatch) =>{
        dispatch({type:AREA_PRICE_CHANGE, payload: areaPrice});
    }
}

export const areaWorktimeChange = (areaWorktime) => {
    return (dispatch) =>{
        dispatch({type:AREA_WORKTIME_CHANGE, payload: areaWorktime});
    }
}

export const areaContactsChange = (areaContacts) => {
    return (dispatch) =>{
        dispatch({type:AREA_CONTACTS_CHANGE, payload: areaContacts});
    }
}