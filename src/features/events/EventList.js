import { Message } from "semantic-ui-react";
import EventItem from "./EventItem";

const EventList = ({ events }) => {
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
