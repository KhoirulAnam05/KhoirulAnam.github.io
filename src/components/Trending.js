import { Card, Col, Container, Row, Image } from "react-bootstrap";
import avengerImage from "../assets/image/trending/avenger.jpg";
import koreaImage from "../assets/image/trending/korea.jpg";
import aumImage from "../assets/image/trending/aum.jpg";
import hellboundImage from "../assets/image/trending/hellbound.jpg";
import secretImage from "../assets/image/trending/secret.jpg";
import swordsmanImage from "../assets/image/trending/swordsman.jpg";
const Trending = () => {
  return [
    <div>
      <Container>
        <br />
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={avengerImage} alt="Avenger Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">AVENGERS</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={koreaImage} alt="Korea Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">KOREA</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 5 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={aumImage} alt="Aum Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">AUM</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 8 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={hellboundImage} alt="HellBound Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">HELLBOUND</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 12 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={secretImage} alt="Secret Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SECRET</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 20 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={swordsmanImage} alt="Swordsman Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SWORDSMAN</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                  <Card.Text className="text-left">Last updated 25 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>,
  ];
};

export default Trending;
