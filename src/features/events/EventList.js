import { Message } from "semantic-ui-react";
import EventItem from "./EventItem";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "../../core/redux/slices/eventSlice";
import { sampleData } from "../../core/services/sampleData";
import { useEffect } from "react";

const EventList = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.events);
  useEffect(() => {
    dispatch(setEvents(sampleData));
  }, [dispatch]);
  return (
    <>
      {events.length === 0 && (
        <Message>
          <Message.Header>No Record Found</Message.Header>
          <p>Please come later when we have something for you!!!</p>
        </Message>
      )}
      {events &&
        events.map((event, index) => <EventItem event={event} key={index} />)}
    </>
  );
};

export default EventList;
