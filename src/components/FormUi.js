import React ,{Component} from "react";

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class SelectorUI extends  Component{
    state = {
        "age" : 0
    };
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value)
    };
    render() {
        var {menuItems} = this.props;
        if (menuItems){
            var itemList = Object.keys(menuItems).map((index) => {
                return  <MenuItem key={index} value={index}>{menuItems[index]}</MenuItem>;
            })
        }
        return (
            <FormControl className={"col s8"}>
                <InputLabel htmlFor="age-simple">{this.props.name}</InputLabel>
                <Select onChange={this.handleChange}>
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
