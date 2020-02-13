import React, { Component } from "react"
import { Table } from "reactstrap"
import { connect } from "react-redux"
import PollutantSelect from '../form/poll_select'
import SiteRow from "./site_row"
import TextSearchInput from '../form/text_search'
import { setTextInput } from "../store/actions"

class SiteTable extends Component {

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
    render() {

        let rows = [];
        for (let site of this.props.sites) {
            rows.push(
                <SiteRow
                    pollutant={this.props.pollutant}
                    // onSiteClick={props.onSiteClick}
                    site={site} key={site.id}
                />
            );
        }
        if (rows.length < 1) {
            // rows = !props.filterText ? <tr><td className='loading_text'>Loading...</td></tr> :
            rows = <tr><td>No results found</td></tr>
        } else if (this.props.selectedRegions.concat(this.props.selectedEnvirons).length < 1) {
            rows = <tr><td>Search or something</td></tr>
        }
        console.log('this.props.sites.textSearch')
        console.log(this.props.textSearch)
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th className='th-main'><br/>
                        <TextSearchInput
                            textInput={this.props.textSearch}
                            handleTextChange={this.props.setTextInput}
                        />
                        <span className='time'>12/02/2020 07:00</span>
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
                {rows}
                </tbody>
            </Table>
        );
    };
}

const mapStateToProps = ({ sites }) => {

    return {
        sites: sites.sites,
        regions: sites.regions,
        environs: sites.environs,
        error: sites.error,
        isLoading: sites.loading,
        textSearch: sites.textSearch,
        selectedRegions: sites.selectedRegions,
        selectedEnvirons: sites.selectedEnvirons,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setTextInput: (val) => dispatch(setTextInput(val)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SiteTable);