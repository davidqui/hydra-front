import tipoDoc from "../assets/dummyInfo/tipoDoc.json"
import axios from 'axios';

const URL  = "http://localhost";
const port = ":9394";

/**
 *
 * @returns {Promise<AxiosResponse<any> | never>}
 * GET SERVICES para todos los enpoindts que poblnan los campos de la
 * vista HydraSearch/upload.js
 */

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

/**
 *
 * @param data
 * Servicio POST para  el formulario en la vista
 *  vista HydraSearch/upload.
 */


export function postForm(formData) {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    //axios.post(URL+port+'/save', form)
    axios.post(URL+port+'/transaccion/save', formData, config)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}