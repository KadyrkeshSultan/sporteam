export const CHOOSE_ADDRESS = 'CHOOSE_ADDRESS';
export const CLICK_NEXT_BTN = 'CLICK_NEXT_BTN';
export const CLICK_BACK_BTN = 'CLICK_BACK_BTN';
export const AREA_NAME_CHANGE = 'AREA_NAME_CHANGE';
export const AREA_TYPE_CHOOSE = 'AREA_TYPE_CHOOSE';
export const AREA_SPORT_TYPES_CHOOSE = 'AREA_SPORT_TYPES_CHOOSE';
export const AREA_DESC_CHANGE = 'AREA_DESC_CHANGE';
export const AREA_CONTACTS_CHANGE = 'AREA_CONTACTS_CHANGE';
export const AREA_WORKTIME_CHANGE = 'AREA_WORKTIME_CHANGE';
export const AREA_PRICE_CHANGE = 'AREA_PRICE_CHANGE';
export const CREATE_AREA_SUCCESS = 'CREATE_EVENT_SUCCESS';
export const CREATE_AREA_ERROR = 'CREATE_EVENT_ERROR';

const initState = {
    selectArea: {
        id: null
    },
    areaName: '',
    areaTypeId: null,
    areaPrice: '',
    areaDescription: '',
    areaContacts: '',
    areaWorktime: '',
    areaSportTypes: [],
    activeStep: 0,
    createAreaIsSuccess: false,
    location:{
        name: '',
        address: '',
        city: '',
        latitude: 0,
        longitude: 0
    }
}

const areaReducer = (state = initState, action) => {
    switch(action.type){
        case CLICK_NEXT_BTN:
            return{
                ...state,
                activeStep: state.activeStep + 1,
            };
        case CLICK_BACK_BTN:
            return{
                ...state,
                activeStep: state.activeStep - 1,
            }
        case AREA_NAME_CHANGE:
            return{
                ...state,
                areaName: action.payload
            }
        case AREA_TYPE_CHOOSE:
            return{
                ...state,
                areaTypeId: action.payload
            };
        case AREA_SPORT_TYPES_CHOOSE:
            return{
                ...state,
                areaSportTypes: action.payload
            }
        case CHOOSE_ADDRESS:
            return{
                ...state,
                location: action.payload
            }
        case AREA_CONTACTS_CHANGE:
            return{
                ...state,
                areaContacts: action.payload
            }
        case AREA_DESC_CHANGE:
            return{
                ...state,
                areaDescription: action.payload
            }
        case AREA_PRICE_CHANGE:
            return{
                ...state,
                areaPrice: action.payload
            }
        case AREA_WORKTIME_CHANGE:
            return{
                ...state,
                areaWorktime: action.payload
            }
        case CREATE_AREA_SUCCESS:
            console.log(CREATE_AREA_SUCCESS, action.payload);
            return {
                ...state,
                activeStep: state.activeStep + 1,
                createAreaIsSuccess: true
            };
        case CREATE_AREA_ERROR:
            console.log(CREATE_AREA_ERROR, action.error);
            return {
                ...state,
                activeStep: state.activeStep + 1,
                createAreaIsSuccess: false
            };
        default:
            return state;
    }
}

export default areaReducer;