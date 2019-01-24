export const CREATE_EVENT = 'CREATE_EVENT';
export const CREATE_EVENT_ERROR = 'CREATE_EVENT_ERROR';
export const CHOOSE_SPORT = 'CHOOSE_SPORT';
export const CLICK_NEXT_BTN = 'CLICK_NEXT_BTN';
export const CLICK_BACK_BTN = 'CLICK_BACK_BTN';
export const EVENT_NAME_CHANGE = 'EVENT_NAME_CHANGE';

const initState = {
    events : [],
    categorySportId: '1',
    activeStep: 0,
    eventName: ''
}

const eventReducer = (state = initState, action) => {
    switch(action.type){
        case CHOOSE_SPORT:
            return {
                ...state,
                categorySportId: action.payload,
                activeStep: state.activeStep + 1
            };
        case EVENT_NAME_CHANGE:
            return{
                ...state,
                eventName: action.payload
            }
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