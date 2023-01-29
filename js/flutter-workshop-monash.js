// Set the target date to Feb 20 9AM 2023
const targetDate = new Date(2023, 1, 4, 20, 0, 0);

function updateCountdown() {
  // Get the current date and time
  const currentDate = new Date();

  // Calculate the remaining time in milliseconds
  const remainingTime = targetDate - currentDate;

  // Calculate the number of days, hours, minutes, and seconds remaining
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Update the --value CSS variables with the calculated values
  document.querySelector("#days").style.setProperty("--value", days);
  document.querySelector("#hours").style.setProperty("--value", hours);
  document.querySelector("#minutes").style.setProperty("--value", minutes);
  document.querySelector("#seconds").style.setProperty("--value", seconds);
}

// Update the countdown every second
setInterval(updateCountdown, 1000);