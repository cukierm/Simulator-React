import React, { Component } from 'react';
import '../App.css';
import SimulatorForm from './SimulatorFormComponent.js';
import FlexyJumbotron from './FlexyJumbotronComponent.js';
import Analysis from './AnalysisComponent.js';
import { computeSampleArray } from '../helpers.js';


class SimulatorContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pHat: null,
            ho: null,
            ha: null,
            n: null,
            numDraws: null,
            display: false,
            checked: false,
            }
        };

    updateState = (newPHat, newHo, newHa, newN, newNumDraws) => {
        this.setState(
        {pHat: newPHat, ho: newHo, ha: newHa, n: newN, numDraws: newNumDraws, display: true});
      }

    render() {
        var infoArray=(computeSampleArray(this.state.pHat, this.state.ho, this.state.ha, this.state.n, this.state.numDraws));

        return (
            <div style={{backgroundColor: "#F4EDEA"}}>
              <FlexyJumbotron titleText="Simulator" />
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <SimulatorForm updateState={this.updateState} />
                    </div>
                    <div className="col">
                        <Analysis pHat={this.state.pHat} ho={this.state.ho} ha={this.state.ha} n={this.state.n} numDraws={this.state.numDraws} display={this.state.display} infoArray={infoArray}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SimulatorContainer;