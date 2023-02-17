import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkDispatch, ThunkAction} from 'redux-thunk'
import {BlogsReducer} from "./BlogsReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {BlogReducer} from "./BlogReducer";
import {AppReducer} from "./AppReducer";
import {PostsReducer} from "./PostsReducer";
import {PostReducer} from "./PostReducer";
import {AuthReducer} from "./AuthReducer";

export type RootReducerType = ReturnType<typeof RootReducer>
export const RootReducer = combineReducers({
    blogs: BlogsReducer,
    blog: BlogReducer,
    app: AppReducer,
    posts: PostsReducer,
    post: PostReducer,
    auth: AuthReducer
})
export type RootStateType = ReturnType<typeof store.getState>
export const store = createStore(RootReducer,applyMiddleware(thunk))

export type AppDispatch = ThunkDispatch<RootStateType, undefined, AnyAction>;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector