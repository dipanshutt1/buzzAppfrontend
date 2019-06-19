
const InitialState={
    complaint:[]
}

const complaintReducer=(state = InitialState,action)=>{
    switch(action.type){

        case 'COMPLAINT_POST':{
            console.log(action.data);
            return {
                ...state,
                complaint:[action.data,...state.complaint]
            }
    }
        case 'COMPLAINT_SHOW':  {
            return {
                ...state,
                complaint:action.data
            };
        }
    default:{
        return state;
    }
}
}
export default complaintReducer;