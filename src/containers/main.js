import React, { Component } from 'react';
import { ReactSVG } from 'react-svg'
import { Row, Col } from 'reactstrap';


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
                <Col md={5}>
                    <h3>UK Air Quality Measurements</h3>

                </Col>
                <Col md={7}>
                    <div className='overview-map'>
                        <ReactSVG  src="uk2.svg"
                                  beforeInjection={svg => {
                                      console.dir(svg)
                                      console.dir(svg.children)
                                      svg.setAttribute("transform", "scale(0.5) translate(-225 -515.5)");
                                  }}
                        />
                    </div>
                </Col>
            </Row>
        );
    }
}

export default MainContainer;