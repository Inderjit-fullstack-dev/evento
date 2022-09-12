import { Menu, Container, Button } from "semantic-ui-react";

const TopHeader = () => {
  return (
    <Menu inverted fixed="top" secondary color="violet">
      <Container>
        <Menu.Item header>
          <img src="/assets/images/logo.png" />
        </Menu.Item>
        <Menu.Menu position="right">
          {/* 
          <Menu.Item name="Events" />
          <Menu.Item>
            <Button content="Create an Event" positive inverted />
          </Menu.Item> */}
          <Menu.Item>
            <Button content="Login" inverted />
            <Button content="Signup" inverted style={{ marginLeft: "5px" }} />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default TopHeader;
