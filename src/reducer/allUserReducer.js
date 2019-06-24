const InitialState={
    allUser:[]
}

const allUserReducer=(state=InitialState,action)=>{
    switch(action.type){

        case 'ALL_USER':{
            return {
                ...state,
                allUser: action.data
            };
        }
        default:{
            return state;
        }
    }
}

export default allUserReducer;