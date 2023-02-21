

const initialState:AppReducerStateType = {
    appStatus: 'loading',
    modal: {
        show: false,
        component: 'delPost'
    }
}
export const AppReducer = (state = initialState, action: FinalAppReducerActionType) : AppReducerStateType=> {
    switch (action.type){
        case "SET-APPSTATUS": {
            return {...state,appStatus: action.payload.status}
        }
        case  "SHOW-MODAL": {
            return {...state,modal: {show: action.payload.show, component: action.payload.component}}
        }
        default: return state;
    }
};

export const setAppStatusAC = (status: AppStatus) => {
    return {type: 'SET-APPSTATUS', payload: {status}} as const
}
export const showModalAC = (show: boolean, component: modalComponentsType) => {
    return {type: 'SHOW-MODAL', payload : {show, component}} as const
}

type FinalAppReducerActionType =
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof showModalAC>

type AppReducerStateType = {
    appStatus: AppStatus
    modal: {
        show: boolean
        component: modalComponentsType
    }

}
type modalComponentsType = 'delPost' | 'addPost'
type AppStatus = 'loading' | 'idle' | 'fail'