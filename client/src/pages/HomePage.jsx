import { Col, Container, Row } from "react-bootstrap";
import Contacts from "../components/contacts/Contacts";
import Messages from "../components/messages/Messages";
import Online from "../components/Online";

function HomePage(props) {
  return (
    <Container>
      <Row className="my-3">
        <Col md={4} xs={4}>
          <Contacts />
        </Col>
        <Col md={6} xs={8}>
          <Messages />
        </Col>
        <Col md={2} className="d-none d-md-block">
          <Online />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
