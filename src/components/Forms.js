import React,{Component} from 'react'
import M from "materialize-css"
export class  InputSelec  extends Component{
     
     constructor(){
          super();
          this.state = {
              "data":[],
              "items": [],
              "instance": "",

          }
     }

     render(){
          var {items,items2} = this.state;
          var {s} = this.props
          return (
              <div className ={"col s"+s}>
                   <div  className="input-field col s12">
                        <select id={this.props.id} onChange={() => this.chageMethod()}   >
                             <option value=""  disabled selected>Seleccione una Opción</option>
                                {items}
                        </select>
                        <label >{this.props.descripcion}</label>
                   </div>
              </div>
          )
     }

     chageMethod (){
         var {instance}  = this.state;
          //var select = document.querySelector("#"+this.props.id);
          //var instance = M.FormSelect.getInstance(select);
          console.log(instance.getSelectedValues());
          //console.log(instance.dropdownOptions);
          //console.log(instance.getSelectedValues())
          //console.log(inputfield);
          //var instance = M.FormSelect.init(inputfield)
          //var instance = M.FormSelect.getInstance(inputfield);
          //console.log(instance.getSelectedValues())
     }
    componentWillReceiveProps(next) {
        var {data,campo} = next;
        //if (data !== this.props.data){
        //console.log(data)
        try {
             var list = Object.keys(data);
             //console.log(data);
             var items = list.map((c, i) => {
                 return <option value={data[c][campo]} key={i}>{data[c][campo]}</option>
             })
        } catch (error) {
            console.log(error)
        }
        this.setState({items: items});
        //this.setState({ items2 : items2})
        var elems = document.querySelector("#" + this.props.id);
        var instance = M.FormSelect.init(elems);
        this.setState({instance: instance});
        //console.log(this.state.items);
        //console.log(elems,this.props.id);
        //console.log(instance.dropdownOptions);
        // console.log(instance.getSelectedValues())
        this.forceUpdate()
        //}
     }
    componentWillUpdate(nextProps, nextState) {
        if (nextState.items !== this.state.items ) {
            console.log(this.state.items);
            console.log(nextState.items);
            var {data,campo} = nextProps;
            if (data !== this.props.data){
            //console.log(data)
            try {
                 var list = Object.keys(data);
                 //console.log(data);
                 var items = list.map((c, i) => {
                     return <option value={data[c][campo]} key={i}>{data[c][campo]}</option>
                 })
            } catch (error) {
                console.log(error)
            }
            this.setState({items: items});
            //this.setState({ items2 : items2})
            var elems = document.querySelector("#" + this.props.id);
            var instance = M.FormSelect.init(elems);
            this.setState({instance: instance});
            //console.log(this.state.items);
            //console.log(elems,this.props.id);
            //console.log(instance.dropdownOptions);
            // console.log(instance.getSelectedValues())
            this.forceUpdate()
            }
        }
    }

}




