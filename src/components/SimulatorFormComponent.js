import React, { Component } from 'react';
import { Button, Label, Col, FormGroup, Form, Input, Card, CardHeader, CardBody, FormFeedback, 
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledTooltip } from 'reactstrap';
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
                dropdownOpen: false,
                display: '(Select)',
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
                else if (isNaN(pHat)) {
                    errors.pHat = 'The sample proportion must be a number';
                }
                else if (Number(pHat) > 1 || Number(pHat) < 0) {
                    errors.pHat = 'The sample proportion must be between 0 and 1';
                }

            }

            if (this.state.touched.ho) {
                if (!ho) {
                    errors.ho = 'Please enter a proportion';
                }
                else if (isNaN(ho)) {
                    errors.ho = 'this proportion must be a number';
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
                else if (isNaN(pHat)) {
                    errors.n = 'The sample size must be a number'
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
                    errors.numDraws = 'Please enter the number of simulations';
                }
                else if (isNaN(numDraws)) {
                    errors.numDraws = 'The number of simulations must be a number';
                }    
                else if (Number(numDraws) < 0) {
                    errors.numDraws = 'The number of simulations must be positive';
                }
                else if (Number(numDraws) % 1 !== 0) {
                    errors.numDraws = 'The number of simulations must be a whole number';
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
        const value = target.type === 'select' ? target.selected : target.value;
    
        this.setState({
          [name]: value
        });
        console.log(JSON.stringify(this.state));
        
    }

    handleSubmit(event) {
        if (this.state.ha && this.state.ho && this.state.pHat && this.state.n && this.state.numDraws) {
            this.props.updateState(this.state.pHat, this.state.ho, this.state.ha, this.state.n, this.state.numDraws);
        }
        else {
            alert('Please make all five selections.');
        }
        event.preventDefault();
    }

    toggle = () => {this.setState({dropdownOpen: !this.state.dropdownOpen})};

    render () {

        const errors = this.validate(this.state.pHat, this.state.ho, this.state.ha, this.state.n, this.state.numDraws);
        
        const styles = {
            row: {
                display: 'flex',
                alignItems: 'flex-end',

                marginBottom: '40px',
                fontSize: '20px'
            },
    
            button: {
                backgroundColor: '#0081AF'
            },
            buttonCol:{
                display: 'flex',
                justifyContent: 'center',
            }
        };

        return (
            <Card>
                <CardHeader>
                    <h3>Get Ready to Simulate!</h3>
                </CardHeader>
                <CardBody>
                   
                        <Form onSubmit={this.handleSubmit} className="px-4">
                            <FormGroup row style={styles.row}>
                            <Col xs={2.5} className='pr-0 mr-0'> 
                                    <Label htmlFor="ho" id='hoLabel'>Ho: &nbsp; p = </Label>
                                    <UncontrolledTooltip placement="top" target="hoLabel">The null hypothesis is a statement about the population proportion that says there is nothing significant going on. Enter this population proportion.</UncontrolledTooltip>
                                </Col>
                                <Col xs={6} className='pl-0 ml-1'>
                                    <Input type="text" id="ho" name="ho" 
                                        value={this.props.ho}
                                        invalid={errors.ho}
                                        onBlur={this.handleBlur('ho')}
                                        onChange={this.handleInputChange}
                                         />
                                    <FormFeedback>{errors.ho}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row style={styles.row}>
                                <span id="haLabel">Ha: &nbsp; &nbsp; </span>
                                <UncontrolledTooltip placement="top" target="haLabel">The alternative hypothesis says that the population proportion is either less than or greater than the proportion in the null hypothesis. Choose the statement of the alternative hypothesis that matches what you want to show.</UncontrolledTooltip>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle id="dropdownToggle" caret>
                                    {this.state.display}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem 
                                    onClick={() => this.setState({ha: '<', display: `p < ${this.state.ho}`})}>
                                        p {'<'} {this.state.ho}
                                    </DropdownItem>
                                    <DropdownItem 
                                    onClick={() => this.setState({ha: '>', display: `p > ${this.state.ho}`})}>
                                        p {'>'} {this.state.ho}
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            </FormGroup>

                            <FormGroup row style={styles.row}>
                                <Col xs={1} sm={2}className='px-0'>
                                <Label htmlFor="pHat" id="pHatLabel">p&#770; = </Label>
                                <UncontrolledTooltip placement="top" target="pHatLabel">Enter the sample proportion.</UncontrolledTooltip>
                                </Col>
                                <Col xs={6} className='pl-0 ml-0'>
                                    <Input type="text" id="pHat" name="pHat"
                                        value={this.props.pHat}
                                        invalid={errors.pHat}
                                        onBlur={this.handleBlur('pHat')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.pHat}</FormFeedback>                                  
                                </Col>
                            </FormGroup>
                            <FormGroup row style={styles.row}>
                                <Col xs={1} sm={2} className="px-0">
                                    <Label htmlFor="n" id='n'>n = &nbsp;</Label>
                                    <UncontrolledTooltip placement='top' target='n'>Enter the sample size</UncontrolledTooltip>
                                </Col>
                                <Col xs={6} className="pl-0 ml-0">
                                    <Input type="text" id="n" name="n"
                                        value={this.props.n}
                                        invalid={errors.n}
                                        onBlur={this.handleBlur('n')}
                                        onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.n}</FormFeedback>
                                </Col>                          
                            </FormGroup>

                            <FormGroup row style={styles.row}>
                                <Col xs={3} className="pl-0 pr-3">
                                    <Label id="numDrawsLabel" htmlFor="numDraws">Number of simulations:</Label>
                                    <UncontrolledTooltip placement="top" target="numDrawsLabel">Enter the number of sample proportions you wish to calculate.</UncontrolledTooltip>
                                </Col>
                                <Col xs={6}>
                                    <Input type="text" name="numDraws" id="numDraws" className="ml-4 align-items-center"
                                    value={this.props.numDraws} 
                                    invalid={errors.numDraws}
                                    onBlur={this.handleBlur('numDraws')}
                                    onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.numDraws}</FormFeedback>
                                </Col>
                            </FormGroup>
                                <Col style={styles.buttonCol}>
                                    <Button type="submit" style={styles.button}>
                                        Go!
                                    </Button>
                                </Col>
                        </Form>
                
                </CardBody>
            </Card>
        );
    }
}    

export default SimulatorForm;