import React ,{Component} from "react";

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class SelectorUI extends  Component{
    constructor(){
        super();
        this.state = {
            "data": undefined,
            "sel":"none"
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.setState({ "sel": event.target.value });

        var {id}  =  this.props.options
        var idTipoDoc = event.target.value;
        this.props.extract(id,idTipoDoc);
    };
    componentDidMount() {
        var {data} = this.props;
        this.callService();
        //this.setState({data})
        console.log(this.props)
    }

    async callService (){
        var {service}  = this.props;
        var data = await  service();
        console.log(data);
        this.setState({data});
    }
    render() {
        var {id,descripcion,s} = this.props.options;
        var {data} = this.state ;


        if ( data !== undefined){
            var itemList = Object.keys(data).map((index) => {
                // console.log("nombre"in  data[index]);
                // console.log(data[index][id]);
                // console.log(id);
                var campo = "nombre"in  data[index] ? "nombre": "tipo";
                // console.log(data[index][campo]);
                return  <MenuItem key={index} value={data[index][id]}>{data[index][campo]}</MenuItem>;
            })
        }
        return (
            <FormControl className={"col s"+s}>
                <InputLabel htmlFor="age-simple">{descripcion}</InputLabel>
                <Select onChange={this.handleChange}  value={this.state.sel}>
                    <MenuItem value="" disabled>
                        <em>Selecione una Opcion</em>
                    </MenuItem>
                    {itemList}
                </Select>
            </FormControl>
        )
    }
}

export  default SelectorUI;
