import { Grid } from "semantic-ui-react";
import EventComments from "./EventComments";
import EventDetailHeader from "./EventDetailHeader";
import EventDetailInfo from "./EventDetailInfo";
import EventDetailSidebar from "./EventDetailSidebar";

const EventDetailPage = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <EventDetailHeader />
        <EventDetailInfo />
        <EventComments />
      </Grid.Column>
      <Grid.Column width={4}>
        <EventDetailSidebar />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailPage;
