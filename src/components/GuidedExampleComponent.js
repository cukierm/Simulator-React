import React, { Component } from 'react';
import {Button, Form, Input, Label} from 'reactstrap';
import '../App.css';
import FlexyJumbotron from './FlexyJumbotronComponent.js';

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

class GuidedExample extends Component {

    render() {
        return(
            <React.Fragment>
                <FlexyJumbotron titleText={'Guided Example'} />
                <PepsiChallenge />
                <Proportions />
                <NullHypothesis />
                <AlternativeHypothesis />
                <SampleSize />
                <Summary />
            </React.Fragment>
        );
    }
}

export default GuidedExample;


