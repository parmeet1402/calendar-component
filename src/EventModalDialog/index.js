import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Navigate } from "react-big-calendar";
import events from "../Calendar2/events";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./style.css";
const Toolbar = ({ setSelectedDate, selectedDate }) => props => {
  const goBack = () => {
    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() - 1)));
  };

  const goForward = () => {
    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() + 1)));
  };

  return (
    <>
      <h1 style={{ cursor: "pointer" }} onClick={goBack}>
        Left
      </h1>
      <h1>{props.label}</h1>
      <h1 style={{ cursor: "pointer" }} onClick={goForward}>
        Right
      </h1>
    </>
  );
};
const EventModalDialog = props => {
  const localizer = momentLocalizer(moment);
  const formats = {
    dayHeaderFormat: "Do MMM YYYY"
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState();
  const [todaysEvent, setTodaysEvent] = useState([]);
  useEffect(() => {
    setTodaysEvent(findEventsForTheDay(selectedDate));
  }, []);

  useEffect(() => {
    setTodaysEvent(findEventsForTheDay(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    if (todaysEvent.length === 0) {
      setSelectedEvent();
    } else {
      setSelectedEvent(todaysEvent[0]);
    }
  }, [todaysEvent]);

  let components = {
    toolbar: Toolbar({ setSelectedDate, selectedDate })
  };

  const findEventsForTheDay = date => {
    return events.filter(
      item =>
        item.start.getDate() === date.getDate() &&
        item.start.getMonth() === date.getMonth() &&
        item.start.getFullYear() === date.getFullYear()
    );
  };

  const getTimeString = date => `${date.getHours()}:${date.getMinutes()}`;

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
          onSelectEvent={e => setSelectedEvent(e)}
          // messages={{ year: "Year" }}
        />
      </div>
      {todaysEvent.length === 0 ? (
        <div className="event-modal-dialog__container--right">
          <span>No events for the day</span>
        </div>
      ) : selectedEvent ? (
        <div className="event-modal-dialog__container--right">
          <h3>{selectedEvent["title"]}</h3>
          <span>
            {getTimeString(selectedEvent["start"])}/
            {getTimeString(selectedEvent["end"])}
          </span>
          <p>{selectedEvent["description"]}</p>
        </div>
      ) : (
        <div className="event-modal-dialog__container--right">
          <span>Please select an event for the day</span>
        </div>
      )}
    </div>
  );
};

export default EventModalDialog;
