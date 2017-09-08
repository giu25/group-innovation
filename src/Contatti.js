import React, { Component } from 'react';
import {InputText} from 'primereact';
import './index.css'

class Contatti extends Component {
    constructor(props) {
        super(props);
        this.state = null
    }
    render () {
        return (
            <div>
                <Form />
                <AreaTesto />
            </div>
        )
    } 
}

export class AreaTesto extends Component {
        
    constructor(props) {
        super(props);
        this.state = null;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div className=" col-lg-6 areaMail">
                    <InputText placeholder={'Scrivi il tuo messaggio'} onChange={(e) => this.setState({value: e.target.value})}/>
            </div>
        )
    }
}


export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {basicValues: [], advancedValues: []};
    }

    customTemplate(item) {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="fa fa-user "></i>
            </div>
        );
    }

    render() {
        return (
            <div className="content-section implementation col-lg-6">
                <div className="content-section">
                    <div className="feature-intro">
                    </div>
                </div>

                <div className="content-section implementation anagrafica">
                    <InputText placeholder={'Nome'} onChange={(e) => this.setState({value: e.target.value})}/><br />
                    <InputText placeholder={'Cognome'} onChange={(e) => this.setState({value: e.target.value})}/><br />
                    <InputText placeholder={'Mail'} onChange={(e) => this.setState({value: e.target.value})}/>
                </div>
                
            </div>
        )
    }
}

export default Contatti ;