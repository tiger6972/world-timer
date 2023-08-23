function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz(`America/Los_Angeles`);

  losAngelesDateElement.innerHTML = moment().format("DD MMMM YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(`HH:mm:ss`)}`;

  //London

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz(`Europe/London`);

  londonDateElement.innerHTML = moment().format("DD MMMM YYYY");
  londonTimeElement.innerHTML = `${londonTime.format(`HH:mm:ss`)}`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" id="los-angeles">
          <div>
            <h2>${cityTimeZone}</h2>
            <div class="date">${cityTime.format("DD MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}"</div>
        </div>  
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-selection");
citiesSelectElement.addEventListener("change", updateCity);
