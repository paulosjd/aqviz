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
    const aqData = content.aqData;
    const showOverlay = overlaySiteMode || overlaySiteIds.length > 0

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

    let data = filteredData;
    if (showOverlay) {
        data = [{name: siteName, data: filteredData}];
        overlaySiteIds.forEach(siteId => {
            let extraSiteData = {};
            if (aqData.siteData[siteId]) {
                aqData.siteData[siteId].forEach(obj => {
                    const itemDt = new Date(obj.time);
                    if (itemDt > dt) {
                        extraSiteData[itemDt] = obj[aqData.pollutant]
                    }
                })
            }
            data.push({name: getSiteNameFromId(siteId), data: extraSiteData})
        })

    }

    const chartContent = (
        <div className='site_chart'>
            <LineChart
                colors={["#6f98bb", "#ff9c1c", "#00990a", "#ff284f"]}
                height={200} width={650}
                data={data}
                points={days === 1}
            />
            <ChartButtonGroup
                timeSpan={timeSpan}
            />
        </div>
    );
    let chartHead;
    if (!showOverlay) {
        chartHead = (
            <div className='chart_head'>
                <span className='chart_title'>{siteName}</span>
                { isLoading && <span><Spinner size='small' className='left24' color="secondary"/></span> }
                <span className='chart_title_right'>{siteEnviron}</span>
            </div> )
    }

    return (
            <div className='mgn-tp-12'>
                { chartHead }
                {/*{ isLoading and not chart content  ? <Spinner color="secondary sum-spin"/> : chartContent }*/}
                {/*  elif add multiple show spinner/loading text(logic in child component) */}
                { chartContent }
            </div>
    )
};

export default TimeSeriesChart;
