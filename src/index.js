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

updateTime();
setInterval(updateTime, 1000);
