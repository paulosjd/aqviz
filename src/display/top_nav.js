import React from "react";
import { Navbar } from "reactstrap";

export default ({ time }) => {
    if (time) {
        const dt = new Date(time);
        time = dt.toLocaleDateString().concat(' ', dt.toLocaleTimeString().slice(0, 5))
    }
    return (
        <Navbar>
            <span className="nav-item">UK Air Quality Monitoring Network</span>
            <span className="mr-auto nav-item time">{time}</span>
            <a href='https://health.paulja.me' className="btn btn-info">Home</a>
        </Navbar>
    )
};