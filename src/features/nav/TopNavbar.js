import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
const TopNavbar = () => {
  return (
    <Menu fixed="top" secondary className="top-header">
      <Container>
        <Menu.Item header as={Link} to="/">
          <img src="/assets/images/logo.png" alt="Evento" />
        </Menu.Item>
        <SignedOutLinks />
        <SignedInLinks />
      </Container>
    </Menu>
  );
};

export default TopNavbar;
