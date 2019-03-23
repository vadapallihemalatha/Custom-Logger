export const countUpSync= (val) => {
    return ({type:'COUNT_UP', value: val});
}

export const countDown= (val) => {
    return ({type:'COUNT_DOWN', value: val});
}

export const loading = (val) => {debugger;
    return ({type:'LOADING', isLoading: val});
}
export const countUp = (val) => {
    return dispatch => {
        dispatch(loading(true));
        setTimeout(() => {
            dispatch(countUpSync(val));
            dispatch(loading(false));
        }, 3000);
    }
}
