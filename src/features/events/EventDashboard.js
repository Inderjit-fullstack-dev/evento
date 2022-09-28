import { useRef } from "react";
import { Grid, Segment, Sticky } from "semantic-ui-react";
import EventList from "./EventList";

const EventDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={5}>
        <Segment>
          <h1>Filters Section</h1>
        </Segment>
      </Grid.Column>
      <Grid.Column width={11}>
        <EventList />
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
