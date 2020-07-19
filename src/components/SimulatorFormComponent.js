import React, { Component } from 'react';
import { Button, Label, Col, FormGroup, Form, Input, Card, CardHeader, CardBody, FormFeedback } from 'reactstrap';
import '../App.css';

class SimulatorForm extends Component {
        constructor(props) {
            super(props)

            this.state = {
                pHat: null,
                ho: null,
                ha: null,
                n: null,
                numDraws: null,
                display: false,
                checked: false,
                touched: {
                    pHat: false,
                    ho: false,
                    ha: false,
                    n: false,
                    numDraws: false
                }
            }

            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }       

        validate(pHat, ho, ha, n, numDraws) {

            const errors = {
                pHat: '',
                ho: '',
                ha: '',
                n: '',
                numDraws: ''
            }

            if (this.state.touched.pHat) {
                if (!pHat) {
                    errors.pHat = 'Please enter the sample proportion';
                }
                else if (Number(pHat) > 1 || Number(pHat) < 0) {
                    errors.pHat = 'the sample proportion must be between 0 and 1';
                }

            }

            if (this.state.touched.ho) {
                if (!ho) {
                    errors.ho = 'Please enter a proportion for the null hypothesis';
                }
                
                else if (Number(ho) > 1 || Number(ho) < 0) {
                    errors.ho = 'this proportion should be between 0 and 1';
                }
            }

            if (this.state.touched.ha) {
                if(!ha) {
                    errors.ha = 'Please select a direction for the alternative hypothesis';
                }
            }

            if (this.state.touched.n) {
                if(!n) {
                    errors.n = 'Please enter the sample size';
                }
                else if (Number(n) < 0) {
                    errors.n = 'The sample size must be positive';
                }
                else if (Number(n) % 1 !== 0) {
                    errors.n = 'The sample size must be a whole number';
                }
            }

            if (this.state.touched.numDraws) {
                if(!numDraws) {
                    errors.n = 'Please enter the number of simulations';
                }
                else if (Number(n) < 0) {
                    errors.n = 'The number of simulations must be positive';
                }
                else if (Number(n) % 1 !== 0) {
                    errors.n = 'The number of simulations must be a whole number';
                }
            }

            return errors;

        }

        handleBlur = (field) => () => {
            this.setState({
                touched: {...this.state.touched, [field]: true}
            });
        }


    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
          [name]: value
        });
        
    }

    handleSubmit(event) {
        this.props.updateState(this.state.pHat, this.state.ho, this.state.ha, this.state.n, this.state.numDraws);
        console.log(JSON.stringify(this.state))
        event.preventDefault();
    }

    render () {

        const errors = this.validate(this.state.pHat, this.state.ho, this.state.ha, this.state.n, this.state.numDraws);
        
        const styles = {
            row: {
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '40px',
                fontSize: '20px'
            },
            label: {
                fontSize: '3'
            },
            button: {
                backgroundColor: '#0081AF'
            },
            buttonCol:{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center'
            },
        };

        return (
            <Card>
                <CardHeader>
                    <h3>Get Ready to Simulate!</h3>
                </CardHeader>
                <CardBody>
                    <div className="Row mt-3 offset-1">  
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row style={styles.row}>
                                <Col xs={2.5} className='pr-0 mr-0'> 
                                    <Label styles={styles.label} htmlFor="ho">Ho: &nbsp; p = </Label>
                                </Col>
                                <Col xs={3} className='pl-0 ml-1'>
                                    <Input type="text" id="ho" name="ho" 
                                        value={this.props.ho}
                                        invalid={errors.ho}
                                        onBlur={this.handleBlur('ho')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.ho}</FormFeedback>
                                </Col>  
                                <Col xs={2} className='pr-0 mr-0'>
                                <Label htmlFor="pHat">p&#770; = </Label>
                                </Col>
                                <Col xs={3} className='pl-0 ml-0'>
                                    <Input type="text" id="pHat" name="pHat"
                                        value={this.props.pHat}
                                        invalid={errors.pHat}
                                        onBlur={this.handleBlur('pHat')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.pHat}</FormFeedback>                                  
                                </Col>
                                
                                
                            </FormGroup>

                            <FormGroup row style={styles.row}>
                                <Col xs={5} className="pl-0">
                                Ha: 
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="ha" value="<" id="haLt" checked={this.state.ha === "<"} onChange={this.handleInputChange} />{' '}
                                        p &lt; {this.state.ho}
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="ha" value=">" id="haGt" checked={this.state.ha === ">"} onChange={this.handleInputChange} />{' '}
                                        p &gt; {this.state.ho}
                                    </Label>
                               
                                </FormGroup>
                                
                                </Col>
                                    <Col xs={2} className="px-0">
                                        <Label htmlFor="n">n = &nbsp;</Label>
                                    </Col>
                                    <Col xs={3} className="pl-0 ml-0">
                                    <Input type="text" id="n" name="n"
                                        value={this.props.n}
                                        invalid={errors.n}
                                        onBlur={this.handleBlur('n')}
                                        onChange={this.handleInputChange}
                                        className="float-right" />
                                    <FormFeedback>{errors.n}</FormFeedback>
                                    </Col>                          
                            </FormGroup>

                            <FormGroup row style={styles.row}>
                                <Col className="pl-0">
                                    <Label htmlFor="numDraws">Number of simulations:</Label>
                                    <Input type="text" name="numDraws" id="numDraws" 
                                    value={this.props.numDraws} 
                                    invalid={errors.numDraws}
                                    onBlur={this.handleBlur('numDraws')}
                                    onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.numDraws}</FormFeedback>
                                </Col>
                                <Col style={styles.buttonCol}>
                                    <Button type="submit" style={styles.button}>
                                        Go!
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>  
                </CardBody>
            </Card>
        );
    }
}    

export default SimulatorForm;