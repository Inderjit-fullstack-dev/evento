import { Grid } from "semantic-ui-react";
import EventForm from "./EventForm";
import EventList from "./EventList";
import { sampleData } from "../../core/services/sampleData";
import { useState } from "react";
import uuid from "react-uuid";

const EventDashboard = (props) => {
  const [events, setEvents] = useState(sampleData);
  const handleFormSubmit = (data) => {
    setEvents([{ id: uuid(), ...data }, ...events]);
  };
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventForm
          {...props}
          handleSetForm={props.handleSetForm}
          onFormSubmit={(data) => handleFormSubmit(data)}
        />
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
