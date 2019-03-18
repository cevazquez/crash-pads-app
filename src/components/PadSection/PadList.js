import React, { Component } from 'react';
import { PadCard } from './PadCard';

export class PadList extends React.Component {
    constructor() {
        super();
        this.state = {
            pads: [1,2,3]
        }
    }

    renderPads = () => {
        return this.state.pads.map((pad, index) => {
            return <PadCard key={index} />
        })
    }

    render() {
        return (
            <div className="container">
                <h2>Where are you flying to?</h2>
                <div>
                    {this.renderPads()}
                </div>
            </div>
        )
    }
}