import EventItem from "./EventItem";

const EventList = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <EventItem event={event} key={event.id} />
      ))}
    </>
  );
};

export default EventList;
