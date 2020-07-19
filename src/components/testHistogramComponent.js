import React, { Component } from "react";
import { Chart } from "react-google-charts";

function dataArrayMaker(arr1, arr2) {
    let dataArray = [];
    let max = Math.max(arr1.length, arr2.length);

    for(let i = 0; i<max; i++) {
        if(i < arr1.length && i < arr2.length) {
            dataArray.push([arr1[i], arr2[i]]);
        }
        else if (i < arr1.length) {
            dataArray.push([arr1[i], null]);
        }
        else 
        {
            dataArray.push([null, arr2[i]]);
        }
    }
    return dataArray;
}





class Histogram extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let smallArray = this.props.samplePropArray.filter(x => x < this.props.pHat);
        let bigArray = this.props.samplePropArray.filter(x => x >= this.props.pHat);

        let dataArray=dataArrayMaker(smallArray, bigArray);
        const colors = (this.props.ha == '>') ? ['#0081AF', '#8C5383'] : ['#8C5383', '#0081AF'];


        return (
            <div className={"my-pretty-chart-container"}>
                <Chart
                    chartType="Histogram"
                    data={[[`\u003C ${this.props.pHat}`, `\u2265 ${this.props.pHat}`], ...dataArray]}
                    width="100%"
                    height="400px" 
                    options={{
                        colors: colors,
                        backgroundColor: '#F4EDEA',
                        chartArea: {top: 10},
                        hAxis:{title:'Sample proportions'}
                    }}
                />
            </div>
        );
          
    }
}

export default Histogram;