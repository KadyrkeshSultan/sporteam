export const CREATE_EVENT = 'CREATE_EVENT';
export const CREATE_EVENT_ERROR = 'CREATE_EVENT_ERROR';
export const CHOOSE_SPORT = 'CHOOSE_SPORT';
export const CLICK_NEXT_BTN = 'CLICK_NEXT_BTN';
export const CLICK_BACK_BTN = 'CLICK_BACK_BTN';
export const EVENT_NAME_CHANGE = 'EVENT_NAME_CHANGE';
export const CHOOSE_DATE = 'CHOOSE_DATE';
export const CHOOSE_ADDRESS = 'CHOOSE_ADDRESS';
export const EVENT_DESC_CHANGE = 'EVENT_DESC_CHANGE';

const initState = {
    events : [],
    categorySportId: '1',
    activeStep: 0,
    eventName: '',
    datetime: new Date(),
    eventDesc: '',
    location: {
        name: '',
        address: '',
        latitude: 0,
        longitude: 0
    }
}

const eventReducer = (state = initState, action) => {
    switch(action.type){
        case CHOOSE_SPORT:
            return {
                ...state,
                categorySportId: action.payload,
                activeStep: state.activeStep + 1
            };
        case CHOOSE_ADDRESS:
            return{
                ...state,
                location: action.payload
            };
        case EVENT_NAME_CHANGE:
            return{
                ...state,
                eventName: action.payload
            }
        case EVENT_DESC_CHANGE:
            return{
                ...state,
                eventDesc: action.payload
            };
        case CLICK_NEXT_BTN:
            return{
                ...state,
                activeStep: state.activeStep + 1
            };
        case CLICK_BACK_BTN:
            return{
                ...state,
                activeStep: state.activeStep - 1
            };
        case CHOOSE_DATE:
            return{
                ...state,
                datetime: action.payload
            }
        case CREATE_EVENT:
            console.log(CREATE_EVENT, action.event);
            return state;
        case CREATE_EVENT_ERROR:
            console.log(CREATE_EVENT_ERROR, action.error);
            return state;
        default:
            return state;
    }
}

export default eventReducer;