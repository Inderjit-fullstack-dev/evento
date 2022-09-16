import { useDispatch } from "react-redux";
import { Segment, Item, Icon, Button } from "semantic-ui-react";
import { setSelectedEvent } from "../../core/redux/slices/eventSlice";
import EventAtendees from "./EventAttendees";

const EventItem = ({ event }) => {
  const dispatch = useDispatch();
  const handleSelectEvent = (event) => {
    if (event) {
      dispatch(setSelectedEvent(event));
    }
  };

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image circular size="tiny" src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header as="h3">{event.title}</Item.Header>
              <Item.Extra>Hosted By: {event.hostedBy}</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {event.date}
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>
      {event?.attendees && (
        <Segment>
          <EventAtendees attendees={event.attendees} />
        </Segment>
      )}
      <Segment clearing>
        <p>{event.description}</p>
        <Button
          color="violet"
          size="tiny"
          content="Edit"
          floated="right"
          icon="edit"
          onClick={() => handleSelectEvent(event)}
        />
      </Segment>
    </Segment.Group>
  );
};

export default EventItem;
