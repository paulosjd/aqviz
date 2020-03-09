import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ENVIRON_CLICK, REGION_CLICK, REFRESH_SELECTION } from "../store/constants";


export default ({ labels, category }) => {
    const dispatch = useDispatch();
    const content = useSelector(state => state);
    const sites = content.sites;

    return (
        <div>
            <div className={`${category}_buttons btn_line`} >
                {labels.map(val =>{
                    const container = sites[category ==='region' ? 'selectedRegions' : 'selectedEnvirons'];
                    const activeCls = container.includes(val) ? 'active-btn' : '';
                    return (
                        <button
                            key={val} className={`${category}_button btn_line_btn ${activeCls}`}
                            value={val}
                            onClick={() => {
                                dispatch({ type: category === 'region' ? REGION_CLICK : ENVIRON_CLICK, value: val })
                            }}
                        >
                            {val}
                        </button>)
                })}
                {category ==='environ' && sites.selectedEnvirons.length > 0 ?
                    <span role="img" aria-label="refresh" className='refresh_symbol'
                          onClick={() => dispatch({ type: REFRESH_SELECTION })}
                    >&#x1f504;</span>
                    : null}
            </div>
        </div>
    )
};