import React, { Component } from 'react';
import {Button, Form, Input, Label} from 'reactstrap';
import '../App.css';
import FlexyJumbotron from './FlexyJumbotronComponent.js';
import { computeSampleProp } from '../helpers';

function PepsiChallenge(props) {
    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3>The Pepsi Challenge</h3>
                            </div>
                            <div className="card-body">
                                Many, many years ago, Pepsi had an ad campaign where people compared Coke to Pepsi in a blind test. The participants, some loyal Coke drinkers, were often suprised to find that they preferred the Pepsi. The ads claimed, "all across America, more people pick Pepsi, time after time."                     
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div id="text-container">
                            <h5>In a recent Pepsi challenge, 15 out of 25 randomly chosen people preferred Pepsi to Coke.</h5>
                            <h5>Do you think this is good evidence that most people do?</h5>
                        </div>  
                    </div>   

                </div>
            </div>
        </React.Fragment>
    );
}

class Proportions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pHat: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.pHatCheck = this.pHatCheck.bind(this);
    }

    handleInputChange(event) {
        this.setState({pHat: event.target.value});
    }  

    pHatCheck(event) {
        if (this.state.pHat == .6) {
            alert("Correct! You are ready to move on.");
        }
        else if (this.state.pHat >= 0 && this.state.pHat <= 1) {
            alert("Try again. Reread the paragraph to find the sample proportion.");
        }
        else if (this.state.pHat) {
            alert("Try again. A proportion needs to be a number between 0 and 1.");}

        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <h3>The Sample Proportion and the Population Proportion</h3>
                                </div>
                                <div className="card-body">
                                    <p>In our Pepsi Challenge, 15/25 = 60% of the people preferred Pepsi. As a proportion between 0 and 1, that's 0.6. This number is called the <b>sample proportion</b>, or p&#770;.</p>
                                    
                                    <p>The point of the ad is not <em>really</em> that most people in the Pepsi Challenge preferred Pepsi. For an American ad, we are supposed to think that most people in the <em>United States</em> prefer Pepsi to coke. In other words, Pepsi wants to convince us of something about the <b>population proportion</b>, called p.</p>
                                    
                                    <p>Now, nobody is trying to argue that exactly 60% of people in the US prefer Pepsi to Coke. Why? If we repeated the Pepsi Challenge, we might just as well get 14 or 16 or 17. What the folks at Pepsi want us to believe is that <em>most people</em> prefer Pepsi to Coke.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col my-auto">
                            <div id="text-container">
                                <Form>
                                    <p>In words, the text below says, "the sample proportion equals..."</p>
                                    <p>Fill in the ..., then press the Check button. </p>
                                    <div className="form-group form-inline">
                                        <Label htmlFor="pHatTutorial"> p&#770; =  &nbsp; </Label>
                                        <Input type="text" className="form-control" onChange={this.handleInputChange} value={this.state.pHat} />
                                    </div>
                                    <Button type="submit" onClick={this.pHatCheck} style={{backgroundColor:"#0081AF"}}>Check</Button>
                                </Form> 
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

class NullHypothesis extends Component {

    constructor(props) {
        super(props);
        this.state={
            ho: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.hoCheck = this.hoCheck.bind(this);
    }

    handleInputChange(event) {
        this.setState({ho: event.target.value});
    }  

    hoCheck(event) {
        if (this.state.ho == .5) {
            alert("Correct! You are ready to move on.");
        }
        else if (this.state.ho >= 0 && this.state.ho <= 1) {
            alert("Try again. Reread the paragraph to find the population proportion for the null hypothesis.");
        }
        else {alert("Try again. A proportion needs to be a number between 0 and 1.");}

        event.preventDefault();
    }

    render () {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 my-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h3>The Null Hypothesis</h3>
                                </div>
                                <div className="card-body">
                                    <p>Suppose Coke and Pepsi taste so similar that people can’t tell them apart. Then we’d expect that 50% of people prefer Pepsi. </p>
                                    
                                    <p>If this is true, the Pepsi Challenge didn't mean anything: the majority's preference for Pepsi was just a coincidence. This scenario is called the <b>null hypothesis</b>, or Ho. </p>

                                    <p>In symbols, the null hypothesis says that p = .05. That is, "the population proportion is equal to 50%"</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div id="text-container">
                                <Form >
                                    <p>In words, the text below says, "The Null Hypothesis states that the population proportion is ..."</p>
                                    <p>Fill in the ..., then press the Check button." </p>
                                    <div className="form-group form-inline">
                                        <Label htmlFor="hoTutorial">Ho: p = &nbsp;</Label>
                                        <Input type="text" className="form-control" onChange={this.handleInputChange} value={this.state.ho}/>
                                    </div>
                                    <Button type="submit" onClick={this.hoCheck} style={{backgroundColor:"#0081AF"}}>Check</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


class AlternativeHypothesis extends Component {

    constructor(props) {
        super(props);
        this.state={
            ha:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.haCheck = this.haCheck.bind(this);
    }

    handleInputChange(event) {
        this.setState({ha: event.target.value});
    }

    haCheck(event) {
        if (this.state.ha == '>') {
            alert("Correct! You are ready to move on.");
        }
        else if (this.state.ha == '<') {
            alert("Nope! it's the other way. Pepsi thinks that MORE than 50% of Americans prefer Pepsi.");
        }
        else {
            alert("Please select one of the buttons.");
        }
        event.preventDefault();
    }
    
    render () {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 my-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h3>The Alternative Hypothesis</h3>
                                </div>
                                <div className="card-body">
                                    <p>But what Pepsi believes - and what they want you to believe - is that more than half of the US population prefers Pepsi. In other words, they believe p {'>'} 0.5. This belief is called the <b>alternative hypothesis</b>, or Ha. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div id="text-container">
                                <form id="haForm"> 
                                    <p>Choose the statement that correctly describes the alternative hypothesis. Then press the "Check" Button.</p>
                                    <div className="form-group form-check">
                                        <Input type="radio" className="form-check-radio" name="ha" id="haLtTutorial" checked={this.state.ha === "<"} value={"<"} onChange={this.handleInputChange}/>
                                        <Label htmlFor="haLt" className="form-check-label">p {'<'} 0.5 &nbsp;</Label>
                                    </div>
                                    <div className="form-group form-check">
                                        <Input type="radio" className="form-check-radio" name="ha" id="haGtTutorial" checked={this.state.ha === ">"} value={">"} onChange={this.handleInputChange}/>
                                        <Label htmlFor="haGt" className="form-check-label">p &gt; 0.5 &nbsp;</Label>
                                    </div>
                                    <Button type="submit" onClick={this.haCheck} style={{backgroundColor:"#0081AF"}}>Check</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }  
}     

    class SampleSize extends Component {
        constructor(props) {
            super(props);
            this.state={
                n:''
            }

            this.handleInputChange = this.handleInputChange.bind(this);
            this.nCheck = this.nCheck.bind(this);
        }

        handleInputChange(event) {
            this.setState({n: event.target.value});
        }

        nCheck(event) {
            if (this.state.n == 25) {
                alert("Correct! You are ready to move on.");
            }
            else if (this.state.n >= 0 && this.state.n <= 1) {
                alert("The sample size needs to be a whole number. In this case, it is the number of people who took the Pepsi Challenge.");
            }
            else {alert("Try again. The sample size should be the number of people who took the Pepsi Challenge.");}

            event.preventDefault();
        }

        render() {
            return (
                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>The Sample Size</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>If 3 out of 5 people in a smaller Pepsi Challenge preferred Pepsi to Coke, how confident would you feel that more than half the population prefers Pepsi?</p>

                                        <p>If 600 out of 1000 peple in a really big Pepsi Challenge preferred Pepsi to Coke, how confident would you feel?</p>

                                        <p>You can see that the size of a sample influences the conclusions we can draw about the population. We use n as the symbol for sample size. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div id="text-container">
                                    <form id="nForm">  
                                        <p>In words, the text below says, "the sample size is..."</p>  
                                        <p>Fill in the ..., then press the Check button.</p>              
                                        <div className="form-group form-inline">
                                            <Label htmlFor="nTutorial">n = &nbsp;</Label>
                                            <Input type="text" className="form-control" onChange={this.handleInputChange} value={this.state.n}/>
                                        </div>
                                        <Button type="submit" onClick={this.nCheck} style={{backgroundColor:"#0081AF"}}>Check</Button>
                                    </form> 
                                </div>  
                            </div>  
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }

  function Summary(props) {

    return(
    <React.Fragment>
    <div className="container">
        <div className="row">
            <div className="col-md-8  mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h3>Summary, in Symbols</h3>
                    </div>
                    <div className="card-body">
                        <h2>Ho: p = 0.5</h2>
                        <h2>Ha: p {'>'} 0.5</h2>
                        <h2>p&#770; = 0.6</h2>
                        <h2>n = 25</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
    );
  }


  class DrawingASample extends Component {

    constructor(props) {
        super(props)
        this.state={
            sampleProp: '',
            samplePropArray: []
        }
        this.drawOneSample=this.drawOneSample.bind(this);
    }

    drawOneSample() {
        let newSampleProp = computeSampleProp(.6, 25);
        this.setState({sampleProp: newSampleProp});
        this.props.updateSampleProp(newSampleProp);
        console.log(newSampleProp);
    }
    
    render() {
        
        const center = {
            display: 'flex',
            justifyContent: 'center',
            fontSize: '30px'
        }

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Drawing a Sample</h3>
                                </div>
                                <div className="card-body">
                                    <p>We imagine a world in which the null hypothesis is true: that is, a world in which Pepsi and Coke have such a similar taste that it's 50/50 which beverage each person prefers.</p>

                                    <p>Imagine you have a very large number of slips of paper in a hat. Half say "Coke" and half say "Pepsi." To simulate the Pepsi Challenge, you draw 25 slips of paper. This is a <b>sample</b>.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div id="text-container">
                                <p>Press the button below to draw the 25 slips of paper:</p>
                                <Button style={{backgroundColor:"#0081AF"}} onClick={this.drawOneSample}>Draw One Sample</Button>
                                <p>The proportion of the 25 slips of paper that said "Pepsi" was:</p>
                                <p style={center}>{this.state.sampleProp}</p>
                            </div>  
                        </div>  
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
  
class RepeatedSamples extends Component {
       
    constructor(props) {
        super(props);
        this.state={samplePropArray:[]}
        this.drawRepeatedSamples=this.drawRepeatedSamples.bind(this);
    }

    drawRepeatedSamples() {
        let samplePropArray = this.state.samplePropArray
        let sampleProp = computeSampleProp(.6, 25);
        samplePropArray.push(sampleProp);
        this.setState({samplePropArray:samplePropArray});
        this.props.updateSamplePropArray(samplePropArray);
        console.log(samplePropArray);
        console.log(JSON.stringify(this.state));
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Drawing Repeated Samples</h3>
                                </div>
                                <div className="card-body">
                                    <p>Even though half of the papers in the hat say "Pepsi," your sample wasn't 50% Pepsi. One reason is that the number of papers you drew, 25, is not divisible by 2! But a deeper reason is that things don't always work out exactly according to probability. This time, you got {this.props.oldSampleProp}, but another time you might get a different proportion.</p>

                                    <p>Keep pressing the button to make a list of 10 simulated sample proportions. (Each represents the proportion of the 25 slips you drew that say "Pepsi").</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div id="text-container">
                                <p>Keep pressing the button until you have 10 sample proportions. Each press of the button represents drawing 25 slips of paper and calculating the proportion that say "Pepsi."</p>
                                <Button style={{backgroundColor:"#0081AF"}} onClick={this.drawRepeatedSamples}>Draw One Sample</Button>
                                <p>List of sample proportions: {this.state.samplePropArray.join(', ')}</p>
                                <p></p>
                            </div>  
                        </div>  
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function StatisticalSignificance(props) {

    return(
    <React.Fragment>
    <div className="container">
        <div className="row">
            <div className="col-md-8  mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h3>Thinking about Statistical Significance</h3>
                    </div>
                    <div className="card-body">
                        <p>In the actual Pepsi Challenge, 15 out of 25 people preferred Pepsi, so the real sample proportion was 0.6. Compare this to the list of simulated sample proportions you have above. Does the 0.6 seem out of line? Or does it seem like something that would just happen sometimes? </p>

                        <p>If you think the .6 is too unusual to happen if only half the US population prefers Pepsi, then you are rejecting the null hypothesis: you conclude that the true proportion of Americans who prefer Pepsi is actually greater than 0.6. And if you think the 0.6 seems reasonable even the preference of the American public is 50/50, then you are failing to reject the null hypothesis: the 15/25 people who preferred Pepsi isn't good enough evidence to conclude that more people really do prefer Pepsi.</p>

                        <p>But what <em>should</em> we believe? Many statisticians say that if there is less than a 5% chance that our sample proportion of .6 would occur, we should reject the null hypothesis. This means concluding that the proportion of Americans who prefer Pepsi is actually more than 0.5. We don't necessarily believe that 60% of Americans prefer Pepsi:  maybe it's 55% or 63% or something else, just that the proportion is some value closer to 0.6. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
    );
  }

  class PValue extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <h3>The P-value</h3>
                                </div>
                                <div className="card-body">
                                    <p>Here's how we can approximate that chance. Count how many of your 10 simulated sample proportions were greater than or equal to 0.6. Then divide by 10. This number is called a P-value. P for  the <u>P</u>robability (a sample proportion will be {'>= .6'}, given that the population proportion is 0.5).</p>

                                    <p>10 simulated sample proportions is really too small -- you might get a very different P-value if you did the 10 simulations a different time. But if you use 50, 100, or, better yet 1000 simulations, then you can calculate the P-value much more accurately.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div id="text-container">
                                <p>Here are your sample proportions from above:</p>
                                <p>{this.props.proportionList.join(', ')}</p>
                            </div>  
                        </div>  
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
class GuidedExample extends Component {

    constructor(props) {
        super(props)
        this.state={
            sampleProp: "",
            samplePropArray: []
            }
        }

        updateSampleProp = (newSampleProp) => {
            this.setState({sampleProp: newSampleProp});
            setTimeout(console.log('from updateSampleProp:' + JSON.stringify(this.state)), 100000);
        }

        updateSamplePropArray = (newSamplePropArray) => {
            this.setState({samplePropArray: newSamplePropArray});
        }

    render() {
        return(
            <div style={{backgroundColor: '#F4EDEA'}}>
                <FlexyJumbotron titleText={'Guided Example'} />
                <PepsiChallenge />
                <Proportions />
                <NullHypothesis />
                <AlternativeHypothesis />
                <SampleSize />
                <Summary />
                <DrawingASample updateSampleProp={this.updateSampleProp}/>
                <RepeatedSamples updateSamplePropArray={this.updateSamplePropArray} oldSampleProp={this.state.sampleProp}/>
                <StatisticalSignificance />
                <PValue proportionList={this.state.samplePropArray}/>
            </div>
        );
    }
}

export default GuidedExample;


