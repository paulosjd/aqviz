import React from 'react';
import { LineChart } from 'react-chartkick'
import ChartButtonGroup from '../form/chart_btn_group'
import 'chart.js'

const TimeSeriesChart = (props) => {

    return (
        <div className='site_chart' >
            <LineChart
                colors={["#6f98bb", "#666"]}
                height={200} width={720}
                data={{"2017-05-14 00:00": 2, "2017-05-14 01:00": 5, "2017-05-14 02:00": 7, "2017-05-14 03:00": 3, "2017-05-14 04:00": 5, "2017-05-14 05:00": 4,}}
            />
            <ChartButtonGroup />
        </div>
    )
};

export default TimeSeriesChart;

