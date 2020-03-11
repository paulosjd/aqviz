import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_OVERLAY_SITE_MODE, REFRESH_OVERLAY } from "../store/constants";
import { Spinner } from "reactstrap";

export default ({ isLoading, chartDataLen }) => {

    const dispatch = useDispatch();
    const content = useSelector(state => state);
    const overlaySiteMode = content.sites.overlaySiteMode;

    if (isLoading && chartDataLen !== 0) {
        return <Spinner size='small' className='extra_loading' color="secondary"/>
    }

    return (
        <div className='chart_btn_group' >
            { content.sites.overlaySiteIds.length > 0 && <div>
                <span role="img" aria-label="refresh" className='refresh_overlay'
                      onClick={() => dispatch({ type: REFRESH_OVERLAY })}
                >&#x1f504;</span>
                <span> Reset extra sites</span></div> }
            <button className={'chart_btn chart_extras'.concat(overlaySiteMode ? ' activeExtraBtn' : '')}
                    onClick={() => dispatch({ type: SET_OVERLAY_SITE_MODE, value: !overlaySiteMode })}
            ><span role="img" aria-label="refresh" className='add_symbol oa_ignore'
            >&#x2795;</span>   Add extra sites</button>
        </div>
    )
};