import React, {Component} from 'react';
import {ProgressBar} from 'primereact';
import './index.js';

import '../node_modules/primereact/resources/primeng.min.css';
import '../node_modules/primereact/resources/themes/omega/theme.css';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = null
    }
    render () {
        return (
            <div>
                <ProgressBarProva percentage={this.props.percentage}/>
            </div>
        )
    } 
}

export class ProgressBarProva extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({step: this.state.step +1});
            if(this.state.step > 9) {
                clearInterval(this.interval);
            }
        }, 500);
    }

    render() {
        return (
            <div>
                <div className="content-section implementation">
                    <ProgressBar value={this.props.percentage / 10 * this.state.step }></ProgressBar>
                </div>
            </div>
        );
    }
}

export default Project ;

