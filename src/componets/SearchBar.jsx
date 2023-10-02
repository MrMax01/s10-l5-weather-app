import { useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
// import WeatherBox from "./WeatherBox";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [exist, setExist] = useState(false);
  let navigate = useNavigate();
  const baseEndpoint = "http://api.openweathermap.org/geo/1.0/direct?q=";
  const APIkey = "&appid=e96e9d178c4a3143ca11b130717f366a";
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(baseEndpoint + query + APIkey)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          return alert("Error fetching results");
        }
      })
      .then((weatherObj) => {
        console.log(weatherObj);
        if (weatherObj.length > 0) {
          navigate(`/${weatherObj[0].lat + "&" + weatherObj[0].lon}`);
          // console.log(weatherObj);
        } else {
          setExist(true);
          setTimeout(() => {
            setExist(false);
          }, 3000);

          console.log(`this location don't exist`);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Container className="pt-5">
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Weather App</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type Your Loaction and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto">
          {exist && <Alert variant="danger">this location don't exist</Alert>}
        </Col>
      </Row>
    </Container>
  );
};
export default SearchBar;
