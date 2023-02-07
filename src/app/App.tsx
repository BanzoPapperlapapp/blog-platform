import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Blogs} from "../Pages/Blogs/Blogs";
import {Blog} from "../Pages/Blog/Blog";
import {Layout} from "./Layout";
import {useAppDispatch, useAppSelector} from "./Store";
import {getBlogTC} from "../store/BlogsReducer";


function App() {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getBlogTC())
    },[])

    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<Blogs/>}/>
                <Route path={"blogs/:id"} element={<Blog/>}/>
            </Route>
        </Routes>
    );
}

export default App;
