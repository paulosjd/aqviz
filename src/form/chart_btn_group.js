import React from "react";
// import {useDispatch, useSelector} from "react-redux";
// import { ENVIRON_CLICK, REGION_CLICK, REFRESH_SELECTION } from "../store/constants";


export default ({ labels, category }) => {
    // const dispatch = useDispatch();
    // const content = useSelector(state => state);
    // const sites = content.sites;

    return (
        <div className='chart_btn_group' >
            <button className='chart_btn' >Hourly</button>
            <button  className='chart_btn' >Weekly</button>
            <button  className='chart_btn' >Monthly</button>
        </div>
    )
};