import React from 'react';

export class PadDetail extends React.Component {
    render() {
        return <div className="container">
        <h1>I am detail component {this.props.match.params.id}</h1>
        </div>
    }
}