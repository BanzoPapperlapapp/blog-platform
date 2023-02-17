import {api, BlogsApiType} from "../../api/BlogsPlatformApi";
import {Dispatch} from "redux";
const initialState:BlogsApiType = {
    id: null,
    name: null,
    description: null,
    websiteUrl: null,
}
export const BlogReducer = (state = initialState, action: FinalBlogReducerType) => {
    switch (action.type){
        case "SET-BLOG": {
            return {...action.payload.blog}
        }
        default: return state;
    }
}

export const setBlogAC = (blog: BlogsApiType) => {
    return {type: 'SET-BLOG', payload: {blog}} as const
}
export const setBlogFC = (id: string) => {
    return async (dispatch: Dispatch) => {
        const blog = await api.getBlog(id)
        dispatch(setBlogAC(blog.data))
    }
}

type FinalBlogReducerType =
    | ReturnType<typeof setBlogAC>