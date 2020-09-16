import * as actionTpyes from './actionTypes';

export const ADDRESULT = ()=>{
    return {
        type: actionTpyes.ADDRESULT_EVENT
    }
}

export const REMOVERESULT = (id)=>{
    return {
        type: actionTpyes.DELETERESULT_EVENT,
        payload:{
            id: id
        }
    }
}

export const DELETERESULT = (id)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(REMOVERESULT(id));
        },2000)
    }
}