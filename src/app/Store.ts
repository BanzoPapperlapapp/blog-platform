import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkDispatch, ThunkAction} from 'redux-thunk'
import {BlogsReducer} from "../store/BlogsReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {BlogReducer} from "../store/BlogReducer";
import {AppReducer} from "../store/AppReducer";
import {PostsReducer} from "../store/PostsReducer";
import {PostReducer} from "../store/PostReducer";

export type RootReducerType = ReturnType<typeof RootReducer>
export const RootReducer = combineReducers({
    blogs: BlogsReducer,
    blog: BlogReducer,
    app: AppReducer,
    posts: PostsReducer,
    post: PostReducer
})
export type RootStateType = ReturnType<typeof store.getState>
export const store = createStore(RootReducer,applyMiddleware(thunk))

export type AppDispatch = ThunkDispatch<RootStateType, undefined, AnyAction>;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector