import React from "react";
import { ReactSVG } from 'react-svg'

const RegionsMap = ({regions, regionClick, selectedRegions, filteredSites}) => {

    function getColorFromSiteCode(s){
        const ind = filteredSites.map(x => x.site_code).indexOf(s);
        if (ind > -1){
            if (filteredSites[ind].pm10 > 15) return 'red';
            if (filteredSites[ind].pm10 > 8) return 'orange';
            if (filteredSites[ind].pm10 > 0) return 'green' ;
        } else console.log('not found');
        return 'grey'
    }

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
                svg.setAttribute("transform", "scale(0.70) translate(-205 -490.5)");
            }}
            afterInjection={(err, svg) => {
                for (let child of svg.children){
                    const title = child.attributes.title;
                    if (title && selectedRegions.includes(title.value)){
                        child.setAttribute('style', 'fill: #ffd781')
                    }
                    const selectedSiteCodes = filteredSites.map(x => x.site_code);
                    if (selectedSiteCodes.includes(child.id)){
                        child.setAttribute('style',
                            'display: initial; fill: ' + getColorFromSiteCode(child.id));
                        child.onmouseover = () => {setTextDisplayStyle(child, 'block')};
                        child.onmouseout = () => setTextDisplayStyle(child, 'hidden')
                    }
                }
            }}
        />
    )
};

export default RegionsMap