import tipoDoc from "../assets/dummyInfo/tipoDoc.json"
import axios from 'axios';

const URL  = "http://localhost";
const port = ":9394";


export function getTipoDoc (){
     var a = axios.get(URL+port+"/tipoDoc")
          .then(response => {
               //console.log(response.data)
               //getContentQuery ("tipoDoc",response.data)
                return response.data
          }).catch(error  =>{
               console.log("Error",error)
          });
     return a
}

export function getTipoDocDummy (){
    var A = Promise.resolve(tipoDoc);
    return A.then((t => t ))
}