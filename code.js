const digitalClock = () => {
  const element = document.getElementById("clock");

  // Get current time
  const date = new Date(); //('2024-11-30T11:08:34.000Z')
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // (09 instead of 9)
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  // Combine time and display it
  const timeString = `${hours}:${minutes}:${seconds}`;
  element.textContent = timeString;
};

//  update every second
setInterval(digitalClock, 1000);

digitalClock();
