const InitialState={
    category: '',
    date_created:'',
    content:'',
    image_url:'',
    like:'',
    dislike:''
}

const buzzReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "BUZZ_POST": {
            return { ...state, ...action.data };
        }
        default: {
            return state;
        }
    }
}

export default buzzReducer;
