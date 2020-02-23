import React from 'react';
import { LineChart } from 'react-chartkick'
import ChartButtonGroup from '../form/chart_btn_group'
import 'chart.js'

const TimeSeriesChart = ({ chartData, }) => {

    return (
        <div className='site_chart' >
            <LineChart
                colors={["#6f98bb", "#666"]}
                height={200} width={720}
                data={chartData}
            />
            <ChartButtonGroup />
        </div>
    )
};

export default TimeSeriesChart;

