//import tipoDoc from "../assets/dummyInfo/tipoDoc.json"
import axios from 'axios';

const URL  = "http://localhost";
const port = ":9394";


export function getTipoDoc (getContentQuery){
     var a = axios.get(URL+port+"/tipoDoc")
          .then(response => {
               //console.log(response.data)
               getContentQuery ("tipoDoc",response.data)     

          }).catch(error  =>{
               console.log("Error",error)
          })
     //console.log(a.onLoadEnd)     

}