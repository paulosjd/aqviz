import React from "react";


const SiteRow = ({site, pollutant}) => {
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     const siteCode = e.currentTarget.dataset.sitecode;
    //     const siteName = e.currentTarget.dataset.sitename;
    //     props.onSiteClick(siteCode, siteName);
    //     window.scrollTo(0, 0);
    // };
    return (
        <tr>
            <td>
                <span>{site.name}</span>
            </td>
            <td className='value_cell'>
                {/*{props.site[props.pollutant]}*/}
                8
            </td>
        </tr>
    );
};

export default SiteRow;