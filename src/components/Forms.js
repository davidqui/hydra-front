import React,{Component} from 'react'
import M from "materialize-css"
import  "./styles/Form.css"
export class  InputSelec  extends Component{
     constructor(){
          super();
          this.state = {
              "data":[],
              "items": [],
          }
     }

     render(){
          var {items} = this.state;
          var {s,multiple} = this.props;
          var classs = multiple? "col s12": "input-field  col s12";
          return (
              <div className ={"col s"+s}>
                   <div  className={classs} >
                        <select id={this.props.id}  onChange={this.chageMethod} multiple={multiple}   >
                            <option value="default" selected disabled >Seleccione una Opción</option>
                              {items}
                        </select>
                        <label >{this.props.descripcion}</label>
                   </div>
              </div>
          )
     }


     chageMethod (e){
         //console.log("ss",e.target);
         var select = e.target.id;
         //console.log(M.FormSelect.getInstance(select).getSelectedValues())
     }


    componentWillReceiveProps(next) {
        var {data,campo} = next;
        try {
             var list = Object.keys(data);
             var items = list.map((c, i) => {
                 return <option  value={data[c][campo]} key={i} >{data[c][campo]} </option>
             })
        } catch (error) {
            console.log(error)
        }
        this.setState({items});
     }
}


export class  InputCheck extends Component{

    render(){
        var {name,s} = this.props;
        return(
            <div className={"col s"+s}>
                <p>
                    <label>
                        <input id={name}  type="checkbox"  onClick={ (w) => this.props.event(w)} />
                        <span>{name}</span>
                    </label>
                </p>
            </div>
        )
    }
}


