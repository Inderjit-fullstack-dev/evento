import { Menu, Container, Button, MenuItem } from "semantic-ui-react";

const TopNavbar = ({ handleSetForm }) => {
  return (
    <Menu inverted fixed="top" secondary color="violet">
      <Container>
        <Menu.Item header>
          <img src="/assets/images/logo.png" alt="Evento" />
        </Menu.Item>
        <MenuItem name="Home" />
        <Menu.Item>
          <Button
            content="Create Event"
            inverted
            onClick={() => handleSetForm(true)}
          />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button content="Login" inverted />
            <Button content="Signup" inverted style={{ marginLeft: "5px" }} />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default TopNavbar;
