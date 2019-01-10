export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'

export function getPhotos(year){
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year
        })

        setTimeout(() => {
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: year
            })
        }, 2000);
    }
}