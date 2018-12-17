import  React,{Component} from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import ListItemText from '@material-ui/core/ListItemText';

class MultiSelectoCheck extends Component {
    constructor(){
        super();
            this.state = {
                "name":[],
                "data":""
            };
    }
    handleChange = event => {
        this.setState({ name: event.target.value });
        console.log(event.target.value);
        var {id} = this.props.options;
        this.props.extract(id,event.target.value)
    };

    componentDidMount() {
        console.log(this.props);
        this.callService ()
    }

    async callService (){
        var {service}  = this.props;
        var data = await  service();
        console.log(data);
        this.setState({data});

    }

    render() {
        var {name,data} = this.state;
        var {id,descripcion,s} = this.props.options;
        //const { classes } = this.props;

        if ( data !== undefined){
            var itemList = Object.keys(data).map((index) => {
                var campo = "nombre"in  data[index] ? "nombre": "tipo";
                return  (
                    <MenuItem key={index} value={data[index][id]}   >
                        <ListItemText primary={data[index][campo]} />
                        {/*{poner chulitos}*/}
                    </MenuItem>
                )
            })
        }

        return(
            <FormControl className={"col s"+s}>
                <InputLabel htmlFor="select-multiple-checkbox">{descripcion}</InputLabel>
                <Select
                    multiple
                    value={this.state.name}
                    onChange={this.handleChange}
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={selected => selected.join(', ')}
                >
                    {itemList}
                </Select>
            </FormControl>
        )
    }
}

export  default MultiSelectoCheck;