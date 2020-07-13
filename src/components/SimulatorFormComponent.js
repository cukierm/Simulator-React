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
        this.props.updateState(this.state.pHat, this.state.ho, this.state.ha, this.state.n);
        event.preventDefault();
    }

    render () {
        return (
            <Card>
                    <CardHeader>
                        <h3>Get Ready to Simulate!</h3>
                    </CardHeader>
                    <CardBody>
                    <div className="row mt-3 offset-1">  
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="pHat">p&#770; = &nbsp;</Label>
                                <Col xs={3}>
                                    <Input type="text" id="pHat" name="pHat"
                                        value={this.props.pHat}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="ho">Ho: p = &nbsp;</Label>
                                <Col xs={3}>
                                    <Input type="text" id="ho" name="ho" 
                                        value={this.props.ho}
                                        onChange={this.handleInputChange} />
                                </Col>                        
                            </FormGroup>
                            <FormGroup>
                            <p>Ha: </p>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="ha" value="<" id="haLt" checked={this.state.ha === "<"} onChange={this.handleInputChange} />{' '}
                                        p &lt;
                                    </Label>
                                </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="ha" value=">" id="haGt" checked={this.state.ha === ">"} onChange={this.handleInputChange} />{' '}
                                        p &gt;
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="n">n = &nbsp;</Label>
                                <Col xs={4}>
                                    <Input type="text" id="n" name="n"
                                        value={this.props.n}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit">
                                        Go!
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>  
                </CardBody>
                </Card>
        )
    }
}    

export default SimulatorForm;