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

class Analysis extends Component {
    render() {
        return(
            <div id="results-container">
                <p>Drawing 50 samples...</p>
            </div>
        );
    }
}

class SimulatorContainer extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <SimCard />
                </div>
                <div className="col">
                    <Analysis />
                </div>
            </div>
        );
    }
}

export default SimulatorContainer;