import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SearchBar from "./componets/SearchBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherBox from "./componets/WeatherBox";

function App() {
  return (
    <div className="App w-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/:cordinates" element={<WeatherBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
