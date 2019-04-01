import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class PadDetail extends React.Component {
    componentWillMount() {
        //Dispatch action
        const padId = this.props.match.params.id
        this.props.dispatch(actions.fetchPadById(padId));
    }

    render() {
        const pad = this.props.pad;
        return <div className="container">
            <h1>I am detail component {pad.title}</h1>
            <h2>{pad.category} in {pad.city}</h2>
            <h2>Near {pad.airport}</h2>
            <h3>Number of beds: {pad.beds}</h3>
            <p>{pad.description}</p>
            <h3>${pad.monthlyRate} per month</h3>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        pad: state.pad.data
    }
}

export default connect(mapStateToProps)(PadDetail)