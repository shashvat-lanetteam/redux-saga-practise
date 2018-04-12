
const initialState={
    user: []
};

export default (state=initialState,action) => {
    switch (action.type){
        case 'userset':
            debugger;
            state.user.push(action.payload);
            return {...state};
        default:
            return {...state};
    }
};