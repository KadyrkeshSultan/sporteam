import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS} from '../actions/PageActions'

const initialState = {
    year: 2019,
    photos: [],
    isFetching: false,
    isDisableBtn: false
}

export function pageReducer(state = initialState, action){
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return {...state, year: action.payload, isFetching: true, isDisableBtn: true}
        case GET_PHOTOS_SUCCESS:
            return {...state, year: action.payload, isFetching: false, isDisableBtn: false}

        default:
            return state;
    }
}