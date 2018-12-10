import React,{Component} from 'react'

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


export default DropB;   