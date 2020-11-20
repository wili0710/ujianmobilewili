const INITIAL_STATE={
    id:0,
    username:'',
    islogin:false,
    isLoading:false
}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'LOGIN':
            return {...state,...action.payload,isLogin:true,isLoading:false}
        case 'LOADING':
            return {isLoading:true}
        case 'LOGOUT':
            return INITIAL_STATE
        default:
            return state
    }
}