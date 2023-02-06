import React from 'react';
import './App.css';
import {Header} from "../components/Header/Header";
import {Main} from "../components/Main/Main";
import {SideBarL} from "../components/SideBar/SideBarL";
import {MainContainer} from "../components/Common/MainContainer";
import {Blogs} from "../Pages/Blogs/Blogs";
import {Blog} from "../Pages/Blog/Blog";

function App() {
  return (
      <div className={"App"}>
              <Header title={'Blogs'}/>
              <MainContainer style={'wrapper'}>
                  <SideBarL/>
                  <Main children={<Blog/>}/>
              </MainContainer>
      </div>
  );
}

export default App;
