
const initialState={};

export default (state=initialState,action) => {
    switch (action.type){
        case 'loginUser':
            return{...state,user:action.payload,isLoading:false};
        case 'logoutUser':
            return{...state,user:null,isLoading:false};
        case 'login':
            return{...state,isLoading:true};
        case 'err':
            return{...state,isLoading:true};
        default:
            return {...state}
    }
 };