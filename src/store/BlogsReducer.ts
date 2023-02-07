import {api, BlogsApiType, BlogsResponseType} from "../api/BlogsPlatformApi";
import {Dispatch} from "redux";

const initialState : BlogsApiType[] = [
    {
        id: null,
        name: null,
        description: null,
        websiteUrl: null,
    }
]
export const BlogsReducer = (state = initialState, action: FinalBlogsReducerType) : BlogsApiType[] => {
        switch (action.type){
            case "GET-BLOGS": {
                return [...action.payload.state]
            }
            default: return state;
        }
    }
;

export const getBlogsAC = (state: BlogsApiType[]) => {
    return {type: 'GET-BLOGS', payload: {state}} as const
}

export const getBlogTC = () => {
    return async (dispatch: Dispatch) => {
        const blogs = await api.getBlogs()
        dispatch(getBlogsAC(blogs.data.items))
    }
}

type FinalBlogsReducerType =
    | ReturnType<typeof getBlogsAC>
