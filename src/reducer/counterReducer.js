const initialState = {
    count:5,
    isLoading: false
};
const reducer = (state = initialState, action) => {debugger;
    const newState = {...state};
    switch(action.type){
        case 'COUNT_UP':
            newState.count += action.value;
            break;
        case 'COUNT_DOWN':
            newState.count -= action.value;
            break;
        case 'isLoading':
            newState.isLoading = action.isLoading
    }
    return newState;
}

export default reducer;