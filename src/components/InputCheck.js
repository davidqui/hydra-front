import React,{Component} from 'react'

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export class  InputCheck extends Component{
    state = {
        "check": false,
    };

    handleChange =  (event) => {
        this.setState({ "check": event.target.checked });
        console.log(event.target.checked);
        this.props.extract("accesoPrimario",event.target.checked)
    };
    render(){
        var {name,s} = this.props;
        return(
            <FormControl component="fieldset">

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.check}
                                onChange={event => this.handleChange(event)}
                                value="gilad"
                                color="secondary"
                            />
                        }
                        label={this.props.name}
                    />
                </FormGroup>
            </FormControl>
        )
    }
}


