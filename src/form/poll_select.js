import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { POLLUTANT_SELECT } from "../store/constants";

export default () => {
    const [ dropdownOpen, setDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const content = useSelector(state => state);
    const pollutant = content.aqData.pollutant;


    return (
        <ButtonDropdown
            isOpen={dropdownOpen}
            toggle={() => setDropdownOpen(!dropdownOpen)}
        >
            <DropdownToggle className='pollutant_select oa_ignore' caret>
                {pollutant === 'ozone' ? 'Ozone' : pollutant === 'no2' ? 'NO₂' : pollutant.toUpperCase()}
            </DropdownToggle>
            <DropdownMenu>
                {[['pm10', 'PM10'], ['pm25', 'PM25'], ['no2', 'NO₂'], ['ozone', 'Ozone']].map(i => {
                    return (
                        <DropdownItem
                            key={i[0]}
                            className='oa_ignore'
                            onClick={() => dispatch({type: POLLUTANT_SELECT, value: i[0]})}
                        >{i[1]}
                        </DropdownItem>
                    )
                })}
            </DropdownMenu>
        </ButtonDropdown>
    )
}