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
            <DropdownToggle className='pollutant_select' caret>
                {pollutant === 'ozone' ? 'Ozone' : pollutant === 'no2' ? 'NO₂' : pollutant.toUpperCase()}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => dispatch({type: POLLUTANT_SELECT, value: 'pm10'})}>PM10</DropdownItem>
                <DropdownItem onClick={() => dispatch({type: POLLUTANT_SELECT, value: 'pm25'})}>PM25</DropdownItem>
                <DropdownItem onClick={() => dispatch({type: POLLUTANT_SELECT, value: 'no2'})}>NO₂</DropdownItem>
                <DropdownItem onClick={() => dispatch({type: POLLUTANT_SELECT, value: 'ozone'})}>Ozone</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    )
}