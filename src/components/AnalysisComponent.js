import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../App.css';
import Histogram from './HistogramComponent.js';

class Analysis extends Component {

    constructor(props) {
        super(props);
        this.state = {displayAllSampleProps: false}
        this.displaySamplePropsToggle = this.displaySamplePropsToggle.bind(this);
    }

    displaySamplePropsToggle = (event) => {
        this.setState({displayAllSampleProps: !this.state.displayAllSampleProps});
        event.preventDefault();
    }


    render () {
        const numDisplay = 16;

        if (this.props.display) {
            var propCount = this.props.infoArray[1];
            
            var samplePropArray = this.props.infoArray[0];
            var roundedSamplePropArray = samplePropArray.map(x => x.toFixed(2));
            var stringSampleProps = (this.props.numDraws <= numDisplay || this.state.displayAllSampleProps) ? roundedSamplePropArray.join(', ') : roundedSamplePropArray.slice(0,numDisplay).join(', ') + '...';

            var samplePropDirectionText
            if (this.props.ha === '>') { samplePropDirectionText = 'greater than' }
            else if (this.props.ha === '<') { samplePropDirectionText = 'less than' }
            else {samplePropDirectionText = ''}

            const renderButton = (numDraws) => {
                if(numDraws >= numDisplay) {
                    var buttonText = (this.state.displayAllSampleProps) ? 'SEE LESS' : 'SEE MORE';
                    return <Button 
                                onClick={this.displaySamplePropsToggle}
                                size='sm'
                                style={{
                                    backgroundColor: '#F4EDEA',
                                    color: '#0081AF',
                                    borderWidth: '0px'
                                }}
                            >                                       
                                {buttonText}
                            </Button>
                }
            }
            
            return(
                <div id="results-container">
                    <h3>Here are {this.props.numDraws} Sample Proportions:</h3>
                    <p>{stringSampleProps} {renderButton(this.props.numDraws)}</p>
                    <p>{(100*(propCount/this.props.numDraws)).toFixed(1)}% of these sample proportions are {samplePropDirectionText} or equal to {Number(this.props.pHat)}.</p> 
                    <p>The proportion  {(propCount/this.props.numDraws).toFixed(3)} is called a P-value. It is the approximate likelihood that a sample proportion will be {samplePropDirectionText} {Number(this.props.pHat)}, assuming that the population proportion is {Number(this.props.ho)}.</p>
                    <p>You can also think of the P-value as the proportion of purple area in the histogram below. The histogram is made of all {this.props.numDraws} sample proportions. If the histogram has horizontal bars, hover over them to see each proportion.</p>
                    <Histogram samplePropArray={samplePropArray} pHat={this.props.pHat} ha={this.props.ha} numDraws={this.props.numDraws}/>
                </div>
            );

        }   
        else {
            return(
                <div id="results-container">
                    <h3>Sample Proportions Will Go Here...</h3>          
                </div>
            );
        }
    }
}


export default Analysis;