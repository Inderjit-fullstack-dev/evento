import { useState } from "react";
import { Segment, Header, Form, Button } from "semantic-ui-react";

const EventForm = ({ formOpen, handleSetForm }) => {
  const initialState = {
    name: "",
    date: "",
    city: "",
    venue: "",
    description: "",
    category: "",
  };
  const [values, setValues] = useState(initialState);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = () => {
    console.log(values);
  };
  return (
    formOpen && (
      <Segment clearing={true}>
        <Header content="Create new Event" />
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              value={values.category}
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={values.date}
              onChange={handleInputChange}
              placeholder=""
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={values.city}
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="venue">Venue</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={values.venue}
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={values.description}
              onChange={handleInputChange}
              style={{ resize: "none" }}
              rows={2}
            />
          </Form.Field>
          <Button content="Close" floated="right" onClick={handleSetForm} />
          <Button color="black" content="Add Event" floated="right" />
        </Form>
      </Segment>
    )
  );
};

export default EventForm;
