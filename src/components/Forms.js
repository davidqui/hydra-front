import React,{Component} from 'react'
import M from "materialize-css"
export class  InputSelec  extends Component{
     
     constructor(){
          super();
          this.state = {
               "items": [],

          }
     }

     render(){
          var {items,items2} = this.state;
          return (
               <div  className="input-field col s12">
                    <select id={this.props.id} onChange={() => this.chageMethod()}   >
                         <option value=""  disabled selected>Seleccione una Opción</option>
                        {items}
                    </select>
                    <label >{this.props.descripcion}</label>
               </div>
          )
     }
     componentWillMount() {

         var {data} = this.props;
         //console.log(next)
         try {
             var list = Object.keys(data)
             var items = list.map((c, i) => {
                 return <option value={i} key={i}>{data[c]["tipo"]}</option>
             })

         } catch (error) {
             console.log(error)
         }
         this.setState({items: items})
         //this.setState({ items2 : items2})
         var elems = document.querySelector("#" + this.props.id);
         var instance = M.FormSelect.init(elems);
         this.setState({instance: instance});
         //console.log(elems,this.props.id);
         //console.log(instance.dropdownOptions);
         // console.log(instance.getSelectedValues())

     }

    componentDidMount(){
          //this.chageMethod()
         var elems = document.querySelector("#"+this.props.id);
         //var instance = M.FormSelect.init(elems);
         //console.log(elems,this.props.id);
         //console.log(this.state.instance.dropdownOptions);
         //console.log(this.state.instance.getSelectedValues())
     }     
     chageMethod (){
         var {instance}  = this.state;
          var inputfield = document.querySelector("#"+this.props.id);
          console.log(instance.getSelectedValues());
          console.log(instance.dropdownOptions);
         // console.log(instance.getSelectedValues())

          //console.log(inputfield);
          //var instance = M.FormSelect.init(inputfield)
          //var instance = M.FormSelect.init(inputfield)
          //var instance = M.FormSelect.getInstance(inputfield);
          //console.log(instance.getSelectedValues())
     }
    componentWillReceiveProps(next) {

        var {data} = next;
        console.log(next)
        try {
            var list = Object.keys(data)
            var items = list.map((c, i) => {
                return <option value={i} key={i}>{data[c]["tipo"]}</option>
            })

        } catch (error) {
            console.log(error)
        }
        this.setState({items: items})
        //this.setState({ items2 : items2})
        var elems = document.querySelector("#" + this.props.id);
        var instance = M.FormSelect.init(elems);
        this.setState({instance: instance});
        //console.log(elems,this.props.id);
        //console.log(instance.dropdownOptions);
        // console.log(instance.getSelectedValues())
    }
}




