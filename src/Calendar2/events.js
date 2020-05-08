const now = new Date();

export default [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
    deescription: "sdaf"
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
    description: "safsadfdsafdsa"
  },

  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
    description: "safsadfdsafdsa"
  },

  {
    id: 3,
    title: "DTS ENDS",
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
    description: "safsadfdsafdsa"
  },

  {
    id: 4,
    title: "Some Event",
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 10, 0, 0, 0),
    description: "safsadfdsafdsa"
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: "Big conference for important people",
    description: "safsadfdsafdsa"
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting",
    description: "safsadfdsafdsa"
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: "Power lunch",
    description: "safsadfdsafdsa"
  },
  {
    id: 8,
    title: "Meeting",
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
    description: "safsadfdsafdsa"
  },
  {
    id: 9,
    title: "Happy Hour",
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: "Most important meal of the day",
    description: "safsadfdsafdsa"
  },
  {
    id: 10,
    title: "Dinner",
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
    description: "safsadfdsafdsa"
  },
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
    description: "safsadfdsafdsa"
  },
  {
    id: 12,
    title: "Late Night Event",
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0),
    description: "safsadfdsafdsa"
  },
  {
    id: 12.5,
    title: "Late Same Night Event",
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 17, 23, 30, 0),
    description: "safsadfdsafdsa"
  },
  {
    id: 13,
    title: "Multi-day Event",
    start: new Date(2015, 3, 20, 19, 30, 0),
    end: new Date(2015, 3, 22, 2, 0, 0),
    description: "safsadfdsafdsa"
  },
  {
    id: 14,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() - 3)),
    desc: "Most important meal of the day",
    description: "safsadfdsafdsa"
  },
  {
    id: 15,
    title: "Point in Time Event",
    start: now,
    // end: now,
    description: "safsadfdsafdsa"
  },
  {
    id: 15,
    title: "Point in Time Event",
    start: now,
    // end: now,
    description: "safsadfdsafdsa"
  },
  {
    id: 15,
    title: "Point in Time Event",
    start: now,
    // end: now,
    description: "safsadfdsafdsa"
  },
  {
    id: 15,
    title: "Point in Time Event",
    start: now,
    // end: now,
    description: "safsadfdsafdsa"
  },
  {
    id: 15,
    title: "Point in Time Event",
    start: now,
    // end: now,
    description: "safsadfdsafdsa"
  },
  {
    id: 15,
    title: "Point in Time Event",
    start: now,
    // end: now,
    description: "safsadfdsafdsa"
  },
  {
    id: 15,
    title: "Point in Time Event",
    start: now,
    end: now,
    description: "safsasa"
  },
  {
    id: 16,
    title: "Video Record",
    start: new Date(new Date().setDate(new Date().getDate() - 1)),
    end: new Date(new Date().setDate(new Date().getDate() - 1)),
    description: "safsadfdsafdsa"
  },
  {
    id: 17,
    title: "Dutch Song Producing",
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
    description: "safsadfdsafdsa"
  },
  {
    id: 18,
    title: "Itaewon Halloween Meeting",
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 17, 30, 0),
    description: "safsadfdsafdsa"
  },
  {
    id: 19,
    title: "Online Coding Test",
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 20, 30, 0),
    description: "safsadfdsafdsa"
  },
  {
    id: 20,
    title: "An overlapped Event",
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
    description: "safsadfdsafdsa"
  },
  {
    id: 21,
    title: "Phone Interview",
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
    description: "safsadfdsafdsa"
  },
  {
    id: 22,
    title: "Cooking Class",
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
    description: "safsadfdsafdsa"
  },
  {
    id: 23,
    title: "Go to the gym",
    start: new Date(2015, 3, 14, 18, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
    description: "safsadfdsafdsa"
  }
];
