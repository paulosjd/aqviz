import React from 'react';
import { LineChart } from 'react-chartkick'
import ChartButtonGroup from '../form/chart_btn_group'
import 'chart.js'

const TimeSeriesChart = ({ chartData, timeSpan, siteName }) => {

    return (
        <React.Fragment>
            <span className='chart_title'>{siteName}</span>
            <div className='site_chart'>
                <LineChart
                    colors={["#6f98bb", "#666"]}
                    height={200} width={660}
                    data={chartData}
                />
                <ChartButtonGroup
                    timeSpan={timeSpan}
                />
            </div>
        </React.Fragment>
    )
};

export default TimeSeriesChart;

