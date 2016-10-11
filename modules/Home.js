import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default React.createClass({
    render() {
        return (
            <div className="home-wrapper">
                <h1>Let's build something great together</h1>
                <div>
                    <Image height="200px" src="../img/ProfilePic.jpg" circle />
                </div>
            </div>
        );
    }
})

