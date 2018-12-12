import React,{Component} from 'react'
import {InputSelec} from '../../components/Forms'
/**
 * Import a los servicios
 */
import  {getTipoDoc,
         getAmenaza,
         getCredibilidad,
         getClasificacion,
         getExactitud,
         getFactorInestabilidad,
         getTipoDocDummy} from '../../services/uploadFormServ'
import M from "materialize-css"


class Upload extends Component {
     constructor(){
         super();
         /**
          * en el estado del componente queda almacenada la data entregada por cada uno de los
          * servicios correspondientes
          *
          */
          this.state = {
               "tipoDoc": [],
               "amenaza": [],
               "credibilidad":[],
               "exactitud":[],
               "clasificacion":[],
               "factoresInestabilidad" :[],


              "dummy":{}

          };
          //this.getContentQuery = this.getContentQuery.bind(this)
         /**
          *Invocacion a cada uno de los servicios , se toma la data que entrega el servicios y
          * se hace el SET ala variable del estado
          */

        //this.getContentQuery("dummy",getTipoDocDummy());
         // getTipoDocDummy().then( (data)  =>{
         //     this.setState({"dummy": data}) ;
         // });
     }
     render (){
         /**
          * extracciond e los campos del estado
          */
          var { tipoDoc,
                amenaza,
                credibilidad,
                exactitud,
                factoresInestabilidad,
                clasificacion,
                dummy} = this.state;
           /*
          var b = Object.keys(tipoDoc).map((i) => {
               return <button>{i}</button>          
          })*/
          return (
               <div>
                   <div className= "container row">
                       <form action="#">
                           <div className="file-field input-field">
                               <div className="btn">
                                   <span>File</span>
                                   <input type="file"/>
                               </div>
                               <div className="file-path-wrapper">
                                   <input className="file-path validate" type="text"/>
                               </div>
                           </div>
                               <InputSelec id={"tipoDoc"} descripcion ={"Tipo de Documento"}  campo={"tipo"}data={tipoDoc} s={6}/>
                               <InputSelec id={"amenaza"} descripcion ={"Amenaza"} campo={"tipo"} data={amenaza} s={6}/>
                               <InputSelec id={"credibilidad"} descripcion ={"Evaluacion de la Fuente"} campo={"nombre"} data={credibilidad} s={12}/>
                               <InputSelec id={"exactitud"} descripcion ={"Evaluacion de la Informacion"} campo={"nombre"} data={exactitud} s={12}/>
                               <InputSelec id={"factoresInestabilidad "} descripcion ={"Factores de Inestabilidad"} campo={"nombre"} data={factoresInestabilidad} s={12}/>
                               <InputSelec id={"clasificacion"} descripcion ={"Clasificacion"} campo={"tipo"} data={clasificacion} s={12}/>
                               <InputSelec id={"tipoDoc"} descripcion ={"Tipo de Documento"}  campo={"tipo"}data={tipoDoc} s={6}/>
                               <InputSelec id={"amenaza"} descripcion ={"Amenaza"} campo={"tipo"} data={amenaza} s={6}/>
                           <div  className="input-field col s12">
                               <select id={"test"}    >
                                   <option value=""  disabled selected>Seleccione una Opción</option>
                                   <option value="1">Option 1</option>
                                   <option value="2">Option 2</option>
                                   <option value="3">Option 3</option>
                               </select>
                               <label >YTest</label>
                           </div>
                           <div className="row">
                               <div className="col s6">
                                   <p>
                                       <label>
                                           <input type="checkbox" className="filled-in" />
                                           <span>Publico</span>
                                       </label>
                                   </p>
                               </div>
                               <div className="col s6">
                                   <p>
                                       <label>
                                           <input type="checkbox" className="filled-in" />
                                           <span>Privado</span>
                                       </label>
                                   </p>
                               </div>
                           </div>
                               <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                   <i className="material-icons right">send</i>
                               </button>
                           </form>
                    </div>
               </div>
          )     

     }
     componentDidMount(){
         getTipoDoc().then((data) => {
             this.setState({"tipoDoc": data}) ;
         });
         getAmenaza().then( (data)  =>{
             this.setState({"amenaza": data}) ;
         });
         getCredibilidad().then( (data)  =>{
             this.setState({"credibilidad": data}) ;
         });
         getExactitud().then((data) => {
             this.setState({"exactitud": data});
         });
         getFactorInestabilidad().then((data) => {
             this.setState({"factoresInestabilidad": data});
         });
         getClasificacion().then((data) => {
             this.setState({"clasificacion": data});
         });
         M.AutoInit();
     }
}

export default Upload