import React from 'react';
import { LineChart } from 'react-chartkick'
import 'chart.js'

const TimeSeriesChart = (props) => {
    return (
        <div>
            <LineChart
                colors={["#6f98bb", "#666"]}
                height={200} width={500}
                data={{"2017-05-13": 2, "2017-05-14": 5, "2017-05-15": 7, "2017-05-16": 3, "2017-05-17": 5, "2017-05-18": 4,}}
            />
        </div>
    )
};

export default TimeSeriesChart;

