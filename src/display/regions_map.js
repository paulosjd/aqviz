import React from "react";
import { ReactSVG } from 'react-svg'
import { getColorFromSiteCode } from "./utils";

const RegionsMap = ({regions, regionClick, selectedRegions, filteredSites, pollutant}) => {

    function setTextDisplayStyle(elem, display){
        if (elem.tagName === 'circle'){
            if (elem.nextElementSibling && elem.nextElementSibling.tagName === 'text') {
                elem.nextElementSibling.setAttribute('style', 'display: ' + display)
            }
        }
    }

    return (
        <ReactSVG
            src="uk2.svg"
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
                        child.setAttribute('style', 'fill: #ffd781')
                    }
                    const selectedSiteCodes = filteredSites.map(x => x.site_code);
                    if (selectedSiteCodes.includes(child.id)){
                        child.setAttribute('style',
                            'display: initial; fill: ' + getColorFromSiteCode(child.id, filteredSites, pollutant)
                        );
                        child.onmouseover = () => {setTextDisplayStyle(child, 'block')};
                        // setTextDisplay depends on after circle having <text x="404.5" y="698.1" class="site-label" id="NEWC_label">Newcastle Centre</text
                        child.onmouseout = () => setTextDisplayStyle(child, 'hidden')
                    }
                }
            }}
        />
    )
};

export default RegionsMap