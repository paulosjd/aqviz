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
        <tr className='oa_ignore'>
            <td className='site_name_cell oa_ignore'>
                <span
                    onClick={() => dispatch({ type: SITE_SELECT, value: site.id })}
                    className='oa_ignore'
                >
                    {site.name}
                </span>
            </td>
            <td className='value_cell oa_ignore' style={colorStyle}>
                {site[pollutant]}
            </td>
        </tr>
    );
};

export default SiteRow;