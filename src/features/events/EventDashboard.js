import { useRef } from "react";
import { Grid, Segment, Sticky } from "semantic-ui-react";
import EventList from "./EventList";

const EventDashboard = () => {
  const contextRef = useRef();
  return (
    <Grid>
      <Grid.Column width={5}>
        <Segment>
          <Sticky context={contextRef}>
            <h1>Filters Section</h1>
          </Sticky>
        </Segment>
      </Grid.Column>
      <Grid.Column width={11}>
        <EventList />
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
