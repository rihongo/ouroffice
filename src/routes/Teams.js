/**
 * Created by rihongo on 2017. 7. 31..
 */
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Team extends Component {
    render() {
        return (
            <div>
                <p>title: {this.props.match.params.title}</p>
                <p>id: {new URLSearchParams(this.props.location.search).get('id')}</p>
            </div>
        );
    }
}

class Teams extends Component {
    render() {
        return (
            <div className="body">
                <p>팀</p>
                <ul>
                    <li><Link to="/teams/first?id=1">First</Link></li>
                    <li><Link to="/teams/second?id=2">Second</Link></li>
                    <li><Link to="/teams/third?id=3">Third</Link></li>
                    <Route path="/teams/:title" component={Team} />
                </ul>
            </div>
        );
    }
}

export default Teams;