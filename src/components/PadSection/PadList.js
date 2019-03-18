import React, { Component } from "react";
import { PadCard } from "./PadCard";

export class PadList extends React.Component {
    constructor() {
        super();
        this.state = {
            pads: [
                {
                    id: "1",
                    title: "Downtown Apartment",
                    city: "New York",
                    airport: "JFK Airport",
                    category: "apartment",
                    beds: 3,
                    description: "Very nice apartment",
                    monthlyRate: 700,
                    shared: false,
                    createdAt: "24/12/2017"
                },
                {
                    id: "2",
                    title: "Brooklyn Apartment",
                    city: "Brooklyn",
                    airport: "LaGuardia Airport",
                    category: "apartment",
                    beds: 7,
                    description: "Apartment in Brooklyn",
                    monthlyRate: 600,
                    shared: false,
                    createdAt: "24/10/2017"
                },
                {
                    id: "3",
                    title: "House in Denver",
                    city: "Denver",
                    airport: "DIA",
                    category: "house",
                    beds: 4,
                    description: "House close to Denver airport",
                    monthlyRate: 750,
                    shared: false,
                    createdAt: "24/09/2017"
                },
                {
                    id: "4",
                    title: "Los Angeles apartment",
                    city: "Los Angeles, California",
                    airport: "LA Airport",
                    category: "apartment",
                    beds: 9,
                    description: "An apartment in Los Angeles",
                    monthlyRate: 600,
                    shared: false,
                    createdAt: "24/01/2017"
                }
            ]
        };
    }

    renderPads = () => {
        return this.state.pads.map((pad, index) => {
            console.log(pad);
            return <PadCard key={index} />;
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
