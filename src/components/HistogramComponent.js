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

    render() {

        let smallArray = this.props.samplePropArray.filter(x => x < this.props.pHat);
        let bigArray = this.props.samplePropArray.filter(x => x >= this.props.pHat);

        let dataArray=dataArrayMaker(smallArray, bigArray);

        var colors;
        if (smallArray.length == 0 && this.props.ha == '<')  {
            colors = ['#0081AF'];
        }
        else colors = (this.props.ha == '>') ? ['#0081AF', '#8C5383'] : ['#8C5383', '#0081AF'];


        return (
            <div>
                <Chart
                    chartType="Histogram"
                    data={[[`\u003C ${this.props.pHat}`, `\u2265 ${this.props.pHat}`], ...dataArray]}
                    width="90%"
                    height="400px" 
                    isStacked
                    options={{
                        colors: colors,
                        backgroundColor: '#F4EDEA',
                        chartArea: {top: 10},
                        hAxis:{title:`${this.props.numDraws} Sample proportions`, titleTextStyle: {fontSize: 20, fontName: 'Georgia'} },
                        fontname: 'Georgia',
                        legend:{textStyle: {fontName: 'Georgia'}}
                    }}
                />
            </div>
        );
          
    }
}

export default Histogram;