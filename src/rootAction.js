export const loginAction=()=>(dispatch)=>{
    try {
        dispatch({
            type:"loginRequest"
        })

        dispatch({
            type:"loginSuccess"
        })
    } catch (error) {
        dispatch({
            type:"loginFail"
        })
    }
}

export const logoutAction=()=>(dispatch)=>{
    try {
        dispatch({
            type:"logoutRequest"
        })

        dispatch({
            type:"logoutSuccess"
        })
    } catch (error) {
        dispatch({
            type:"logoutFail"
        })
    }
}