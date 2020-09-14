const initialState = {
    counter: 0,
    result: []
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case("INCREMENT_EVENT"):
            return{
                ...state,
                counter: state.counter+1
            }
        case ("DECREMENT_EVENT"):
            return{
                ...state,
                counter: state.counter-1
            }
        case ("ADDITION_EVENT"):
            return{
                ...state,
                counter: state.counter+action.payload.value
            }
        case ("SUBTRACTION_EVENT"):
            return{
                ...state,
                counter: state.counter-action.payload.value
            }
        case ("ADDRESULT_EVENT"):
            const num = state.counter;
            const updatedResult = [...state.result];
            updatedResult.push(num);
            return{
                ...state,
                result: updatedResult
            }   
        case ("DELETERESULT_EVENT"):
            const nums = [...state.result];
            nums.splice(action.payload.id,1);
            return{
                ...state,
                result: nums
            }
        default:
            return{
                ...state
            }
    }
    return state;
};

export default reducer;