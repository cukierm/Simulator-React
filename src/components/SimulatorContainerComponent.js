import React, { Component } from 'react';
import '../App.css';
import SimulatorForm from './SimulatorFormComponent.js';
import FlexyJumbotron from './FlexyJumbotronComponent.js';


    function computeSampleProp (probSuccess, sampleSize) {
        let successes = 0;
        for (let i=0; i<sampleSize; i++) {
            if (Math.random() < probSuccess) {
                successes++;
            }      
        }
        return successes/sampleSize;
    };


    function computeSampleArray(pHat, ho, ha, n) {  
        let propCount = 0;
        let samplePropArray=[]
        if (ha === '>') {
            for (let i=0; i<50; i++) {
                let sampleProp = computeSampleProp(ho, n);
                samplePropArray.push(sampleProp);
                if (sampleProp >= pHat) { 
                    propCount++;
                }            
            }
        }
        else if (ha === '<') {
            for (let i=0; i<50; i++) {
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
        var infoArray = computeSampleArray(props.pHat, props.ho, props.ha, props.n);
        var samplePropArray = infoArray[0];
        var roundedSamplePropArray = samplePropArray.map(x => x.toFixed(2));
        var propCount = infoArray[1];
        var stringSampleProps = roundedSamplePropArray.join(', ');
        var samplePropDirectionText
        if (props.ha === '>') { samplePropDirectionText = 'greater than' }
        else if (props.ha === '<') { samplePropDirectionText = 'less than' }
        else {samplePropDirectionText = ''}
        return(
            <div id="results-container">
                <h3>Drawing 50 samples...</h3>
               <p>{stringSampleProps}</p>
               <p>The percentage of sample proportions {props.ha} or equal to {Number(props.pHat)} is {(propCount/50).toFixed(3)}.</p> 
                <p>The percentage  {propCount/50} is called a P-value. It is the approximate likelihood that a sample proportion will be {samplePropDirectionText} {Number(props.pHat)}, assuming that the population proportion is {Number(props.ho)}.</p>
            </div>
        );
    }
    else {
        return(
            <div id="results-container">
                <h3>Drawing 50 samples...</h3>          
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
            display: false,
            checked: false
            /*touched: {
                pHat: false,
                ho: false,
                ha: false,
                n: false
            }*/
        };
    };

    updateState = (newPHat, newHo, newHa, newN) => {
        this.setState(
        {pHat: newPHat, ho: newHo, ha: newHa, n: newN, display: true})
      }

    render() {
        return (
            <React.Fragment>
              <FlexyJumbotron titleText="Simulator" />
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <SimulatorForm updateState={this.updateState} />
                    </div>
                    <div className="col">
                        <Analysis pHat={this.state.pHat} ho={this.state.ho} ha={this.state.ha} n={this.state.n} display={this.state.display} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SimulatorContainer;