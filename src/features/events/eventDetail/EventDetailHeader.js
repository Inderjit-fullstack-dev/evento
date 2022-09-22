import { Button, Header, Image, Item, Segment } from "semantic-ui-react";
const EventDetailHeader = () => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image src={`/assets/images/categoryImages/drinks.jpg`} fluid />

        <Segment basic>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header size="huge" content="Event Title" />
                <p>Event Date</p>
                <p>
                  Hosted by <strong>Bob</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="black">JOIN THIS EVENT</Button>

        <Button color="orange" floated="right">
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailHeader;
