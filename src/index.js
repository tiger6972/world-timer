function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz(`America/Los_Angeles`);

  losAngelesDateElement.innerHTML = moment().format("DD MMMM YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(`HH:mm:ss`)}`;

  //Paris

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz(`Europe/Paris`);

  parisDateElement.innerHTML = moment().format("DD MMMM YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(`HH:mm:ss`)}`;

  //Shanghai

  let shanghaiElement = document.querySelector("#shanghai");
  let shanghaiDateElement = shanghaiElement.querySelector(".date");
  let shanghaiTimeElement = shanghaiElement.querySelector(".time");
  let shanghaiTime = moment().tz(`Asia/Shanghai`);

  shanghaiDateElement.innerHTML = moment()
    .tz(`Asia/Shanghai`)
    .format("DD MMMM YYYY");
  shanghaiTimeElement.innerHTML = `${shanghaiTime.format(`HH:mm:ss`)}`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("DD MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>  
        <a href="https://courageous-stardust-d40305.netlify.app/">Go Back</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-selection");
citiesSelectElement.addEventListener("change", updateCity);
