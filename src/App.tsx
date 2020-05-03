import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/header/headerContainer';
import NavBar from './components/navbar/NavBar';
import s from './App.module.css'
import { Route } from 'react-router-dom';
import ProfileContaner from './components/ProfileContaner/ProfileContaner';
import NewsContaner from './components/News/NewsContaner';
import PhotoContainer from './components/Photo/PhotoContainer';
import MusicContainer from './components/music/MusicContainer';



class App extends React.Component{
  componentDidMount(){

  }
  render(){
    return(      
      <div className={s.wrapper_component}>
         <HeaderContainer/>
         <div className={s.content}>
            <Route path={"/"} component={NavBar}/> 
            <Route path ={"/profile/:userid?"} render = {()=><ProfileContaner/>}/>
            <Route path ={"/news"}       render = {()=><NewsContaner/>}/>
            <Route path ={"/photos"}     render = {()=><PhotoContainer/>}/>
            <Route path = {"/audios"}    render = {()=><MusicContainer/>}/>
        </div>

      </div>
    )
  }
}

export default App;
