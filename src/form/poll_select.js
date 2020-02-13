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
                {pollutant === 'ozone' ? 'Ozone' : pollutant.toUpperCase()}</DropdownToggle>
            <DropdownMenu>
                <DropdownItem
                    onClick={(e) => dispatch({type: POLLUTANT_SELECT, value: e.target.innerHTML.toLowerCase()})}
                >
                    PM10
                </DropdownItem>
                <DropdownItem
                    onClick={(e) => dispatch({type: POLLUTANT_SELECT, value: e.target.innerHTML.toLowerCase()})}
                >
                    PM25
                </DropdownItem>
                <DropdownItem
                    onClick={(e) => dispatch({type: POLLUTANT_SELECT, value: e.target.innerHTML.toLowerCase()})}
                >
                    NO₂
                </DropdownItem>
                <DropdownItem
                    onClick={(e) => dispatch({type: POLLUTANT_SELECT, value: e.target.innerHTML.toLowerCase()})}
                >
                    Ozone
                </DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    )
}