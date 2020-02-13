import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg'
import { Row, Col, Spinner, ListGroup, ListGroupItem } from 'reactstrap';
import { fetchSites } from '../store/actions';
import SiteTable from '../display/site_table';
import FilterItems from './filter_items';


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
                                  onMouseOver={(e) => console.log(e)}
                                  beforeInjection={svg => {
                                      console.dir(svg)
                                      // console.dir(svg.children)
                                        // is object like 5: <path id="GB-UKL-24" d="m 2 ...
                                        // can dig out selected one and setAttribute (e.g. color) on it?
                                      svg.setAttribute("transform", "scale(0.5) translate(-225 -515.5)");
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
        environs: sites.environs,
        error: sites.error,
        isLoading: sites.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSites: () => dispatch(fetchSites()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);