import React from "react";
import { ReactSVG } from 'react-svg'

const RegionsMap = ({regions, regionClick, selectedRegions, filteredSites}) => {
    const selectedSiteCodes = filteredSites.map(x => x.site_code);
    console.log(selectedSiteCodes)
    return (
        <ReactSVG
            src="uk2.svg"
            onClick={(e) => {
                const title = e.target.attributes.title;
                if (title && regions.includes(title.value)) {
                    regionClick(title.value)
                }
            }}
            beforeInjection={svg => {
                svg.setAttribute("transform", "scale(0.5) translate(-225 -515.5)");
            }}
            afterInjection={(err, svg) => {
                // console.dir(svg)
                for (let child of svg.children){
                    const title = child.attributes.title;
                    if (title && selectedRegions.includes(title.value)) {
                        child.setAttribute('style', 'fill: #ffd781')
                      // svg.classList.add('svg-class-name')
                      // svg.setAttribute('style', 'width: 200px')
                    }
                }
            }}
        />
    )
};

export default RegionsMap