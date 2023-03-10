import axios from "axios";

const settings = {
    headers: {
        'Content-Type': 'application/json'
    }
}
const instance = axios.create({
    baseURL: 'https://bloggers-chi.vercel.app/',
    ...settings
})

export const api = {
    getBlogs: () => instance.get<BlogsResponseType>('blogs'),
    getBlog: (id: string) => instance.get<BlogsApiType>(`blogs/${id}`),
    getBlogPosts: (id: string) => instance.get<PostsResponseType>(`blogs/${id}/posts`),
    getPosts: () => instance.get<PostsResponseType>('posts'),
    getPost: (id: string) => instance.get<PostApiType>(`posts/${id}`)
}

export type BlogsResponseType = {
    pagesCount: number
    page: number
    pageSize: number
    totalCount: number
    items: BlogsApiType[]
}
export type BlogsApiType = {
    id: string | null
    name: string | null
    description: string | null
    websiteUrl: string | null
    // "createdAt": "2023-02-07T08:41:55.575Z",
    // "isMembership": true
}

export type LikesPostApiType = {
    addedAt: string
    userId: string
    login: string
}

export type ExtendsPostApiType = {
    likesCount: number
    dislikesCount: number
    myStatus: string | null
}

export type PostApiType = {
    id: string
    title: string
    shortDescription: string
    content: string
    blogId: string
    blogName: string
    createdAt: string
    // extendedLikesInfo: ExtendsPostApiType
    // newestLikes: LikesPostApiType[]
}

export type PostsResponseType = {
    pagesCount: number
    page: number
    pageSize: number
    totalCount: number
    items: PostApiType[]
}

