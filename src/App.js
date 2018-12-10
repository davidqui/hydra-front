import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios' ;
import M from "materialize-css"

class App extends Component {
  componentDidMount(){
    console.log("HOOLA")
    serv()
    //var elems = document.querySelectorAll('.dropdown-trigger');
    //var instances = M.Dropdown.init(elems);
    console.log(M)
    //M.AutoInit();
  }
  
  render() {
    console.log("HOOLA")
    serv()
    return (
      
      <div className="App">
        <NabBar></NabBar>
        <Cosa/>
        <DropB/>
      </div>
    );
  }
}

function serv(){
  //console.log("Hola mundo")
  URL =  "http://localhost:9394/tipoDoc"
  axios.get(URL).then((res)=>{
    console.log(res)
})

}


class Cosa extends Component {
  render(){
      return (
        <React.Fragment>
          <img src={logo} className="App-logo" alt="logo" />
                      Holamundo
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
        </React.Fragment>
      ) 
  }
}

class NabBar extends Component {

  render(){
    return(

      <nav>
      <div className="nav-wrapper blue darken-2">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass">Sass</a></li>
          <li><a href="badges">Components</a></li>
          <li><a href="collapsible">JavaScript</a></li>
        </ul>
      </div>
    </nav>

    )
  }
}
class DropB extends Component {
  render(){
    return (
       <React.Fragment>
        <a className='dropdown-trigger btn' href='#' data-target='dropdown1' onClick={(e) => e.preventDefault()}>Drop Me!  </a>
        <ul id='dropdown1'  className='dropdown-content'>
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider" tabIndex="-1"></li>
          <li><a href="#!">three</a></li>
          <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
          <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
        </ul>
      </React.Fragment>

    )
  }

}


export default App;
