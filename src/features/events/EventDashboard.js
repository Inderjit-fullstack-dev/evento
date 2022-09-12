import { Grid } from "semantic-ui-react";
import EventForm from "./EventForm";
import EventList from "./EventList";
import { sampleData } from "../../core/services/sampleData";
const EventDashboard = (props) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={sampleData} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventForm {...props} handleSetForm={props.handleSetForm} />
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
