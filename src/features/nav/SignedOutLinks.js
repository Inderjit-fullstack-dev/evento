import { Menu, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
const SignedOutLinks = () => {
  return (
    <Menu.Menu position="right">
      <Menu.Item>
        <Button
          content="Login"
          as={NavLink}
          to="/login"
          inverted
          style={{ marginLeft: "5px" }}
        />
        <Button
          content="Signup"
          as={NavLink}
          to="/signup"
          inverted
          style={{ marginLeft: "5px" }}
        />
      </Menu.Item>
    </Menu.Menu>
  );
};

export default SignedOutLinks;
