import { Button, Container, Image, Navbar } from "react-bootstrap";
import "./header.css";
import { Icon } from "../icon/icon";
import IcParlour from "../../design-system/icons/IcParlour";

const Header = ({ onClick }) => {
  return (
    <Navbar className="app-header">
      <Container fluid>
        <Button onClick={onClick} className="d-md-none hamicon">
          ☰
        </Button>
        <Navbar.Brand className="maincontainer">
          <Icon className="parlouricon" ic={<IcParlour />} />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
