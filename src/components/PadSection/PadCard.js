import React from "react";
import { Link } from "react-router-dom";
import "./PadSection.css";

export function PadCard(props) {
    const pad = props.pad;

    return (
        <div className="pad-card">
            <Link to={`pads/${pad.id}`}>
                <h4>{pad.city}</h4>
            </Link>
            <h2>{pad.title}</h2>
            <h4>{pad.description}</h4>
            <h5>${pad.monthlyRate} per month</h5>
        </div>
    );
}
