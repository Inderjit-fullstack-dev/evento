import EventDashboard from "../../features/events/EventDashboard";
import TopHeader from "../../features/nav/TopNavbar";
import { Container } from "semantic-ui-react";
import "./styles.css";

const App = () => {
  return (
    <>
      <TopHeader />
      <Container className="main">
        <EventDashboard />
      </Container>
    </>
  );
};

export default App;
