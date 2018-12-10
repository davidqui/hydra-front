import React,{Component} from 'react'

import './styles/Header.css'

class Header extends Component {
     //Color primario #254f82 azul oscuro
     render (){
          return (
               <NavBar/>
          )
     }

}


class NavBar extends Component {

     render(){
       return(
          <div className="navbar-fixed">
               <nav>
                    <div className="nav-wrapper  light-blue darken-4  ">
                         <a href="#" className="brand-logo center">
                         HYDRA SEARCH
                         </a>
                         <div className="nav-content">
                              <span className="nav-title">Subsistema de Inteligencia y Contrainteligencia del Ejército</span>
                         </div>
                         
                         <ul id="nav-mobile" className="right hide-on-med-and-down">
                         <li><a href="sass">Sass</a></li>
                         <li><a href="badges">Components</a></li>
                         <li><a href="collapsible">JavaScript</a></li>
                         </ul>
                    </div>
               </nav>
          </div>  
   
       )
     }
   }

export default Header   