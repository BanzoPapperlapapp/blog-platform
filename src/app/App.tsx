import React, {useEffect} from 'react';
import './App.css';
import {Link, Navigate, Route, RouteObject, Routes, To, useMatches} from "react-router-dom";
import {Blogs} from "../Pages/Blogs/Blogs";
import {Blog} from "../Pages/Blog/Blog";
import {Layout} from "./Layout";
import {useAppDispatch, useAppSelector} from "./Store";
import {getBlogTC} from "../store/BlogsReducer";
import {Posts} from "../Pages/Posts/Posts";
import {Post} from "../Pages/Post/Post";


function App() {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getBlogTC())
    },[])
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<Navigate to={'blogs'}/>}/>
                <Route path={"blogs"} element={<Blogs/>}/>
                <Route path={"blogs/:id"} element={<Blog/>}/>
                <Route path={"posts"} element={<Posts/>}/>
                <Route path={"posts/:id"} element={<Post/>}/>
            </Route>
        </Routes>
    );
}

export default App;
