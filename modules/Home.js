import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default React.createClass({
    render() {
        return (
            <div className="home-wrapper Row">
                <div className="col-sm-8 col-sm-push-4 col-md-8">
                <h1>Let's build something great together.</h1>
                <p>Hi, I'm Katie.</p> 
                <p>Hiker. Explorer. Foodie. Software Engineer.</p>
                <p>Born in Kentucky, raised in Seattle, and living in San Diego, 
                I have experience with a variety of cultures and perspectives. 
                Currently, I am a Senior studying Computer Science and Business 
                Administration at University of San Diego after a year abroad studying in Madrid, Spain.</p>
                <p>I am intrigued by technology, traveling, hiking, non-profits, animals, golf, and good food.</p>
                <p>I plan to surround myself with those who bring out the best in me, work hard towards my aspirations, and produce the impossible.</p>
                <p><a href="https://www.linkedin.com/in/katielevy1">Say hi to me on LinkedIn</a></p>
                </div>
                <div className="col-sm-4 col-sm-pull-8 col-md-4">
                    <Image width="100%" src="../img/ProfilePic.jpg" circle />
                </div>
            </div>
        );
    }
})

