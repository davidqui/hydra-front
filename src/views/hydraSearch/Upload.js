import React,{Component} from 'react';
import {InputCheck} from '../../components/InputCheck';
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
         } from '../../services/uploadFormServ'
import SelectorUI from '../../components/SelectorUI';
import MultiSelectoCheck from '../../components/MultiSelectoCheck';
import FormLabel from "@material-ui/core/FormLabel";


/** Configuraciones de los Campos del formulario **/
const formField = {
    "tipoDoc" :             { "id":"idTipoDoc" , "s":6,"descripcion":"Tipo de Documento"},
    "amenaza":              { "id":"idAmenaza" , "s":6,"descripcion":"Tipo de Amenaza ---Multiple"},
    "credibilidad":         { "id":"idCredibilidad" , "s":12,"descripcion":"Evaluacion de la Fuente"},
    "exactitud":            { "id":"idExactitud" , "s":6,"descripcion":"Evaluacion de la Informacion"},
    "factoresInestabilidad":{ "id":"idFactores" , "s":6,"descripcion":"Factores de Inestabilidad ---Multiple"},
    "clasificacion":        { "id":"idClasificacion" , "s":12,"descripcion":"Clasificacion"}

}



class Upload extends Component {
     constructor(){
         super();
         /**
          * en el estado del componente queda almacenada la data entregada por cada uno de los
          * servicios correspondientes
          *
          */
          this.state = {
               "idTipoDoc": "",
               "idAmenaza": [],
               "idCredibilidad":"",
               "idExactitud":"",
               "clasificacion":"",
               "idFactores" :[],
              "accesoPrimario":false,
               "idClasificacion":"",
          };


     }
     //  metodo para extraer los datos de cada campo mapeandolos a una variable del estado
     extractData = (key,value) =>{
         this.setState({[key]: value})
     } ;

     render (){
         return (
               <div>
                   <div className= "container row">
                       <form id="uploadForm"  >
                           {/*{ Input del archivao}*/}
                           <div className="file-field input-field">
                               <div className="btn">
                                   <span>File</span>
                                   <input id="uploadFile" type="file"/>
                               </div>
                               <div className="file-path-wrapper">
                                   <input className="file-path validate" type="text"/>
                               </div>
                           </div>
                           {/*{Campos de el fromulario }*/}
                           <SelectorUI name={"tipoDoc"} options={formField["tipoDoc"]}  service={getTipoDoc} extract={this.extractData}/>
                           <MultiSelectoCheck name={"amenaza"} options={formField["amenaza"]}   service={getAmenaza} extract={this.extractData}/>

                           <SelectorUI name={"credibilidad"} options={formField["credibilidad"]}   service={getCredibilidad} extract={this.extractData}/>
                           <SelectorUI name={"exactitud"} options={formField["exactitud"]}   service={getExactitud} extract={this.extractData}/>

                           <MultiSelectoCheck name={"factoresInestabilidad"} options={formField["factoresInestabilidad"]}   service={getFactorInestabilidad} extract={this.extractData}/>
                           <SelectorUI name={"clasificacion"} options={formField["clasificacion"]}   service={getClasificacion} extract={this.extractData}/>

                           {/*{selecto nivel de acesos}*/}
                           <div className="row  mt-4">
                               <FormLabel component="legend">Nivel de Acceso</FormLabel>
                               <InputCheck name={"Privado"}  extract={this.extractData} s={6} />
                           </div>
                           {/*{submit de la peticion }*/}
                               <button className="btn waves-effect waves-light" type="submit" name="action" onClick={(e) => this.sendForm(e)}>
                                   Submit
                                   <i className="material-icons right">send</i>
                               </button>
                           </form>
                    </div>
               </div>
          )     

     }

     async sendForm(e){
         e.preventDefault();
        console.log("ENTRA ");
        var inputFile = document.getElementById("uploadFile");

         const formData = new FormData();
         formData.append('docFile', inputFile.files[0]);

         formData.append('login', "aherreram");
         formData.append('usuarioValidador', "jcespedeso");
         formData.append('descripcion', "CABO quijano");

         formData.append('amenazaCollection', this.state.idAmenaza);
         formData.append('transicionCollection', this.state.idFactores);//factores inestabilidad

         formData.append('idExactitud', this.state.idExactitud);
         formData.append('idCredibilidad',this.state.idCredibilidad);
         formData.append('idTipoDoc', this.state.idTipoDoc);
         formData.append('idClasificacion',this.state.idClasificacion);
         formData.append('accesoPrimario', this.state.accesoPrimario);

        console.log("Este es el data ", formData);
        postForm(formData);
     }
}

export default Upload