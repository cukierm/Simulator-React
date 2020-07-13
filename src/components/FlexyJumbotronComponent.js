import React, { Component  } from 'react';
import { Jumbotron } from 'reactstrap';

class FlexyJumbotron extends Component {

    render() {
        return(
            <Jumbotron className="jumbotron" fluid style={{backgroundColor:"#8C5383", marginBottom:0}}>
                <div>
                    <div className="flex-row">
                        <div className="col d-flex justify-content-center">
                            <h1>{this.props.titleText}</h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

export default FlexyJumbotron;