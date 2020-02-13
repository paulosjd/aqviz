import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { ENVIRON_CLICK, REGION_CLICK } from "../store/constants";

export default ({ labels, category }) => {
    const dispatch = useDispatch();
    const content = useSelector(state => state);
    const sites = content.sites;
    console.log(sites.selectedEnvirons)
    console.log(sites.selectedRegions)
    return (
        <div>
            <div className={`${category}_buttons btn_line`} >
                {labels.map(val =>{
                    const container = sites[category ==='region' ? 'selectedRegions' : 'selectedEnvirons'];
                    const activeCls = container.includes(val) ? 'active-btn' : '';
                    return (
                        <button
                            className={`${category}_button btn_line_btn ${activeCls}`}
                            key={val}
                            value={val}
                            onClick={() => {
                                dispatch({type: category === 'region' ? REGION_CLICK : ENVIRON_CLICK, value: val})
                            }}
                        >
                            {val}
                        </button>)
                })}
            </div>
        </div>
    )
};