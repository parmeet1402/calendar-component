import React, { useState } from "react";
import { Calendar, momentLocalizer, Navigate } from "react-big-calendar";
import events from "../Calendar2/events";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./style.css";
const Toolbar = props => {
  console.log(props);
  return (
    <h1 onClick={() => props.onNavigate(props.date, "PREV")}>{props.label}</h1>
  );
};
const EventModalDialog = props => {
  const localizer = momentLocalizer(moment);
  const formats = {
    dayHeaderFormat: "Do MMM YYYY"
  };

  let components = {
    toolbar: Toolbar
  };
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="event-modal-dialog__container">
      <div className="event-modal-dialog__container--left">
        <Calendar
          components={components}
          localizer={localizer}
          events={events}
          toolbar={true}
          view="day"
          views={{
            day: true
          }}
          date={selectedDate}
          formats={formats}
          // messages={{ year: "Year" }}
        />
      </div>
      <div className="event-modal-dialog__container--right">
        <h3>Review W/o</h3>
        <span>12:00/13:00</span>
        <p>
          sdafasd sdakfdasf sdafsa fdsakfa dsafkdasfdas dsafdamsf adslfdsanfjds
          fsdakjf dsajfkdsakfndsakjfdas fksad fjkas jfdksaj fkjsad jkf sadjf kjs
        </p>
      </div>
    </div>
  );
};

export default EventModalDialog;
