import React, { Component } from 'react';
import { Button, Label, Col, FormGroup, Form, Input, Card, CardHeader, CardBody } from 'reactstrap';
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
                checked: false
                /*touched: {
                    pHat: false,
                    ho: false,
                    ha: false,
                    n: false
                }*/
            }

            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
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
                                        onChange={this.handleInputChange} />
                                </Col>  
                                <Col xs={2} className='pr-0 mr-0'>
                                <Label htmlFor="pHat">p&#770; = </Label>
                                </Col>
                                <Col xs={3} className='pl-0 ml-0'>
                                    <Input type="text" id="pHat" name="pHat"
                                        value={this.props.pHat}
                                        onChange={this.handleInputChange} />
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
                                    <Col xs={3}>
                                    <Input type="text" id="n" name="n"
                                        value={this.props.n}
                                        onChange={this.handleInputChange} />
                                    </Col>                          

                            </FormGroup>
                            <FormGroup row style={styles.row}>
                                <Col className="pl-0">
                                    <Label htmlFor="numDraws">Number of simulations:</Label>
                                    <Input type="text" name="numDraws" id="numDraws" value={this.props.numDraws} onChange={this.handleInputChange} />
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