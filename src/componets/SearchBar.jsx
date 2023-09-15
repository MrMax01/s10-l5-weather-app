import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  //   const [weather, setWeather] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Weather App</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default SearchBar;
