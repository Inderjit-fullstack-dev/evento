import { Formik, Form } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Segment, Header, Button, Grid } from "semantic-ui-react";
import { addEvent, setSelectedEvent } from "../../core/redux/slices/eventSlice";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { sampleData } from "../../core/services/sampleData";
import TextBox from "../common/UI/TextboxControl";
import Textarea from "../common/UI/TextareaControl";
import SelectControl from "../common/UI/SelectControl";
import DateTimeInput from "../common/UI/DateTimeControl";

const EventForm = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const selectedEvent = useSelector((state) => state.event.selectedEvent);

  const initialState = {
    title: "",
    date: new Date(),
    city: "",
    venue: "",
    description: "",
    category: "",
  };

  const categoryData = [
    { key: "drinks", text: "Drinks", value: "drinks" },
    { key: "culture", text: "Culture", value: "culture" },
    { key: "film", text: "Film", value: "film" },
    { key: "food", text: "Food", value: "food" },
    { key: "music", text: "Music", value: "music" },
    { key: "travel", text: "Travel", value: "travel" },
  ];

  const eventFormSchema = Yup.object().shape({
    category: Yup.string().required("The field is required."),
    title: Yup.string()
      .min(5, "The title too short.")
      .max(100, "The title too long.")
      .required("The field is required."),
    date: Yup.date("Invalid date.").required("The field is required."),
    city: Yup.string()
      .max(50, "The city too long.")
      .required("The field is required."),
    venue: Yup.string()
      .max(100, "The Venue too long.")
      .required("The field is required."),
    description: Yup.string().max(
      255,
      "The Description is too long, only 255 characters are allowed."
    ),
  });

  useEffect(() => {
    if (params && params?.id && sampleData.length > 0) {
      const event = sampleData.find((x) => x.id === params.id);
      if (event) {
        dispatch(setSelectedEvent(event));
      }
    }
  }, [params, dispatch]);

  const getFormLabel = () => {
    return selectedEvent ? "Update" : "Add";
  };

  return (
    <Segment clearing={true}>
      <Header content={`${getFormLabel()} Event`} />
      <Formik
        initialValues={initialState}
        validationSchema={eventFormSchema}
        onSubmit={(values) => {
          if (!selectedEvent) {
            dispatch(addEvent(values));
          }
        }}
      >
        <Form className="ui form" autoComplete="false" autoSave="false">
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <TextBox name="title" type="text" label="Title" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <SelectControl
                  name="category"
                  label="Category"
                  options={categoryData}
                />
              </Grid.Column>
              <Grid.Column>
                <DateTimeInput
                  name="date"
                  label="Date"
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeCaption="Time"
                  dateFormat="MMMM d, yyyy hh:mm a"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <TextBox name="city" type="text" label="City" />
              </Grid.Column>
              <Grid.Column>
                <TextBox name="venue" type="text" label="Venue" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Textarea
                  label="Description"
                  name="description"
                  rows={2}
                  style={{ resize: "none" }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Button
                  color="black"
                  type="submit"
                  content="Save"
                  floated="right"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Formik>
    </Segment>
  );
};

export default EventForm;
