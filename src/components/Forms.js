import React,{Component} from 'react'
import M from "materialize-css"


export class  InputSelec  extends Component{
     
     constructor(){
          super();
          this.state = {
               "items": []
          }
     }
     render(){

          console.log(this.props.data)
          var {data} = this.props
          console.log(data)
          
          try {
               var list = Object.keys(data)
               var items  =  list.map((c,i) =>{
                    console.log(data[c]["tipo"])
                    return(
                         <option key={i+1} value={i+1} >{data[c]["tipo"]}</option>
                    )
               })     
          } catch (error) {
               console.log(error)
          }
           
          //this.setState({ items : items})
          console.log(items) 

          //var {items} = this.state
          return (
               <div  className="input-field col s12">
                    <select id={this.props.id} >
                         <option value="0" disabled selected>Seleccione una Opcion</option>
                         {items}
                    </select>
                    <label >{this.props.descripcion}</label>
               </div>
          
          )
     }

     componentDidMount(){
          this.chageMethod()
     }     
     chageMethod (){
          var inputfield = document.querySelector("#"+this.props.id)
          console.log(inputfield,this.props.id)
          var instance = M.FormSelect.init(inputfield)
          ///var instance = M.FormSelect.getInstance(inputfield);
          
          console.log(instance)
          console.log(instance.getSelectedValues())
          console.log(instance.input.value)

     }
     

}
