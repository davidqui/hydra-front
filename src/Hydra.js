import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Login from './views/Login'

//Hydra-seach
import Upload from './views/hydraSearch/Upload'
import ReviewFile from './views/hydraSearch/ReviewFile'


class Hydra extends Component {
  componentDidMount(){
  }
  
  render() {
    var Active = ""
    //var key = "" ////seguridad
    var key = "Hyd-Src-UP"
    //var key = "Hyd-Src-RF"
    
    
    switch (key) {
      case "Hyd-Src-UP" :
          Active = <Upload/>
        break;
      case "Hyd-Src-RF" :
        Active = <ReviewFile/>
      break;
  
      default:
        var Active = <Login/>
        break;
    }


    return (
      
      <div className="App">
       <Header  />
       {Active}
      </div>
    );
  }
}









export default Hydra;
