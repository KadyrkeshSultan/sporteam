export const initialState = {
    user: {
        name : "Sultan",
        surname: "React",
        age : 21
    }
}

export function rootReducer(state = initialState){
    return state;
}