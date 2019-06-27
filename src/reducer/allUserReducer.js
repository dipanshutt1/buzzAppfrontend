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
        case 'USER_ACTION_COMMIT':{
            const resolveUser=state.allUser.map((item)=>{
                if(item.googleId===action.data.googleId){
                    return{
                        ...item,status:action.data.updatedStatus}
                } else{
                    return {
                        ...item
                    }
                }
            })
            return {
                ...state,allUser:resolveUser
            }
        }
        default:{
            return state;
        }
    }
}


export default allUserReducer;