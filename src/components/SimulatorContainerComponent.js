import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import '../App.css';
import SimulatorForm from './SimulatorFormComponent.js';

class SimCard extends Component {
    render() {
        return(
            <Card>
                <CardHeader>
                    <h3>Get Ready to Simulate!</h3>
                </CardHeader>
                <CardBody>
                    <SimulatorForm />
                </CardBody>
            </Card>
        );
    }
}

function Analysis(props) {
    console.log(`props are ${JSON.stringify(props)}`) 
        return(
            <div id="results-container">
               <p>Look at me printing {props.pHat}! and {props.ho}! and {props.ha}! {props.n}!</p>  
                
            </div>
        );
}

class SimulatorContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pHat: null,
            ho: null,
            ha: null,
            n: null,
            touched: {
                pHat: false,
                ho: false,
                ha: false,
                n: false
            }
        };
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <SimCard />
                </div>
                <div className="col">
                    <Analysis pHat={this.state.pHat} ho={this.state.ho} ha={this.state.ha} n={this.state.n} />
                </div>
            </div>
        );
    }
}

export default SimulatorContainer;