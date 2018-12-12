import React,{Component} from 'react';
import './styles/Header.css';
import M from  "materialize-css";

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
           <div>
              <div className="navbar-fixed ">
                   <nav>
                        <div className="nav-wrapper  light-blue darken-4  ">
                             <a href="#" className="brand-logo center">
                             HYDRA SEARCH
                             </a>
                             <div className="nav-content">
                                  <span className="nav-title">Subsistema de Inteligencia y Contrainteligencia del Ejército</span>
                             </div>
                        </div>
                   </nav>
              </div>
           </div>

       )
     }
     componentDidMount() {
         document.addEventListener('DOMContentLoaded', function() {
             var elems = document.querySelectorAll('.sidenav');
             var instances = M.Sidenav.init(elems);
         });
     }
}

export default Header   