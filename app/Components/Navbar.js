import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';

export default class Navbar extends React.Component {

    constructor(props, context) {
        super(props, context);
    };

    render() {
        return (
        	<div className={"ag-nav"}>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/">AriGonzo.com</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
        	</div>
        );
    }
}