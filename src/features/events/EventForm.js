import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Segment, Header, FormField, Button } from "semantic-ui-react";
import { addEvent, updateEvent } from "../../core/redux/slices/eventSlice";

const EventForm = () => {
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

  useEffect(() => {
    if (selectedEvent) {
      setValues(selectedEvent);
    }
  }, [selectedEvent]);

  const getFormLabel = () => {
    return selectedEvent ? "Update" : "Create";
  };

  return (
    <Segment clearing={true}>
      <Header content={`${getFormLabel()} Event`} />
      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <FormField>
            <label htmlFor="category">Category</label>
            <Field type="text" name="category" id="category" />
          </FormField>
          <FormField>
            <label htmlFor="title">Title</label>
            <Field type="text" name="title" id="title" />
          </FormField>
          <FormField>
            <label htmlFor="date">Date</label>
            <Field type="date" name="date" id="date" />
          </FormField>
          <FormField>
            <label htmlFor="city">City</label>
            <Field type="text" name="city" id="city" />
          </FormField>
          <FormField>
            <label htmlFor="venue">Venue</label>
            <Field type="text" name="venue" id="venue" />
          </FormField>
          <FormField>
            <label htmlFor="description">Description</label>
            <Field
              as="textarea"
              rows={2}
              style={{ resize: "none" }}
              name="description"
              id="description"
            />
          </FormField>
          <Button
            type="submit"
            color="black"
            content={`${getFormLabel()} Event`}
            floated="right"
          />
        </Form>
      </Formik>
    </Segment>
  );
};

export default EventForm;
