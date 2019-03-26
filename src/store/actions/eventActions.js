import { CHOOSE_SPORT, 
    CLICK_NEXT_BTN, 
    CLICK_BACK_BTN, 
    EVENT_NAME_CHANGE,
    CHOOSE_DATE,
    CHOOSE_ADDRESS,
    EVENT_DESC_CHANGE,
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT_ERROR,
    SELECT_EVENT
 } from '../reducers/eventReducer'

export const chooseSport = (categorySportId) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        dispatch({type: CHOOSE_SPORT, payload: categorySportId});
    }
}

export const selectEvent = (id) =>{
    return (dispatch, getState, {getFirestore}) =>{
        const firestore = getFirestore();
        var docRef = firestore.collection('events').doc(id);
        docRef.get().then(function(doc){
            if(doc.exists){
                dispatch({type: SELECT_EVENT, payload: {...doc.data(), id: id}});
            }else{
                dispatch({type: SELECT_EVENT, payload: {id: null}});
            }
        }).catch(function(error){
            dispatch({type: SELECT_EVENT, payload: {id: null}});
        })
    }
}

export const createEvent = (event) =>{
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        firestore.collection('events').add({
            name: event.name,
            date: event.datetime,
            description: event.desc,
            location: event.location,
            createdAt: new Date(),
            user: {
                id:userId,
                firstName: profile.firstName,
                lastName: profile.lastName,
            },
            categorySport: firestore.doc(`/categorySports/${event.categorySportId}`)
        }).then(() =>{
            dispatch({type: CREATE_EVENT_SUCCESS, payload: true});
        }).catch(() => {
            dispatch({type: CREATE_EVENT_ERROR, payload: false})
        });
    }
}

export const chooseDate = (datetime) =>{
    return (dispatch) => {
        dispatch({type: CHOOSE_DATE, payload: datetime});
    }
}

export const chooseAddress = (location) =>{
    return (dispatch) => {
        dispatch({type: CHOOSE_ADDRESS, payload: location});
    }
}

export const eventNameChange = (eventName) =>{
    console.log('eventNameChg -->', eventName);
    return (dispatch) => {
        dispatch({type: EVENT_NAME_CHANGE, payload: eventName});
    }
}

export const eventDescChange = (eventDesc) =>{
    return (dispatch) => {
        dispatch({type: EVENT_DESC_CHANGE, payload: eventDesc});
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