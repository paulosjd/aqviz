import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg'
import { Row, Col, Spinner, ListGroup, ListGroupItem } from 'reactstrap';
import { fetchSites, regionClick } from '../store/actions';
import SiteTable from '../display/site_table';
import FilterItems from './filter_items';
import {ENVIRON_CLICK, REGION_CLICK} from "../store/constants";


class MainContainer extends Component {

    componentDidMount() {
        this.props.fetchSites();
    }

    render() {
        console.log(this.props.sites)
        return (
            <Row>
                <Col md={6}>
                    <div className='page-title'>UK Air Quality Data</div>
                        { this.props.isLoading ? <Spinner color="secondary sum-spin"/> :
                            <FilterItems
                                regions={this.props.regions}
                                environs={this.props.environs}
                            /> }
                        <SiteTable />
                </Col>
                <Col md={6}>
                    <div className='overview-map'>
                        <ReactSVG src="uk2.svg"
                                  onClick={(e) => {
                                      const title = e.target.attributes.title;
                                      if (title && this.props.regions.includes(title.value)) {
                                          this.props.regionClick(title.value)
                                      }
                                  }}
                                  beforeInjection={svg => {
                                      // console.dir(svg)
                                      // for (let child of svg.children){
                                      //     const title = child.attributes.title;
                                      //     if (title && this.props.regions.includes(title.value)) {
                                      //         console.log(title)
                                      //     }
                                      // }

                                        // is object like 5: <path id="GB-UKL-24" d="m 2 ...
                                        // can dig out selected one and setAttribute (e.g. color) on it?
                                      svg.setAttribute("transform", "scale(0.5) translate(-225 -515.5)");
                                  }}

                                  // TODO - some kind of listener for changes to selectedRegions - svg.Set or Removeattributes accordingly

                                  afterInjection={(err, svg) => {
                                      console.log(svg)
                                      for (let child of svg.children){
                                          const title = child.attributes.title;
                                          if (title && this.props.selectedRegions.includes(title.value)) {
                                              console.log(title)
                                              child.setAttribute('style', 'fill: #ffd781')
                                              // svg.classList.add('svg-class-name')
                                              // svg.setAttribute('style', 'width: 200px')
                                          }
                                      }
                                  }}
                        />
                    </div>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = ({ sites }) => {

    return {
        sites: sites.sites,
        regions: sites.regions,
        selectedRegions: sites.selectedRegions,
        environs: sites.environs,
        error: sites.error,
        isLoading: sites.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSites: () => dispatch(fetchSites()),
        regionClick: (val) => dispatch(regionClick(val))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);