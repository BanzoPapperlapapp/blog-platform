import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkDispatch, ThunkAction} from 'redux-thunk'
import {BlogsReducer} from "../store/BlogsReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {BlogReducer} from "../store/BlogReducer";

export type RootReducerType = ReturnType<typeof RootReducer>
export const RootReducer = combineReducers({
    blogs: BlogsReducer,
    blog: BlogReducer
})
export type RootStateType = ReturnType<typeof store.getState>
export const store = createStore(RootReducer,applyMiddleware(thunk))

export type AppDispatch = ThunkDispatch<RootStateType, undefined, AnyAction>;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector