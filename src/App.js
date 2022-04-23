import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-around">
          <div className="shadow rounded">
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="google.com">
                  <img src="src/PngItem_1780599.png" alt="" className="paper" />
                </a>
                <form className="d-flex">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    id="cityname"
                  />
                  <button
                    className="btn btn-outline-success submit-city"
                    type="submit"
                    id="search"
                  >
                    Search
                  </button>
                  <button
                    className="btn btn-outline-primary submit-city"
                    type="submit"
                    id="current"
                  >
                    Current
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-2">
              <br />
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                className="sun"
                id="mainImg"
                alt="sky"
              />
            </div>
            <div className="col-md-2">
              <h2>
                <br />
                <p className="fw-bolder city-name" id="city-name">
                  Tehran
                </p>
              </h2>
              <h4>
                {" "}
                <span id="nowDate">
                  saturday <br />
                  <br />
                  2022.2.19
                </span>
                <br />
                <br />
              </h4>
              <h3>
                <p className="fw-light">
                  <span id="number"> 19 </span> °
                  <br />
                  <br />
                  <span id="info">
                    <span id="time"></span>
                  </span>
                </p>
              </h3>
            </div>
            <div className="col-md-2">
              <br />
              <img
                src="https://ssl.gstatic.com/m/images/weather/wind_unselected.svg"
                className="wind"
                alt="wind"
              />
              <p>
                <em>Humidity : </em> <span id="humidity"> 52</span>%
              </p>
              <p>
                <em>Speed </em>: <span id="speed"> 28</span> km / h
              </p>
              <p>
                <em>Description </em>: <span id="des"> Clear sky </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
