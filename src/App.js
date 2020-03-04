import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'reactstrap';
import MainContainer from './containers/main';
import {fetchSiteData, fetchSites, regionClick, resetSelectedSiteId} from "./store/actions";


class App extends Component {

    render() {
        return (
        <div className="App">
            <Navbar>
                <span className="nav-item">UK Air Quality Monitoring Network</span>
                <span className="mr-auto nav-item">{this.props.time}</span>
                <button
                    type="button" className=""
                    onClick={(e) => {console.log(e)
                    }}
                >Logout</button>
            </Navbar>
            <MainContainer />
        </div>
        )
    }
}

const mapStateToProps = ({ sites, aqData }) => {
    return {
        time: sites.time,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);