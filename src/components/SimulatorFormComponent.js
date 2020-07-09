import React, { Component } from 'react';
import { Button, Label, Col, FormGroup, Form, Input } from 'reactstrap';
import '../App.css';


class SimulatorForm extends Component {
        constructor(props) {
            super(props)
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
        console.log('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render () {
        return (
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
                                        <Input type="radio" name="ha" value="<" id="haLt" checked={this.props.ha === "<"} onChange={this.handleInputChange} />{' '}
                                        p &lt;
                                    </Label>
                                </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="ha" value=">" id="haGt" checked={this.props.ha === "<"} onChange={this.handleInputChange} />{' '}
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

        )
    }
}    

export default SimulatorForm;