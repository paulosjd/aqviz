import React from 'react';
import { LineChart } from 'react-chartkick'
import { Spinner } from "reactstrap";
import ChartButtonGroup from '../form/chart_btn_group'
import 'chart.js'
import { useSelector } from "react-redux";

const TimeSeriesChart = ({ chartData, timeSpan, siteName, siteEnviron, isLoading, getSiteNameFromId }) => {

    const content = useSelector(state => state);
    const overlaySiteMode = content.sites.overlaySiteMode;
    const overlaySiteIds = content.sites.overlaySiteIds;

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
    console.log(filteredData)

    const filteredData2 = {};
    Object.entries(chartData).forEach(item => {
        const itemDt = new Date(item[0]);
        if (itemDt > dt) {
            filteredData2[itemDt] = item[1] + 3
        }
    });
    const filteredData3 = {};
    Object.entries(chartData).forEach(item => {
        const itemDt = new Date(item[0]);
        if (itemDt > dt) {
            filteredData3[itemDt] = item[1] + 5
        }
    });
    const filteredData4 = {};
    Object.entries(chartData).forEach(item => {
        const itemDt = new Date(item[0]);
        if (itemDt > dt) {
            filteredData4[itemDt] = item[1] + 7
        }
    });
    const testData = [
        {"name":"series 1", "data": filteredData},
        {"name":"series 2", "data": filteredData2},
        {"name":"series 3", "data": filteredData3},
        {"name":"series 4", "data": filteredData4}
    ];
    // console.log(getSiteNameFromId(overlaySiteIds[0]))
    console.log(overlaySiteIds)

    const chartContent = (
        <div className='site_chart'>
            <LineChart
                colors={["#6f98bb", "#ff9c1c", "#00990a", "#ff284f"]}
                height={200} width={650}
                data={testData}
                points={days === 1}
            />
            <ChartButtonGroup
                timeSpan={timeSpan}
            />
        </div>
    );

    return (
            <div className='mgn-tp-12'>
                { (! overlaySiteIds.length > 0 && !overlaySiteMode) &&
                <React.Fragment>
                    <span className='chart_title'>{siteName}</span>
                    <span className='chart_title_right'>{siteEnviron}</span>
                </React.Fragment> }
                { isLoading ? <Spinner color="secondary sum-spin"/> : chartContent }
            </div>
    )
};

export default TimeSeriesChart;
