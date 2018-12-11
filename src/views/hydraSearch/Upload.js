import React,{Component} from 'react'
import {InputSelec} from '../../components/Forms'
import  {getTipoDoc,getTipoDocDummy} from '../../services/uploadFormServ'



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

     }
     
     getContentQuery(type,data){
          switch (type) {
               case "tipoDoc":
                    this.setState({"tipoDoc": data}) ;
               break;
               case  "amenaza":
               
               break;
               case "evaluacion_fuente":
                    
                    break;
               case "evaluacion_info":
               
               break;
               case "tipo_amenaza":
                    
                    break;
               case "clasificacion":
               
               break;
              case "dummy":
                  this.setState({"dummy": data});
                  break;
          }

     }

     render (){
         
          var {tipoDoc,amenaza,dummy} = this.state
           /*
          var b = Object.keys(tipoDoc).map((i) => {
               return <button>{i}</button>          
          })*/
          return (
               <div>
                    <h1>UPLOAD</h1>  

                   <InputSelec id={"Dummy"} descripcion ={"Tipo de Dummy"} data={dummy}/>
                   <InputSelec id={"tipoDoc"} descripcion ={"Tipo de Documento"} data={tipoDoc}/>
                   {/*{b} <InputSelec id={"amenaza"} descripcion ={"Amenaza"}/>
                    <InputSelec id={"evaluacion_fuente"} descripcion ={"Evaluacion de la Fuente"}/>
                    <InputSelec id={"evaluacion_info"} descripcion ={"Evaluacion de la Informacion"}/>
                    <InputSelec id={"clasificacion"} descripcion ={"Clasificacion"}/>
                    Publico__privado TODO*/}
                    
               </div>
          )     

     }

     componentDidMount(){

         getTipoDoc().then((data) => {
             this.getContentQuery("tipoDoc",data);
             //return console.log(data)
         })
         //this.getContentQuery("dummy",getTipoDocDummy());
         getTipoDocDummy().then( (data)  =>{
             this.getContentQuery("dummy",data);
         });
         //console.log("axios",getTipoDoc())
          //console.log("dUMMY",getTipoDocDummy())
     }
}




export default Upload