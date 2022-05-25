import { Col, Container, Row } from "react-bootstrap";
import Contacts from "../components/contacts/Contacts";
import Messages from "../components/messages/Messages";

function HomePage(props) {
  return (
    <Container>
      <Row className="my-3">
          <Contacts />
      </Row>
    </Container>
  );
}

export default HomePage;
