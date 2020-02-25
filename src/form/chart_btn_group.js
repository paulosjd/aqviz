import React from "react";
import { useDispatch } from "react-redux";
import { TIMESPAN_SELECT } from "../store/constants";


export default ({ timeSpan }) => {

    const dispatch = useDispatch();

    return (
        <div className='chart_btn_group' >
            {['Day', 'Week', 'Month', 'Year'].map(str => {
                let clsName = 'chart_btn';
                if (str.toLowerCase() === timeSpan){
                    clsName += ' activeBtn'
                }
                return (
                    <button className={clsName}
                            key={str}
                            onClick={() => dispatch(
                                { type: TIMESPAN_SELECT, value: str.toLowerCase() })
                            }
                    >{str}</button>
                )
            })}
        </div>
    )
};