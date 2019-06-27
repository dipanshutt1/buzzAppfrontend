const InitialState={
    userProfile:[]
}

const userProfileReducer=(state=InitialState,action)=>{
    switch(action.type){

        case 'USER_PROFILE':{
            return {
                ...state,
                userProfile: action.data
            };
        }
        default:{
            return state;
        }
    }
}

export default userProfileReducer;