import { Card, Col, Container } from "react-bootstrap";

const WeatherBox = () => {
  return (
    <Container className="pt-5">
      <Card>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1545193544-312983719627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          height={600}
          className="object-fit-cover"
        />
        <div className="card-img-overlay text-white row row-cols-2">
          <Col className=" d-flex flex-column justify-content-between">
            <div className="text-center">
              <h2 className="card-title d-2">Venerdì</h2>
              <p className="card-text m-0">15/09/2023</p>
              <p className="card-text m-0">Torino</p>
            </div>
            <div className=" text-start">
              <span className="material-symbols-outlined">sunny</span>
              <p className="d1">25°C</p>
              <p className="d1">Sunny</p>
            </div>
          </Col>
          <Col className="text-center">
            <h2>altro testo qui</h2>
          </Col>
        </div>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </Container>
  );
};
export default WeatherBox;
