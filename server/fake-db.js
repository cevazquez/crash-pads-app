const Pad = require("./models/pad");

class FakeDb {
  constructor() {
    this.pads = [
      {
        title: "Crystal City - DCA CrashPad",
        city: "Washington, D.C.",
        airport: "Ronald Reagan Washington National Airport",
        category: "Apartment",
        image: "https://via.placeholder.com/150",
        beds: 5,
        description:
          "5 spots available in our Crystal City crash pad, just 15 minutes away from DCA!",
        monthlyRate: 400
      },
      {
        title: "Rocky Mountain Crash Pad",
        city: "Denver, CO",
        airport: "Denver International Airport",
        category: "House",
        image: "https://via.placeholder.com/150",
        beds: 6,
        description:
          "Beautiful house in Denver is looking for some chill flight attendants and pilots. Only half an hour away from DIA.",
        monthlyRate: 500
      },
      {
        title: "LAX CrashPad",
        city: "Los Angeles, CA",
        airport: "Los Angeles International Airport",
        category: "Apartment",
        image: "https://via.placeholder.com/150",
        beds: 2,
        description:
          "Very limited space in this brand new crash pad located just 20 minutes from LAX! Amenities include washing machine and pool.",
        monthlyRate: 600
      }
    ];
  }

  async cleanDb() {
    await Pad.deleteMany({});
  }

  pushPadsToDb() {
    this.pads.forEach(pad => {
      const newPad = new Pad(pad);

      newPad.save();
    });
  }

  seeDb() {
    this.cleanDb();
    this.pushPadsToDb();
  }
}

module.exports = FakeDb;
