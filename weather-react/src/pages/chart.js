import React, { Component } from 'react';
import './chart.css';
import { Line } from 'react-chartjs-2';

const Graph = (props) => {
    
    const ds = props.dates;
    const ts = props.temps;
    const data = {
        labels: ds,
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: ts
            }
        ]
    };
    return (
        <Line data={data} height={70} />
    );
}
export default class Chart extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div class="chart" id="chart">
                <Graph  dates={this.props.cInfo.dateslist} temps={this.props.cInfo.templist}/>
            </div>
        );
    }
}