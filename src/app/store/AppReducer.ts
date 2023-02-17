

const initialState:AppReducerStateType = {
    appStatus: 'loading'
}
export const AppReducer = (state = initialState, action: FinalAppReducerActionType) : AppReducerStateType=> {
    switch (action.type){
        case "SET-APPSTATUS": {
            return {...state,appStatus: action.payload.status}
        }
        default: return state;
    }
};

export const setAppStatusAC = (status: AppStatus) => {
    return {type: 'SET-APPSTATUS', payload: {status}} as const
}

type FinalAppReducerActionType =
    | ReturnType<typeof setAppStatusAC>

type AppReducerStateType = {
    appStatus: AppStatus
}
type AppStatus = 'loading' | 'idle' | 'fail'