import React from "react";


const SiteRow = (props) => {
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     const siteCode = e.currentTarget.dataset.sitecode;
    //     const siteName = e.currentTarget.dataset.sitename;
    //     props.onSiteClick(siteCode, siteName);
    //     window.scrollTo(0, 0);
    // };

    return (
        <tr>
            <td><a href={'/' + props.site_code} className="link"
                   // onClick={handleClick}
                   // data-sitecode={props.site.site_code}
                   // data-sitename={props.site.name}
                >
                <span>
                    {/*{props.site.name.split(" ").splice(0,2).join(" ")}*/}

                </span></a>
            </td>
            <td className='pm10_data'>
                {/*{props.site[props.pollutant]}*/}
                8
            </td>
        </tr>
    );
};

export default SiteRow;