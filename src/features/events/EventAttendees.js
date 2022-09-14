import { List, Image } from "semantic-ui-react";
const EventAtendees = ({ attendees }) => {
  return (
    <List horizontal>
      {attendees &&
        attendees.map((attendee) => (
          <List.Item key={attendee.id}>
            <Image
              circular={true}
              src={attendee.photoURL}
              size="mini"
              title={attendee.name}
            />
          </List.Item>
        ))}
    </List>
  );
};

export default EventAtendees;
