import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'reactstrap';
import MainContainer from './containers/main';
import TopNav from './display/top_nav'

class App extends Component {

    render() {
        return (
        <div className="App">
            <TopNav time={this.props.time} />
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