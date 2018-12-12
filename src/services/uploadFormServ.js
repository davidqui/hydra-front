import tipoDoc from "../assets/dummyInfo/tipoDoc.json"
import axios from 'axios';

const URL  = "http://localhost";
const port = ":9394";


export function getTipoDoc (){
     var a = axios.get(URL+port+"/tipoDoc")
          .then(response => {
                return response.data
          }).catch(error  =>{
               console.log("Error",error)
          });
     return a
}
export function getAmenaza (){
    var a = axios.get(URL+port+"/amenaza")
        .then(response => {
            return response.data
        }).catch(error  =>{
            console.log("Error",error)
        });
    return a
}

export function getCredibilidad (){
    var a = axios.get(URL+port+"/credibilidad")
        .then(response => {
            return response.data
        }).catch(error  =>{
            console.log("Error",error)
        });
    return a
}

export function getExactitud (){
    var a = axios.get(URL+port+"/exactitud")
        .then(response => {
            return response.data
        }).catch(error  =>{
            console.log("Error",error)
        });
    return a
}


export function getFactorInestabilidad (){
    var a = axios.get(URL+port+"/factoresInestabilidad")
        .then(response => {
            return response.data
        }).catch(error  =>{
            console.log("Error",error)
        });
    return a
}

export function getClasificacion (){
    var a = axios.get(URL+port+"/clasificacion")
        .then(response => {
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