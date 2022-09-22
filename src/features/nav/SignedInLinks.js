import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
const SignedInLinks = () => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/images/user.png" />
      <Dropdown text="Bob" pointing="top right">
        <Dropdown.Menu>
          <Dropdown.Item
            text="Create Event"
            icon="calendar"
            as={Link}
            to="events/create"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item text="Logout" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInLinks;
