import React from "react";
import { PadList } from "./PadList";
import { connect } from 'react-redux';

import * as actions from 'actions';

class PadListing extends React.Component {

    componentWillMount() {
        this.props.dispatch(actions.fetchPads());
    }

    render() {
        return (
            <div className="container">
                <h2>Where are you flying to?</h2>
                <PadList pads={this.props.pads}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pads: state.pads.data
    }
}

export default connect(mapStateToProps)(PadListing)
