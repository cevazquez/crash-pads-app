import React from "react";
import { PadCard } from "./PadCard";

export class PadList extends React.Component {
  renderPads = () => {
    return this.props.pads.map((pad, index) => {
      return <PadCard key={index} pad={pad} />;
    });
  };

  render() {
    return <div className="container">{this.renderPads()}</div>;
  }
}
