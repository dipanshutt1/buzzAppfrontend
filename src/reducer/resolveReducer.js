const InitialState={
    Complaint:[]
};

const resolveReducer =( state= InitialState,action) =>{
    switch(action.type){
        case 'SHOW_COMPLAINT':{
            return {
                ...state,
                Complaint: action.data
            };
        }
        case 'RESOLVE_COMMIT':{
            const myComplaint = state.Complaint.map((item) => {
                if(item.issue_id === action.data.issue_id){
                    return {...item, status:action.data.updatedStatus}
                } else {
                    return {
                        ...item
                    }
                }
            })
            return { ...state, Complaint : myComplaint}
        }

        default:{
            return state;
        }
    }
};

export default resolveReducer;