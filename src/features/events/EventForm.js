import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Segment, Header, Form, Button } from "semantic-ui-react";
import { addEvent, updateEvent } from "../../core/redux/slices/eventSlice";

const EventForm = ({ formOpen, handleSetForm, onFormSubmit }) => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) => state.event.selectedEvent);

  const initialState = {
    title: "",
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
    //onFormSubmit(values);
    if (selectedEvent) {
      dispatch(updateEvent({ id: values.id, data: values }));
    } else {
      dispatch(addEvent(values));
      setValues(initialState);
    }
  };

  useEffect(() => {
    if (selectedEvent) {
      setValues(selectedEvent);
    }
  }, [selectedEvent?.id]);

  const getFormLabel = () => {
    return selectedEvent ? "Update" : "Create";
  };

  return (
    formOpen && (
      <Segment clearing={true}>
        <Header content={`${getFormLabel()} Event`} />
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
            <label htmlFor="title">Name</label>
            <input
              type="text"
              name="title"
              id="title"
              value={values.title}
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
          <Button
            color="black"
            content={`${getFormLabel()} Event`}
            floated="right"
          />
        </Form>
      </Segment>
    )
  );
};

export default EventForm;
