import React, { useState } from "react";
import { Calendar, momentLocalizer, Navigate } from "react-big-calendar";
// import Calendar from "react-big-calendar";
import events from "./events";
import moment from "moment";
import Year from "./Year";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import EventModalDialog from "../EventModalDialog/index";
import "./style.css";

const Calendar2 = props => {
  const localizer = momentLocalizer(moment);
  const [view, setView] = useState("month");
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <div className="big-calendar__wrapper">
        <Calendar
          localizer={localizer}
          events={events}
          toolbar={true}
          views={{
            day: true,
            week: true,
            month: true,
            year: Year
          }}
          view={view}
          onView={view => setView(view)}
          date={selectedDate}
          onNavigate={day => {
            setSelectedDate(day);
          }}
          onRangeChange={e => console.log("RANGE CHANGED", e)}
          onSelectSlot={() => console.log("ON SELECT SLOT")}
          onSelecting={() => console.log("ON SELECTING")}
          messages={{ year: "Year" }}
          onSelectDate={e => console.log("ON SELECT DAY", e)}
        />
      </div>
      {/* <EventModalDialog /> */}
    </>
  );
};

export default Calendar2;
