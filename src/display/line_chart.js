import React from 'react';
import { LineChart } from 'react-chartkick'
import { Spinner } from "reactstrap";
import ChartButtonGroup from '../form/chart_btn_group'
import 'chart.js'

const TimeSeriesChart = ({ chartData, timeSpan, siteName, isLoading }) => {

    let days;
    switch (timeSpan) {
        case 'day':
            days = 1;
            break;
        case 'week':
            days = 7;
            break;
        case 'month':
            days = 28;
            break;
        case 'year':
            days = 365;
            break;
        default:
            days = 7;
    }

    const filteredData = {};
    const dt = new Date();
    dt.setDate(dt.getDate() - days);
    Object.entries(chartData).forEach(item => {
        const itemDt = new Date(item[0]);
        if (itemDt > dt) {
            filteredData[itemDt] = item[1]
        }
    });

    const chartContent = (
        <div className='site_chart'>
            <LineChart
                colors={["#6f98bb", "#666"]}
                height={200} width={650}
                data={filteredData}
            />
            <ChartButtonGroup
                timeSpan={timeSpan}
            />
        </div>
    );

    return (
        <React.Fragment>
            <h4 className='chart_title'>{siteName}</h4>
            { isLoading ? <Spinner color="secondary sum-spin"/> : chartContent }
        </React.Fragment>
    )
};

export default TimeSeriesChart;
