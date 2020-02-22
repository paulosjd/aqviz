import React from "react";
import { ReactSVG } from 'react-svg'
import { useDispatch } from "react-redux";
import { getColorFromSiteCode } from "./utils";
import { SITE_HIGHLIGHT } from "../store/constants";

const RegionsMap = ({regions, regionClick, selectedRegions, filteredSites, pollutant}) => {

    const dispatch = useDispatch();

    function handleHoverEvent(elem, display, svg, siteCode){
        if (elem.tagName === 'circle'){
            dispatch({type: SITE_HIGHLIGHT, value: display === 'block' ? siteCode : ''});
            let elem = svg.getElementById(`${siteCode}_label`);
            elem.setAttribute('style', 'display: ' + display);
            console.log(elem)
            // if (elem.nextElementSibling && elem.nextElementSibling.tagName === 'text') {
            //             //     elem.nextElementSibling.setAttribute('style', 'display: ' + display)
            //             // }
        }
    }

    return (
        <ReactSVG
            src="uk_map2.svg"
            onClick={(e) => {
                const title = e.target.attributes.title;
                if (title && regions.includes(title.value)){
                    regionClick(title.value, true)
                }
            }}
            beforeInjection={svg => {
                svg.setAttribute("transform", "scale(0.70) translate(-230 -490.5)");
            }}
            afterInjection={(err, svg) => {
                svg.onwheel = (e) => e.preventDefault();
                for (let child of svg.children){
                    const title = child.attributes.title;
                    if (title && selectedRegions.includes(title.value)){
                        child.setAttribute('style', 'fill: #83816f')
                    }
                    const selectedSiteCodes = filteredSites.map(x => x.site_code);
                    if (selectedSiteCodes.includes(child.id)){
                        child.setAttribute('style',
                            'display: initial; fill: ' + getColorFromSiteCode(child.id, filteredSites, pollutant)
                        );
                        child.onmouseover = () => {handleHoverEvent(child, 'block', svg, child.id)};
                        // setTextDisplay depends on after circle having <text x="404.5" y="698.1" class="site-label" id="NEWC_label">Newcastle Centre</text
                        child.onmouseout = () => handleHoverEvent(child, 'hidden', svg, child.id)
                    }
                }
            }}
        />
    )
};

export default RegionsMap