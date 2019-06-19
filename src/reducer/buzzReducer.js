const InitialState={
    buzzPost:[]
}

const buzzReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "BUZZ_POST": {
            const newBuzz = [...state.buzzPost];
            newBuzz.unshift(action.data);
            return { ...state, buzzPost : newBuzz}

            // return { ...state,
            //     buzzPost:[...state.buzzPost, action.data]};
        }
        case "SHOW_POST":{
            return { ...state,
                buzzPost:action.data
            };
        }
        default: {
            return state;
        }
    }
}

export default buzzReducer;
