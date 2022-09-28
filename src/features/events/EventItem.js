import { useState } from "react";
import { useDispatch } from "react-redux";
import { Segment, Item, Icon, Button, Confirm } from "semantic-ui-react";
import {
  deleteEvent,
  setSelectedEvent,
} from "../../core/redux/slices/eventSlice";
import EventAtendees from "./EventAttendees";
import { format } from "date-fns";

const EventItem = ({ event }) => {
  const [confirmShow, setConfirmShow] = useState(false);
  const dispatch = useDispatch();
  const handleSelectEvent = (event) => {
    if (event) {
      dispatch(setSelectedEvent(event));
    }
  };

  const handleDeleteEvent = (event) => {
    dispatch(deleteEvent(event.id));
    setConfirmShow(false);
  };

  return (
    <>
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
            <Icon name="clock" /> {format(event.date, "MMMM d, yyyy hh:mm a")}
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
            color="black"
            size="tiny"
            content="Edit"
            icon="edit"
            onClick={() => handleSelectEvent(event)}
          />
          <Button
            color="google plus"
            size="tiny"
            content="Delete"
            icon="delete"
            onClick={() => setConfirmShow(true)}
          />
        </Segment>
      </Segment.Group>
      <Confirm
        open={confirmShow}
        content="Are you sure to delete it?"
        onCancel={() => setConfirmShow(false)}
        onConfirm={() => handleDeleteEvent(event)}
      />
    </>
  );
};

export default EventItem;
