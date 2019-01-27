import { CHOOSE_SPORT, 
    CLICK_NEXT_BTN, 
    CLICK_BACK_BTN, 
    EVENT_NAME_CHANGE,
    CHOOSE_DATE
 } from '../reducers/eventReducer'

export const chooseSport = (categorySportId) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        // const firestore = getFirestore();
        // var categorySportRef = firestore.collection('categorySports').doc(categorySportId);
        // var categorySport = {};
        // categorySportRef.get()
        //     .then(doc => {
        //         if(!doc.exists){
        //             console.log('--> eventAction');
        //         }else{
        //             categorySport = {...doc.data(), id: categorySportId};
        //             console.log(categorySport);
        //         }
        //     })
        //     .catch(err => {
        //         console.log('--> eventAction', err);
        //     })
        // dispatch({type: CHOOSE_SPORT, categorySport});
        dispatch({type: CHOOSE_SPORT, payload: categorySportId});
    }
}

export const chooseDate = (datetime) =>{
    return (dispatch) => {
        dispatch({type: CHOOSE_DATE, payload: datetime});
    }
}

export const eventNameChange = (eventName) =>{
    console.log('eventNameChg -->', eventName);
    return (dispatch) => {
        dispatch({type: EVENT_NAME_CHANGE, payload: eventName});
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