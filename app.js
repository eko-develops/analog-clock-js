(() => {
  const secondsHand = document.querySelector("[data-seconds-hand]");
  const minutesHand = document.querySelector("[data-minutes-hand]");
  const hoursHand = document.querySelector("[data-hours-hand]");

  const setClock = () => {
    const now = new Date();

    const seconds = now.getSeconds() / 60;
    const minutes = now.getMinutes() / 60;
    const hours = now.getHours() / 12;

    rotateHands(secondsHand, seconds);
    rotateHands(minutesHand, minutes);
    rotateHands(hoursHand, hours);
  };

  const rotateHands = (element, time) => {
    element.style.setProperty("--rotation", time * 360);
  };

  setClock();

  setInterval(setClock, 1000);
})();
