import React from "react";
// import {useDispatch, useSelector} from "react-redux";
// import { ENVIRON_CLICK, REGION_CLICK, REFRESH_SELECTION } from "../store/constants";


export default ({ labels, category }) => {
    // const dispatch = useDispatch();
    // const content = useSelector(state => state);
    // const sites = content.sites;

    return (
        <div className='chart_btn_group' >
            <button className='chart_btn' >Day</button>
            <button  className='chart_btn' >Week</button>
            <button  className='chart_btn' >Month</button>
            <button  className='chart_btn' >Year</button>
        </div>
    )
};