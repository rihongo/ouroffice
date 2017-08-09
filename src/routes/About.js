/**
 * Created by rihongo on 2017. 7. 31..
 */
import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="body">
                {this.props.match.params.username} 의 소개
            </div>
        );
    }
}

export default About;
