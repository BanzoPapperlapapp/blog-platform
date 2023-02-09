import {api, PostApiType} from "../api/BlogsPlatformApi";
import {Dispatch} from "redux";
import {setAppStatusAC} from "./AppReducer";

const initialState:PostApiType[] = [
    {
        id: '1',
        blogId: '2',
        blogName: '',
        content: '',
        createdAt: '',
        shortDescription: '',
        title: ''
    }
]
export const PostsReducer = (state = initialState, action: FinalPostsReducerType): PostApiType[] => {
    switch (action.type){
        case "SET-POSTS": {
            return [...action.payload.posts]
        }
        default: return state;
    }
};


export const setPostsAC = (posts: PostApiType[]) => {
    return {type: 'SET-POSTS', payload: {posts}} as const
}
export const getBlogPostsTC = (id: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(setAppStatusAC('loading'))
        const posts = await api.getBlogPosts(id)
        dispatch(setPostsAC(posts.data.items))
        dispatch(setAppStatusAC('idle'))
    }
}
export const getPostsTC = () => {
    return async (dispatch: Dispatch) => {
        dispatch(setAppStatusAC('loading'))
        const posts = await api.getPosts()
        dispatch(setPostsAC(posts.data.items))
        dispatch(setAppStatusAC('idle'))
    }
}

type FinalPostsReducerType =
    | ReturnType<typeof setPostsAC>