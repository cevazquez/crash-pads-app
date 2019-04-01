import { FETCH_PADS, FETCH_PAD_BY_ID } from './types';

const pads = [
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
  ];

export const fetchPads = () => {
    return {
        type: FETCH_PADS,
        pads
    }
}

export const fetchPadById = (padId) => {
    const pad = pads.find((pad) => pad.id === padId);

    return {
        type: FETCH_PAD_BY_ID,
        pad
    }
}