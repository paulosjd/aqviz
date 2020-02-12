import React from "react";
import { Table } from "reactstrap";
import PollutantSelect from '../form/poll_select'
import SiteRow from "./site_row";

const SiteTable = (props) => {

    // const getSites = () =>{
    //     let sites = [...props.sites];
    //     const filterText = props.filterText;
    //     if (props.highFilter) {
    //         sites.sort((a, b) => a[props.pollutant] - b[props.pollutant]);
    //         if ( props.highFilter === 'low' ) {
    //             sites = sites.slice(0,10)
    //         } else {sites = sites.slice(-10).reverse()}
    //     }
    //     return sites.filter((site) => {
    //         return (
    //             site.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1 &&
    //             (!props.siteRegion || site.region === props.siteRegion) &&
    //             (!props.siteCategory || site.category === props.siteCategory))
    //     });
    // };

    let rows = [];
    for (let site of props.sites) {
        rows.push(
            <SiteRow
                pollutant={props.pollutant}
                // onSiteClick={props.onSiteClick}
                site={site} key={site.id}
            />
        );
    }
    if (rows.length < 1){
        // rows = !props.filterText ? <tr><td className='loading_text'>Loading...</td></tr> :
            rows = <tr><td>No results found</td></tr>
    }

    return (
        <Table striped bordered condensed hover>
            <thead>
            <tr>
                <th className='time_label'> <br/>
                    {/*{props.time}*/}
                    12/02/2020 07:00
                </th>
                <th id="pm10_header">
                    <PollutantSelect
                        pollutant={'pm10'}
                        // pollutant={props.pollutant}
                        // handlePollutantChoice={props.handlePollutantChoice}
                    />
                </th>
            </tr>
            </thead>
            <tbody>
            { rows }
            </tbody>
        </Table>
    );
};

export default SiteTable;

{/*<tr><th className='time_label'> <br/>*/}
    {/*{props.time}</th><th id="pm10_header">*/}
    {/*<PollutantSelect*/}
        {/*pollutant={props.pollutant}*/}
        {/*handlePollutantChoice={props.handlePollutantChoice}*/}
    {/*/>*/}
{/*</th></tr>*/}