import React, { Component } from 'react';
import '../App.css';
import SimulatorForm from './SimulatorFormComponent.js';
import FlexyJumbotron from './FlexyJumbotronComponent.js';
import { computeSampleProp } from '../helpers.js';


   /* function computeSampleProp (probSuccess, sampleSize) {
        let successes = 0;
        for (let i=0; i<sampleSize; i++) {
            if (Math.random() < probSuccess) {
                successes++;
            }      
        }
        return successes/sampleSize;
    };
*/

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
        var propCount = infoArray[1];
        var stringSampleProps = roundedSamplePropArray.join(', ');
        var samplePropDirectionText
        console.log(infoArray);
        if (props.ha === '>') { samplePropDirectionText = 'greater than' }
        else if (props.ha === '<') { samplePropDirectionText = 'less than' }
        else {samplePropDirectionText = ''}
        return(
            <div id="results-container">
                <h3>Drawing samples...</h3>
               <p>{stringSampleProps}</p>
               <p>The percentage of sample proportions {props.ha} or equal to {Number(props.pHat)} is {(propCount/props.numDraws).toFixed(3)}.</p> 
                <p>The percentage  {(propCount/props.numDraws).toFixed(3)} is called a P-value. It is the approximate likelihood that a sample proportion will be {samplePropDirectionText} {Number(props.pHat)}, assuming that the population proportion is {Number(props.ho)}.</p>
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
            /*touched: {
                pHat: false,
                ho: false,
                ha: false,
                n: false
            }*/
        };
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
                    <div className="col-lg-4 col-sm-6">
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