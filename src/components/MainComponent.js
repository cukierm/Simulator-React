import React, { Component } from 'react';
import Header from './HeaderComponent';
import SimulatorContainer from './SimulatorContainerComponent';
import GuidedExample from './GuidedExampleComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state={title:"Simulator"}
    }
    render() {
        return (
            <div>
            <Header />
                <Switch>
                    <Route path='/guided-example' component={GuidedExample} />
                    <Route path='/simulator' component={SimulatorContainer} />
                    <Redirect to='/simulator' />
                </Switch>
            </div>
            );
    }

}

export default Main;