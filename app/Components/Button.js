import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';

export default class Button extends React.Component {

    constructor(props, context) {
        super(props, context);
    };

    render() {
        return (
            <Link to={this.props.href}>
                <button className={`btn btn-primary ag-button`}>{this.props.text}</button>
            </Link>
        );
    }
}