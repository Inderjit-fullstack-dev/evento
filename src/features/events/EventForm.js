import { Segment, Header, Form, Button } from "semantic-ui-react";

const EventForm = () => {
  return (
    <Segment clearing={true}>
      <Header content="Create new Event" />
      <Form>
        <Form.Field>
          <select>
            <option>Choose Event Cateogry</option>
            <option>Entertainment</option>
          </select>
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Event Name" />
        </Form.Field>
        <Form.Field>
          <input type="date" placeholder="Event Date" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="City" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue" />
        </Form.Field>
        <Form.Field>
          <textarea
            placeholder="Description"
            style={{ resize: "none" }}
            rows={3}
          />
        </Form.Field>
        <Button content="Clear" floated="right" />
        <Button color="violet" content="Add Event" floated="right" />
      </Form>
    </Segment>
  );
};

export default EventForm;
