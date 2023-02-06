import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Blogs} from "../Pages/Blogs/Blogs";
import {Blog} from "../Pages/Blog/Blog";
import {Layout} from "./Layout";
const PATH = {
    BLOGS: '/blogs',
}

function App() {
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
