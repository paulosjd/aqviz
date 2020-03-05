import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'reactstrap';
import MainContainer from './containers/main';
import {fetchSiteData, fetchSites, regionClick, resetSelectedSiteId} from "./store/actions";


class App extends Component {

    render() {
        let time;
        if (this.props.time) {
            const dt = new Date(this.props.time);
            time = dt.toLocaleDateString().concat(' ', dt.toLocaleTimeString().slice(0, 5))
        }
        return (
        <div className="App">
            <Navbar>
                <span className="nav-item">UK Air Quality Monitoring Network</span>
                <span className="mr-auto nav-item time">{time}</span>
                <a href='https://health.paulja.me' className="btn btn-info">Home</a>
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