import React from "react";

export default ({ labels, category }) => {
    return (
        <div>
            <div className={`${category}_buttons btn_line`} >
                {labels.map(val =>
                    <button
                        className={`${category}_button btn_line_btn`}
                        key={val}
                        value={val}
                        // className={props.activeTab === val.toLowerCase() ? 'calendar-option-active' : 'calendar-option'}
                        // onClick={props.handleClick}
                    >{val}
                    </button>)}
            </div>
        </div>
    )
};