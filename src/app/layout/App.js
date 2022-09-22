import EventDashboard from "../../features/events/EventDashboard";
import TopNavbar from "../../features/nav/TopNavbar";
import { Container } from "semantic-ui-react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import EventForm from "../../features/events/EventForm";
import EventDetailPage from "../../features/events/eventDetail/EventDetailPage";
import PageNotFound from "../../features/errors/PageNotFound";
import Login from "../../features/auth/Login";
import Signup from "../../features/auth/Signup";
import "./styles.css";

const App = () => {
  const [formOpen, setFormOpen] = useState(true);
  return (
    <>
      <TopNavbar handleSetForm={() => setFormOpen(true)} />
      <Container className="main">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <EventDashboard
                formOpen={formOpen}
                handleSetForm={() => setFormOpen(false)}
              />
            }
          />
          <Route path="/events/create" element={<EventForm />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
