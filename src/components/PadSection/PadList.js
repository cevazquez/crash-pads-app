import React from "react";
import { PadCard } from "./PadCard";
import { connect } from 'react-redux';

import * as actions from '../../actions';

class PadList extends React.Component {
    renderPads = () => {
        return this.props.pads.map((pad, index) => {
            console.log(pad);
            return <PadCard key={index} pad={pad} />;
        });
    };

    componentWillMount() {
        this.props.dispatch(actions.fetchPads());
    }

    render() {
        return (
            <div className="container">
                <h2>Where are you flying to?</h2>
                <div className="container">{this.renderPads()}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pads: state.pads.data
    }
}

export default connect(mapStateToProps)(PadList)
