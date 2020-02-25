import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Spinner } from 'reactstrap';
import { fetchSites, regionClick, resetSelectedSiteId, fetchSiteData } from '../store/actions';
import SiteTable from '../display/site_table';
import RegionsMap from '../display/regions_map'
import FilterItems from './filter_items';
import TimeSeriesChart from '../display/line_chart'
import OutsideAction from '../utils/outside_action'

class MainContainer extends Component {

    componentDidMount() {
        this.props.fetchSites();
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSiteId !== prevProps.selectedSiteId) {
            if (!this.props.siteData.hasOwnProperty(this.props.selectedSiteId)) {
                this.props.fetchSiteData(this.props.selectedSiteId);
            }
        }
    }

    getFilteredSites = () =>{
        let sites = [...this.props.sites];
        const [envEmpty, regEmpty] = [this.props.selectedEnvirons.length < 1, this.props.selectedRegions.length < 1];
        if (envEmpty && regEmpty && this.props.textSearch.length < 1){
            return []
        }
        if (this.props.highFilter) {
            sites.sort((a, b) => a[this.props.pollutant] - b[this.props.pollutant]);
            if (this.props.highFilter === 'low') {
                sites = sites.slice(0,10)
            } else {sites = sites.slice(-10).reverse()}
        }
        return sites.filter((site) => {
            return (
                site.name.toLowerCase().indexOf(this.props.textSearch.toLowerCase()) > -1 &&
                (envEmpty || this.props.selectedEnvirons.includes(site.environ)) &&
                (regEmpty || this.props.selectedRegions.includes(site.region)))
        });
    };

    render() {

        console.log('this.props.chartData')
        console.log(this.props.chartData)
        console.log(this.props.selectedSiteId)
        const filteredSites = this.getFilteredSites();
        let siteName = '';
        const siteInd = filteredSites.findIndex(x => x.id === this.props.selectedSiteId);
        if (siteInd > -1) {
            siteName = filteredSites[siteInd].name
        }
        return (
            <Row>
                <Col md={4}>
                    <div className='overview-map'>
                        <RegionsMap
                            regions={this.props.regions}
                            selectedRegions={this.props.selectedRegions}
                            regionClick={this.props.regionClick}
                            filteredSites={filteredSites}
                            pollutant={this.props.pollutant}
                        />
                    </div>
                </Col>
                <Col md={8}>
                    { this.props.isLoading ? <Spinner color="secondary sum-spin"/> :
                        <FilterItems
                            regions={this.props.regions}
                            environs={this.props.environs}
                        /> }
                    { this.props.selectedSiteId ?
                        <OutsideAction
                            ignoreClasses={['row_site_name', 'site-mark', 'pollutant_select']}
                            action={() => this.props.resetSelectedSiteId()}
                        >
                            <TimeSeriesChart
                                chartData={this.props.chartData}
                                timeSpan={this.props.chartTimeSpan}
                                siteName={siteName}
                            />
                        </OutsideAction> : null }
                    <SiteTable filteredSites={filteredSites} />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = ({ sites, aqData }) => {

    const chartData = {};
    const selectedSiteData = aqData.siteData[sites.selectedSiteId];
    if (selectedSiteData) {
        selectedSiteData.forEach((obj) => {
            chartData[obj.time] = obj[aqData.pollutant]
        })
    }

    return {

        siteData: aqData.siteData,

        sites: sites.sites,
        regions: sites.regions,
        selectedRegions: sites.selectedRegions,
        selectedEnvirons: sites.selectedEnvirons,
        selectedSiteId: sites.selectedSiteId,
        chartData: chartData,
        chartTimeSpan: aqData.chartTimeSpan,
        textSearch: sites.textSearch,
        environs: sites.environs,
        pollutant: aqData.pollutant,
        error: sites.error,
        isLoading: sites.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSites: () => dispatch(fetchSites()),
        regionClick: (val, arg) => dispatch(regionClick(val, arg)),
        resetSelectedSiteId: () => dispatch(resetSelectedSiteId()),
        fetchSiteData: (val) => dispatch(fetchSiteData(val)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);