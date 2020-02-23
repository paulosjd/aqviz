import React from "react";
import { ReactSVG } from 'react-svg'
import { useDispatch } from "react-redux";
import { getColorFromSiteCode } from "../utils/color_utils";
import {SITE_HIGHLIGHT, SITE_SELECT} from "../store/constants";

const RegionsMap = ({ regions, regionClick, selectedRegions, filteredSites, pollutant }) => {

    const dispatch = useDispatch();

    function handleHoverEvent(elem, display, svg, siteCode) {
        if (elem.tagName === 'circle') {
            dispatch({type: SITE_HIGHLIGHT, value: display === 'block' ? siteCode : ''});
            let elem = svg.getElementById(`${siteCode}_label`);
            elem.setAttribute('style', 'display: ' + display);
        }
    }

    function getIdFromSiteCode(site_code) {
        const ind = filteredSites.findIndex(x => x.site_code === site_code);
        if (ind > -1) {
            return filteredSites[ind].id
        }
    }

    return (
        <ReactSVG
            src="uk_map2.svg"
            onClick={(e) => {
                const title = e.target.attributes.title;
                if (title && regions.includes(title.value)) {
                    regionClick(title.value)
                }
            }}
            beforeInjection={svg => {
                svg.setAttribute("transform", "scale(0.70) translate(-230 -490.5)");
            }}
            afterInjection={(err, svg) => {
                for (let child of svg.children){
                    const title = child.attributes.title;
                    if (title && selectedRegions.includes(title.value)) {
                        child.setAttribute('style', 'fill: #83816f')
                    }
                    const selectedSiteCodes = filteredSites.map(x => x.site_code);
                    if (selectedSiteCodes.includes(child.id)) {
                        child.setAttribute('style',
                            'display: initial; fill: ' + getColorFromSiteCode(child.id, filteredSites, pollutant)
                        );
                        child.onmouseover = () => {handleHoverEvent(child, 'block', svg, child.id)};
                        child.onmouseout = () => handleHoverEvent(child, 'hidden', svg, child.id)
                        child.onclick = () => dispatch({ type: SITE_SELECT, value: getIdFromSiteCode(child.id) })
                    }
                }
            }}
        />
    )
};

export default RegionsMap