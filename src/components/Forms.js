import React,{Component} from 'react'
import M from "materialize-css"


export class  InputSelec  extends Component{
     
     constructor(){
          super();
          this.state = {
               "items": [],
              "instance":{"dropdownOptions": "AAAA","getSelectedValues":()=> console.log("BBB")}
          }
     }

     render(){

          var {items,items2} = this.state;
          return (
               <div  className="input-field col s12">
                    <select id={this.props.id}  >
                         <option value="" onClick={() => console.log("SSS")} disabled selected>Seleccione una Opción</option>
                    </select>
                    <label >{this.props.descripcion}</label>

               </div>
          
          )
     }

     componentDidMount(){
          this.chageMethod()
         var elems = document.querySelector("#"+this.props.id);
         //var instance = M.FormSelect.init(elems);
         console.log(elems,this.props.id);
         console.log(this.state.instance.dropdownOptions);
         console.log(this.state.instance.getSelectedValues())
     }     
     chageMethod (){
          var inputfield = document.querySelector("#"+this.props.id)
         //console.log(inputfield);
          //var instance = M.FormSelect.init(inputfield)
          //var instance = M.FormSelect.init(inputfield)
          //var instance = M.FormSelect.getInstance(inputfield);
          //console.log(instance.getSelectedValues())
     }
    componentWillReceiveProps(next){
        var {data} = next;
        try {
            var list = Object.keys(data)

            list.forEach((c,i) =>{
                var opt = document.createElement("option");
                opt.key = i;
                opt.value = i;
                opt.innerText = data[c]["tipo"];
                opt.addEventListener("selected", function() { console.log("aaaaa")});
                var select = document.querySelector("#"+this.props.id);
                select.addEventListener("selected", function() { console.log("aaaaa")});
                select.appendChild(opt)
            })
        } catch (error) {
            console.log(error)
        }
        //this.setState({ items : items})
        //this.setState({ items2 : items2})
        var elems = document.querySelector("#"+this.props.id);
        var instance = M.FormSelect.init(elems);
        this.setState({ instance : instance});
        console.log(elems,this.props.id);
        console.log(instance.dropdownOptions);
        console.log(instance.getSelectedValues())

    }
}

