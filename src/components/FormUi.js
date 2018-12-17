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
        console.log(event.target.value);

    };
    componentDidMount() {
        var {data} = this.props;
        this.callService();
        //this.setState({data})
    }

    async callService (){
        var {service}  = this.props;
        var data = await  service();
        this.setState({data});
    }
    render() {
        var {id,menuItems,s} = this.props.options;
        var {data} = this.state ;
        if ( data !== undefined){
            var itemList = Object.keys(data).map((index) => {
                return  <MenuItem key={index} value={data[index][id]}>{data[index]["tipo"]}</MenuItem>;
            })
        }
        return (
            <FormControl className={"col s"+s}>
                <InputLabel htmlFor="age-simple">{this.props.name}</InputLabel>
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
