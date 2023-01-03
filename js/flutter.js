(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    let date = new Date();  // Get current date with timezone GMT+0
    let timeOffsetInMS = date.getTimezoneOffset() * 60000; // Add date at GMT+0 by browser's timezone offset in milliseconds
    date.setTime(date.getTime() - timeOffsetInMS);  // Browser's date based on local timezone
    // nextYear = yyyy + 1,
    // dayMonth = "01/30/",        // Month/Day of end  time 
    // birthday = dayMonth + yyyy, // Month/Day + current year of end  time
    let eventDate = "12-31-2022 4:28:40";   // End of countdown


  const countDown = new Date(eventDate).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        (document.getElementById("days").innerText = 0),
        (document.getElementById("hours").innerText = 0),
        (document.getElementById("minutes").innerText = 0),
        (document.getElementById("seconds").innerText = 0);
        clearInterval(x);
      }
      //seconds
    }, 0);
})();