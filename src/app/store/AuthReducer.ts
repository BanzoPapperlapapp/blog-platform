
const initialState:AuthReducerStateType = {
    auth: false,
    group: 'user'
}
export const AuthReducer = (state = initialState, action: AuthReducerActionsType):AuthReducerStateType => {
    switch (action.type){
        case "LOGIN":{
            console.log(action.payload)
            if(action.payload.login && action.payload.password) return {auth: true, group: 'admin'}
            return {...initialState}
        }
        case "LOGOUT": {
            return {auth: false, group: 'user'}
        }
        default: return state;
    }
}

export const logInAC = (login: string, password: string) => {
    return {type: 'LOGIN', payload: {login, password}} as const
}
export const logOutAC = () => {
    return {type: 'LOGOUT', payload: {}} as const
}
type AuthGroupType = 'admin' | 'user'
type AuthReducerStateType = {
    auth: boolean
    group: AuthGroupType
}
type AuthReducerActionsType =
    | ReturnType<typeof logInAC>
    | ReturnType<typeof logOutAC>