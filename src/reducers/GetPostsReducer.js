let InitialState =  {
    posts : []
}

export const GetPostsReducers = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {...state, posts : action.payload}
            break;
    
        default: return state
            break;
    }
}