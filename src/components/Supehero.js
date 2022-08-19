import { Card, Col, Container, Row, Image } from "react-bootstrap";
import KKNImage from "../assets/image/supehero/KKN.jpg";
import PahlawanImage from "../assets/image/supehero/Pahlawan.jpg";
import SpidermanImage from "../assets/image/supehero/Spiderman.jpg";
import TheSevenImage from "../assets/image/supehero/TheSeven.png";
import TopGunImage from "../assets/image/supehero/TopGun.jpg";
const SuperHero = () => {
  return [
    <div>
      <Container>
        <br />
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={KKNImage} alt="KKN Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">KKN</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={PahlawanImage} alt="Pahlawan Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">PAHLAWAN</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 5 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={SpidermanImage} alt="Spiderman Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SPIDERMAN</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 8 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={TheSevenImage} alt="TheSeven Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">THESEVEN</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 12 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={TopGunImage} alt="TopGun Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">TOPGUN</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 20 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>,
  ];
};

export default SuperHero;
