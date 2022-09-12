import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import TopHeader from "../../features/nav/TopNavbar";
import "./styles.css";

const App = () => {
  return (
    <>
      <TopHeader />
      <EventDashboard />
    </>
  );
};

export default App;
