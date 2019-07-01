const InitialState={
    buzzPost:[]
}

const
    buzzReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "BUZZ_POST": {
            const newBuzz = [...state.buzzPost];
            newBuzz.unshift(action.data);
            return { ...state, buzzPost : newBuzz}

            // return { ...state,
            //     buzzPost:[...state.buzzPost, action.data]};
        }
        case "SHOW_POST":{
            const morePost = state.buzzPost.concat(...action.data);
            return {
                ...state,
                buzzPost:morePost
            };
        }
        case "PUT_LIKE": {
            const buzzLike = state.buzzPost.map((item) => action.data._id === item._id ? action.data : item);
            return {
                ...state,
                buzzPost: buzzLike
            }
        }
        case "PUT_DISLIKE": {
            const buzzDisLike = state.buzzPost.map((item) => action.data._id === item._id ? action.data : item);
            return {
                ...state,
                buzzPost: buzzDisLike
            }
        }
        default: {
            return state;
        }
    }
}

export default buzzReducer;
