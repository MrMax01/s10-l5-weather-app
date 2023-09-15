import { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

const WeatherBox = () => {
  const location = useLocation();
  const { state } = location;
  // const param = useParams();
  // console.log(param);
  // Accedi alle props passate
  const { city, lat, lon } = state;
  // console.log(city);
  const baseEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  const latForFetch = `lat=${lat}`;
  const lonForFetch = `&lon=${lon}`;
  const APIkey = "&appid=e96e9d178c4a3143ca11b130717f366a";
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    fetch(baseEndpoint + latForFetch + lonForFetch + APIkey)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((weatherObj) => {
        if (weatherObj) {
          setWeather(weatherObj);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleIcon = () => {
    switch (weather && weather.weather[0].main) {
      case "Clouds":
        return "cloud";
      case "Sunny":
        return "sunny";
      case "Thunderstorm":
        return "thunderstorm";
      case "Drizzle":
        return "rainy_light";
      case "Rain":
        return "rainy";
      case "Snow":
        return "weather_snowy";
      case "Mist" || "Smoke" || "Haze" || "Dust" || "Fog" || "Sand" || "Dust" || "Ash" || "Squall" || "Tornado":
        return "mist";
      case "Clear":
        return "sunny";

      default:
        return "N/A";
    }
  };
  function unixToEuropean(unixTimestamp, isWeekday) {
    // Crea un oggetto Date dal timestamp Unix in millisecondi
    const date = new Date(unixTimestamp * 1000);
    if (isWeekday) {
      const options = {
        weekday: "long",
      };

      // Converti la data in formato europeo con il nome del giorno
      const europeanFormatWithDay = date.toLocaleDateString("it-IT", options);

      return europeanFormatWithDay;
    } else {
      // Ottieni giorno, mese, anno, ora, minuti e secondi
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Gennaio è il mese 0
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");

      // Formatta la data nel formato europeo
      const europeanFormat = `${day}/${month}/${year} ${hours}:${minutes}`;

      return europeanFormat;
    }
  }

  return (
    <Container className="pt-5">
      <Card className="shadow">
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1545193544-312983719627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          height={550}
          className="object-fit-cover d-none d-lg-block"
        />
        <div className=" card-img-overlay text-white row row-cols-1 row-cols-md-2">
          <Col className=" d-md-flex flex-column justify-content-between">
            <div className="text-center">
              <h2 className="card-title d-2 fs-day text-capitalize">{weather && unixToEuropean(weather.dt, true)}</h2>
              <p className="card-text m-0 fs-3">{weather && unixToEuropean(weather.dt, false)}</p>
              <p className="card-text m-0 fs-2">{city}</p>
            </div>
            <div className=" text-start ms-4 pb-5">
              <span className="material-symbols-outlined fs-xxl">{handleIcon()}</span>
              <p className="d1 fs-grade m-0 ">{weather && (weather.main.temp - 273).toFixed(2) + "°C"}</p>
              <p className="d1 fs-3 m-0 text-capitalize">{weather && weather.weather[0].description}</p>
            </div>
          </Col>
          <Col className="text-center d-md-flex flex-column justify-content-end pb-5">
            <ListGroup className="mb-4">
              <ListGroup.Item className="bg-transparent text-white" as="li">
                <Container>
                  <Row xs={2}>
                    <Col>PRECIPITATION</Col>
                    <Col>{weather && weather.clouds.all}%</Col>
                  </Row>
                </Container>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-white" as="li">
                <Container>
                  <Row xs={2}>
                    <Col>HUMIDITY</Col>
                    <Col>{weather && weather.main.humidity}%</Col>
                  </Row>
                </Container>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-white" as="li">
                <Container>
                  <Row xs={2}>
                    <Col>WIND SPEED</Col>
                    <Col>{weather && weather.wind.speed} km/h</Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            </ListGroup>
            <div>
              <Link to="/">
                <Button variant="success">Back and type your location</Button>
              </Link>
            </div>
          </Col>
        </div>
        <Card.Body className="d-none d-lg-block">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item px-3">Link</li>
            <li className="nav-item px-3">Link</li>
            <li className="nav-item px-3">Link</li>
            <li className="nav-item px-3">Link</li>
          </ul>
        </Card.Body>
      </Card>
      <br />
    </Container>
  );
};
export default WeatherBox;
