import EventDashboard from "../../features/events/EventDashboard";
import TopNavbar from "../../features/nav/TopNavbar";
import { Container } from "semantic-ui-react";
import { useState } from "react";
import "./styles.css";

const App = () => {
  const [formOpen, setFormOpen] = useState(true);
  return (
    <>
      <TopNavbar handleSetForm={() => setFormOpen(true)} />
      <Container className="main">
        <EventDashboard
          formOpen={formOpen}
          handleSetForm={() => setFormOpen(false)}
        />
      </Container>
    </>
  );
};

export default App;
