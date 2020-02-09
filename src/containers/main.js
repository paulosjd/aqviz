import React, { Component } from 'react';
import { ReactSVG } from 'react-svg'
import { Row, Col } from 'reactstrap';

const pollutants = ['no2', 'pm10', 'pm25', 'ozone'];

const defaultFilters = {
    filterText: '',
};

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        // this.getChartData();
        // this.state.numChoices.forEach(num => this.getCalendarData(num))
    }

    render() {
        return (
                <Row>
                {/*<Col md={3}>*/}
                    {/*<h2>Hi there</h2>*/}
                    {/*<svg width="200" height="200">*/}
                        {/*<rect x="0" y="0" width="100" height="100" fill="#529fca" />*/}
                        {/*<g id="my-group">*/}
                            {/*<rect x="0" y="100" width="100" height="100" fill="#59fa81" />*/}
                            {/*<rect x="100" y="0" width="100" height="100" fill="#ad4a3d" />*/}
                        {/*</g>*/}
                    {/*</svg>*/}
                {/*</Col>*/}
                <Col md={8}>
                    <ReactSVG src="united-kingdom.svg"
                              beforeInjection={svg => {
                                  console.dir(svg)
                                  console.dir(svg.children)
                                  svg.setAttribute('style', 'width: 800px')


                                  // svg.classList.add('test-svg-class-name')
                                  // svg.setAttribute('style', 'width: 200px')
                              }}
                    />
                </Col>
                <Col md={4}>
                    <ReactSVG src="beacon.svg"
                              beforeInjection={svg => {

                                  svg.classList.add('test-svg-class-name')
                                  svg.setAttribute('style', 'width: 200px')
                              }}
                    />
                </Col>
                </Row>
        );
    }
}

export default MainContainer;