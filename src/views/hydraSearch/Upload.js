import React,{Component} from 'react'
import {InputSelec} from '../../components/Forms'
import  {getTipoDoc,
         getAmenaza,getClasificacion,
         getTipoDocDummy} from '../../services/uploadFormServ'
import M from "materialize-css"


class Upload extends Component {
     constructor(){
          super();
          this.state = {
               "tipoDoc": {},
               "amenaza": {},
               "evaluacion_fuente":{},
               "evaluacion_info":{},
               "clasificacion":{},

              "dummy":{}

          }
          this.getContentQuery = this.getContentQuery.bind(this)

         getTipoDoc().then((data) => {
                 //this.getContentQuery("tipoDoc", data);
                this.setState({"tipoDoc": data}) ;
             //return console.log(data)
         });
         getAmenaza().then( (data)  =>{
             //this.getContentQuery("amenaza",data);
                 this.setState({"amenaza": data}) ;

         });
         getClasificacion().then((data) => {
             //this.getContentQuery("clasificacion",data)
                 this.setState({"clasificacion": data});

         });

         //this.getContentQuery("dummy",getTipoDocDummy());
         getTipoDocDummy().then( (data)  =>{
             this.setState({"dummy": data}) ;
             this.getContentQuery("dummy",data);
         });

     }
     
     getContentQuery(type,data){
          switch (type) {
               case "tipoDoc":

                    this.setState({"tipoDoc": data}) ;
               break;
               case  "amenaza":
                   this.setState({"amenaza": data}) ;
               break;
               case "evaluacion_fuente":

                    break;
               case "evaluacion_info":
               
               break;
               case "tipo_amenaza":
                    
                    break;
               case "clasificacion":
                   this.setState({"clasificacion": data}) ;
               break;
              case "dummy":
                  this.setState({"dummy": data});
                  break;
          }

     }

     render (){
         
          var {tipoDoc,amenaza,dummy,clasificacion} = this.state
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
                               <div className ="col s6">
                                   <InputSelec  id={"tipoDoc"} descripcion ={"Tipo de Documento"} data={tipoDoc}/>
                               </div>
                               <div className ="col s6">
                                   <InputSelec id={"amenaza"} descripcion ={"Amenaza"} data={amenaza}/>
                               </div>
                               <div className="row">
                                   <div className="col s12">
                                       <InputSelec id={"evaluacion_fuente"} descripcion ={"Evaluacion de la Fuente"} data={tipoDoc}/>
                                   </div>
                               </div>
                               <div className="row">
                                   <div className="col s12">
                                       <InputSelec id={"evaluacion_info"} descripcion ={"Evaluacion de la Informacion"} data={tipoDoc}/>
                                   </div>
                               </div>
                               <div className="row">
                                   <div className="col s12">
                                       <InputSelec id={"clasificacion"} descripcion ={"Clasificacion"} data={clasificacion}/>
                                   </div>
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



         //console.log("axios",getTipoDoc())
          //console.log("dUMMY",getTipoDocDummy())
         M.AutoInit();
     }
}




export default Upload