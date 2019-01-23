export const CREATE_EVENT = 'CREATE_EVENT';
export const CREATE_EVENT_ERROR = 'CREATE_EVENT_ERROR';

const initState = {
    events : []
}

const eventReducer = (state = initState, action) => {
    switch(action.type){
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