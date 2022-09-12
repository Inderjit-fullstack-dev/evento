import { List, Image } from "semantic-ui-react";
const EventAtendees = () => {
  return (
    <List horizontal>
      <List.Item>
        <Image circular={true} src="/assets/images/user.png" size="mini" />
      </List.Item>
      <List.Item>
        <Image circular={true} src="/assets/images/user.png" size="mini" />
      </List.Item>
      <List.Item>
        <Image circular={true} src="/assets/images/user.png" size="mini" />
      </List.Item>
    </List>
  );
};

export default EventAtendees;
