import { Segment, Item, Icon, Button } from "semantic-ui-react";
import EventAtendees from "./EventAttendees";

const EventItem = ({ event }) => {
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
      <Segment>
        <EventAtendees attendees={event.attendees} />
      </Segment>
      <Segment clearing>
        <p>{event.description}</p>
        <Button color="black" content="View" floated="right" />
      </Segment>
    </Segment.Group>
  );
};

export default EventItem;
