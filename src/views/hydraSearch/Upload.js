import React,{Component} from 'react'
import {InputSelec,InputCheck} from '../../components/Forms'
/**
 * Import a los servicios
 */
import  {getTipoDoc,
         getAmenaza,
         getCredibilidad,
         getClasificacion,
         getExactitud,
         getFactorInestabilidad,
          postForm,
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

         this.serviceCaller()
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
                       <form id="uploadForm"  >
                           <div className="file-field input-field">
                               <div className="btn">
                                   <span>File</span>
                                   <input id="uploadFile" type="file"/>
                               </div>
                               <div className="file-path-wrapper">
                                   <input className="file-path validate" type="text"/>
                               </div>
                           </div>
                               <InputSelec id={"tipoDoc"} descripcion ={"Tipo de Documento"}  campo={"tipo"} data={tipoDoc}  s={6} />
                               <InputSelec id={"amenaza"} descripcion ={"Amenaza"} campo={"tipo"} data={amenaza} s={6} multiple={true}/>
                               <InputSelec id={"credibilidad"} descripcion ={"Evaluacion de la Fuente"} campo={"nombre"} data={credibilidad} s={12}/>
                               <InputSelec id={"exactitud"} descripcion ={"Evaluacion de la Informacion"} campo={"nombre"} data={exactitud} s={12}/>
                               <InputSelec id={"factoresInestabilidad"} descripcion ={"Factores de Inestabilidad"} campo={"nombre"} data={factoresInestabilidad} s={12} multiple={true}/>
                               <InputSelec id={"clasificacion"} descripcion ={"Clasificacion"} campo={"tipo"} data={clasificacion} s={12}/>
                           <div className="row">
                               <InputCheck name={"Publico"}  event={this.checkButton} s={6}/>
                               <InputCheck name={"Privado"}  event={this.checkButton} s={6}/>
                           </div>
                               <button className="btn waves-effect waves-light" type="submit" name="action" onClick={(e) => this.sendForm(e)}>
                                   Submit
                                   <i className="material-icons right">send</i>
                               </button>
                           </form>
                    </div>
               </div>
          )     

     }
     checkButton(e){
          if (e.target.id == "Publico"){
              var privado = document.getElementById("Privado");
              privado.checked = false
          }
         else if (e.target.id == "Privado"){
             var publico = document.getElementById("Publico");
              publico.checked = false
         }
     }


    /**
     *Invocacion a cada uno de los servicios , se toma la data que entrega el servicios y
     * se hace el SET ala variable del estado
     */
     async serviceCaller (){
         var tipoDoc = await getTipoDoc();
         var amenaza = await getAmenaza();
         var credibilidad = await getCredibilidad();
         var exactitud = await getExactitud();
         var factoresInestabilidad = await getFactorInestabilidad();
         var clasificacion = await getClasificacion();

         this.setState(
             { tipoDoc,
                    amenaza,
                    credibilidad,
                    exactitud,
                    factoresInestabilidad,
                    clasificacion
             });
         //console.log(tipoDoc,amenaza,credibilidad,exactitud,factoresInestabilidad,clasificacion);
        M.AutoInit();
     }



     async sendForm(e){
         e.preventDefault();
        console.log("ENTRA ");
        var inputFile = document.getElementById("uploadFile");

        var tipoDoc = document.getElementById("tipoDoc");
        var valTipoDoc = tipoDoc.options[tipoDoc.selectedIndex].value;

        var amenaza = document.getElementById("amenaza");
        var valAmenaza = amenaza.options[amenaza.selectedIndex].value;

        var credibilidad = document.getElementById("credibilidad");
        var valCredibilidad = credibilidad.options[credibilidad.selectedIndex].value;

        var exactitud = document.getElementById("exactitud");
        var valExactitud = exactitud.options[exactitud.selectedIndex].value;

        var factoresInestabilidad = document.getElementById("factoresInestabilidad");
        var valFactoresInestabilidad = factoresInestabilidad.options[factoresInestabilidad.selectedIndex].value;

        var clasificacion = document.getElementById("clasificacion");
        var valClasificacion = clasificacion.options[clasificacion.selectedIndex].value;

        var data = {
            "idTipoDoc": valTipoDoc,
            "amenaza": valAmenaza,//multiple
            "credibilidad":valCredibilidad,
            "exactitud": valExactitud,
            "factoresInestabilidad": valFactoresInestabilidad,// Multiple
            "clasificacion":valClasificacion,
        };

         const formData = new FormData();
         // formData.append('idTipoDoc',valTipoDoc);
         // formData.append('amenaza',valAmenaza);
         // formData.append('credibilidad',valCredibilidad);
         // formData.append('exactitud',valExactitud);
         // formData.append('factoresInestabilidad',valFactoresInestabilidad);
         // formData.append('clasificacion',valClasificacion);
         formData.append('docFile', inputFile.files[0]);
         formData.append('login', "aherreram");
         formData.append('amenazaCollection', "1,2");
         formData.append('transicionCollection', "1,3");
         formData.append('idExactitud', "5");
         formData.append('idCredibilidad', "2");
         formData.append('usuarioValidador', "jcespedeso");
         formData.append('descripcion', "dessda");
         formData.append('idTipoDoc', "2");
         formData.append('idClasificacion', "2");
         formData.append('accesoPrimario', true);

        console.log("Este es el data ", formData);
        postForm(formData);
     }
}

export default Upload