import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "./style.css";
const Calender = props => {
  // const [date, setDate] = useState(new Date());
  // const [view, setView] = useState("month");

  const [events, setEvents] = useState([
    { title: "task one", date: new Date() },
    { title: "task two", date: new Date() },
    { title: "task three", date: new Date() },
    { title: "task four", date: new Date() }
  ]);

  const [showYearView, setShowYearView] = useState(false);

  return (
    <div className={`calender__container ${showYearView ? "hide_view" : ""}`}>
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin]}
        events={events}
        customButtons={{
          yearViewButton: {
            text: "Year",
            click: function() {
              setShowYearView(true);
            }
          }
        }}
        viewDisplay={() => console.log("VIEW CHANGED")}
        viewSkeletonRender={() => setShowYearView(false)}
        header={{
          left: "prev,today, next",
          center: "title timeGridFourDay",
          right: "timeGridDay,timeGridWeek, dayGridMonth, yearViewButton"
        }}
      />
      {showYearView && (
        <div className="year-view">
          <p onClick={() => FullCalendar.changeView("dayGridMonth")}>January</p>
          <p>February</p>
          <p>March</p>
          <p>April</p>
          <p>May</p>
          <p>June</p>
          <p>July</p>
          <p>August</p>
          <p>September</p>
          <p>October</p>
          <p>November</p>
          <p>December</p>
        </div>
      )}
    </div>
  );
};

export default Calender;
