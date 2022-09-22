import { Item, Segment } from "semantic-ui-react";
const EventDetailSidebar = () => {
  return (
    <>
      <Segment
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="violet"
      >
        People who're also joining
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          <Item style={{ position: "relative" }}>
            <Item.Image size="mini" src="/assets/images/user.png" avatar />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h5">
                <p>Tom</p>
              </Item.Header>
              <p>Some description</p>
            </Item.Content>
          </Item>
          <Item style={{ position: "relative" }}>
            <Item.Image size="mini" src="/assets/images/user.png" avatar />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h5">
                <p>Bob</p>
              </Item.Header>
              <p>Some description</p>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </>
  );
};

export default EventDetailSidebar;
