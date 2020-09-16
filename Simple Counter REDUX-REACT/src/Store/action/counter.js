import * as actionTpyes from './actionTypes';

export const INCREMENT = ()=>{
    return {
        type: actionTpyes.INCREMENT_EVENT
    }
}

export const DECREMENT = ()=>{
    return {
        type: actionTpyes.DECREMENT_EVENT
    }
}
export const ADDITION = (val)=>{
    return {
        type: actionTpyes.ADDITION_EVENT,
        payload:{
            value: val
        }
    }
}
export const SUBTRACTION = (val)=>{
    return {
        type: actionTpyes.SUBTRACTION_EVENT,
        payload:{
            value: val
        }
    }
}