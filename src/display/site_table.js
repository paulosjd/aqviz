import React, { Component } from "react"
import { Table } from "reactstrap"
import { connect } from "react-redux"
import PollutantSelect from '../form/poll_select'
import SiteRow from "./site_row"
import TextSearchInput from '../form/text_search'
import { setTextInput } from "../store/actions"

class SiteTable extends Component {

    render() {
        let rows = [];
        const filteredSites = this.props.filteredSites;
        if (filteredSites.length < 1) {
            rows = <tr><td > </td><td className='value_cell'> </td></tr>
        } else {
            for (let site of filteredSites) {
                if (site[this.props.pollutant]) {
                    rows.push(
                        <SiteRow
                            hoverSiteCode={this.props.hoverSiteCode}
                            pollutant={this.props.pollutant}
                            site={site} key={site.id}
                        />
                    );
                }
            }
        }
        return (
            <Table striped bordered hover>
                <thead>
                <tr className='oa_ignore'>
                    <th className='th-main oa_ignore'>
                        <TextSearchInput
                            textInput={this.props.textSearch}
                            handleTextChange={this.props.setTextInput}
                        />
                        <span className='time oa_ignore'>12/02/2020 07:00</span>
                    </th>
                    <th id="pm10_header oa_ignore">
                        <PollutantSelect
                            pollutant={'pm10'}
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

const mapStateToProps = ({ sites, aqData }) => {

    return {
        sites: sites.sites,
        regions: sites.regions,
        environs: sites.environs,
        pollutant: aqData.pollutant,
        error: sites.error,
        isLoading: sites.loading,
        textSearch: sites.textSearch,
        selectedRegions: sites.selectedRegions,
        selectedEnvirons: sites.selectedEnvirons,
        hoverSiteCode: sites.hoverSiteCode,
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