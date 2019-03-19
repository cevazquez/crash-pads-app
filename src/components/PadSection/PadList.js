import React from "react";
import { PadCard } from "./PadCard";
import { connect } from 'react-redux';

class PadList extends React.Component {
    renderPads = () => {
        return this.props.pads.map((pad, index) => {
            console.log(pad);
            return <PadCard key={index} pad={pad} />;
        });
    };

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
        pads: state.pads
    }
}

export default connect(mapStateToProps)(PadList)
