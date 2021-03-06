import React from "react";

const Weather = () => {
  const weatherJS = !(function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = "https://weatherwidget.io/js/widget.min.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  })(document, "script", "weatherwidget-io-js");

  return (
    <div
      style={{}}
      className="weather-widget animate__animated animate__fadeInDown"
    >
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/49d28n123d12/vancouver/"
        data-label_1="VANCOUVER"
        data-label_2="WEATHER"
        data-font="Roboto"
        data-icons="Climacons Animated"
        data-theme="weather_one"
      >
        Weather
      </a>
      {weatherJS}
    </div>
  );
};

export default Weather;
