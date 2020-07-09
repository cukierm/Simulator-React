import React, { Component } from 'react';
import '../App.css';



/*    <header className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="row my-auto">
                <div className="col d-flex justify-content-center">
                    <h1>Guided Example</h1>
                </div>
            </div>
        </div>
    </header>  
*/

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

function Proportions(props) {
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
                    <form id="pHatForm">
                        <p id="pHatInstructions">In words, the text below says, "the sample proportion equals..."</p>
                        <p id="pHatInstructions2">Fill in the ..., then press the Check button. </p>
                        <div className="form-group form-inline">
                            <label htmlFor="pHatTutorial"> p&#770; =  &nbsp; </label>
                            <input type="text" className="form-control" id="pHatTutorial"/>
                        </div>
                        <button type="submit" className="btn btn-info ml-auto" id="pHatButton">Check</button>
                    </form> 
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
    );
    }

    function NullHypothesis(props) {
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
                    <form id="hoForm">
                        <p>In words, the text below says, "The Null Hypothesis states that the population proportion is ..."</p>
                        <p>Fill in the ..., then press the Check button." </p>
                        <div className="form-group form-inline">
                            <label htmlFor="hoTutorial">Ho: p = &nbsp;</label>
                            <input type="text" className="form-control" id="hoTutorial"/>
                        </div>
                        <button type="submit" className="btn btn-info" id="HoButton">Check</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
        );
    }

    function AlternativeHypothesis(props) {
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
                        <p>Choose the statement that correctly describes the alternative hypothesis. Then press the "Check" button.</p>
                        <div className="form-group form-check">
                            <input type="radio" className="form-check-radio" name="haRadio" id="haLtTutorial" value="<"/>
                            <label htmlFor="haLt" className="form-check-label">p {'<'} 0.5 &nbsp;</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="radio" className="form-check-radio" name="haRadio" id="haGtTutorial" value=">"/>
                            <label htmlFor="haGt" className="form-check-label">p &gt; 0.5 &nbsp;</label>
                        </div>
                        <button type="submit" className="btn btn-info" id="HaButton">Check</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
        );
    }

    function SampleSize(props) {
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
                            <label htmlFor="nTutorial">n = &nbsp;</label>
                            <input type="text" className="form-control" id="nTutorial"/>
                        </div>
                        <button type="submit" className="btn btn-info" id="nButton">Check</button>
                    </form> 
                </div>  
            </div>  
        </div>
    </div>
    </React.Fragment>
        );
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


