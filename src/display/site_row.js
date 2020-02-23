import React from "react";
import { getColorForPollutantAndValue } from '../utils/color_utils'
import { useDispatch } from "react-redux";
import { SITE_SELECT } from '../store/constants'

const SiteRow = ({site, pollutant, hoverSiteCode}) => {

    const dispatch = useDispatch();
    let colorStyle = {};
    if (hoverSiteCode === site.site_code) {
        colorStyle = {backgroundColor: getColorForPollutantAndValue(pollutant, site[pollutant])}
    }
    return (
        <tr >
            <td className='site_name_cell'>
                <span
                    onClick={() => dispatch({ type: SITE_SELECT, value: site.id })}
                    className='row_site_name'
                >
                    {site.name}
                </span>
            </td>
            <td className='value_cell' style={colorStyle}>
                {site[pollutant]}
            </td>
        </tr>
    );
};

export default SiteRow;