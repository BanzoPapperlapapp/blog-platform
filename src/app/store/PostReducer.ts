import {api, PostApiType} from "../../api/BlogsPlatformApi";
import {Dispatch} from "redux";
const initialState: PostApiType =     {
    id: '',
    blogId: '',
    blogName: '',
    content: '',
    createdAt: '',
    shortDescription: '',
    title: ''
}
export const PostReducer = (state = initialState, action: PostReducerActionsType):PostApiType => {
    switch(action.type){
        case "SET-POST": {
            return {...action.payload.post}
        }
        default: return state;
    }
}

export const setPostAC = (post: PostApiType) => {
    return {type: 'SET-POST', payload: {post} } as const
}
export const getPostTC = (id: string) => {
    return async (dispatch: Dispatch) => {
        const post = await api.getPost(id)
        dispatch(setPostAC(post.data))
    }
}
type PostReducerActionsType =
        | ReturnType<typeof setPostAC>

