import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventAtendees from "./EventAttendees";

const EventItem = () => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image circular size="tiny" src="/assets/images/user.png" />
            <Item.Content>
              <Item.Header as="h3">Event Name</Item.Header>
              <Item.Extra>Hosted By: Inderjit Singh</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          <Icon name="marker" />
        </span>
      </Segment>
      <Segment>
        <EventAtendees />
      </Segment>
      <Segment clearing>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <Button color="black" content="View" floated="right" />
      </Segment>
    </Segment.Group>
  );
};

export default EventItem;
