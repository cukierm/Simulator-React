import React, { Component } from 'react';
import '../App.css';
import SimulatorForm from './SimulatorFormComponent.js';
import FlexyJumbotron from './FlexyJumbotronComponent.js';
import { computeSampleProp } from '../helpers.js';
import Histogram from './testHistogramComponent.js';

    function computeSampleArray(pHat, ho, ha, n, numDraws) {  
        let propCount = 0;
        let samplePropArray=[]
        if (ha === '>') {
            for (let i=0; i<numDraws; i++) {
                let sampleProp = computeSampleProp(ho, n);
                samplePropArray.push(sampleProp);
                if (sampleProp >= pHat) { 
                    propCount++;
                }            
            }
            console.log([pHat, ho, ha, n, numDraws]);
            console.log(propCount);
        }
        else if (ha === '<') {
            for (let i=0; i<numDraws; i++) {
                let sampleProp = computeSampleProp(ho, n);
                samplePropArray.push(sampleProp);
                if (sampleProp <= pHat) { 
                    propCount++;    
                }
            }
        };   
        return [samplePropArray, propCount];
    };


function Analysis(props) {
    if (props.display) {

        console.log('this is from Analysis: ' + [props.pHat, props.ho, props.ha, props.n, props.numDraws]);
        var infoArray = computeSampleArray(props.pHat, props.ho, props.ha, props.n, props.numDraws);
        var samplePropArray = infoArray[0];
        var roundedSamplePropArray = samplePropArray.map(x => x.toFixed(2));
        console.log('this is infoArray', infoArray);
        var propCount = infoArray[1];
        var stringSampleProps = roundedSamplePropArray.join(', ');
        var samplePropDirectionText

        if (props.ha === '>') { samplePropDirectionText = 'greater than' }
        else if (props.ha === '<') { samplePropDirectionText = 'less than' }
        else {samplePropDirectionText = ''}
        return(
            <div id="results-container">
                <h3>Drawing samples...</h3>
               <p>{stringSampleProps}</p>
               <p>{100*((propCount/props.numDraws).toFixed(3))}% of these sample proportions are {samplePropDirectionText} or equal to {Number(props.pHat)}.</p> 
                <p>The proportion  {(propCount/props.numDraws).toFixed(3)} is called a P-value. It is the approximate likelihood that a sample proportion will be {samplePropDirectionText} {Number(props.pHat)}, assuming that the population proportion is {Number(props.ho)}.</p>
                <p>You can also think of the P-value as the proportion of purple area in the histogram below. The histogram is made of all {props.numDraws} sample proportions. If the histogram has horizontal bars, hover over them to see each proportion.</p>
                <Histogram samplePropArray={samplePropArray} pHat={props.pHat} ha={props.ha}/>
            </div>
        );
    }
    else {
        return(
            <div id="results-container">
                <h3>Drawing samples...</h3>          
            </div>
        );
    }
}

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
            checked: false
            }
        };

    updateState = (newPHat, newHo, newHa, newN, newNumDraws) => {
        this.setState(
        {pHat: newPHat, ho: newHo, ha: newHa, n: newN, numDraws: newNumDraws, display: true})
      }

    render() {
        return (
            <div style={{backgroundColor: "#F4EDEA"}}>
              <FlexyJumbotron titleText="Simulator" />
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <SimulatorForm updateState={this.updateState} />
                    </div>
                    <div className="col">
                        <Analysis pHat={this.state.pHat} ho={this.state.ho} ha={this.state.ha} n={this.state.n} numDraws={this.state.numDraws} display={this.state.display} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SimulatorContainer;