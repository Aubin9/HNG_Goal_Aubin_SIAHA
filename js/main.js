const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
function getCurrentTimeUTC() {
  const currentDate = new Date().toISOString().slice(0, 10);
  const currentTime = new Date().toISOString().slice(11, 19);
  const nowDate = document.querySelector('[data-testid="currentTimeUTC"]');
  nowDate.textContent = `Current date: ${currentDate} Time: ${currentTime} `;

  // for the day:
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });
  const today = document.querySelector('[data-testid="currentDay"]');
  today.textContent = `Today's day: ${currentDay}`;
}
getCurrentTimeUTC();
