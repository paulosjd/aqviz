import React from "react";
import { getColorForPollutantAndValue } from './utils'

const SiteRow = ({site, pollutant, hoverSiteCode}) => {

    let colorStyle = {};
    if (hoverSiteCode === site.site_code) {
        colorStyle = { backgroundColor: getColorForPollutantAndValue(pollutant, site[pollutant])}
    }
    return (
        <tr >
            <td>
                <span>{site.name}</span>
            </td>
            <td className='value_cell' style={colorStyle}>
                {site[pollutant]}
            </td>
        </tr>
    );
};

export default SiteRow;