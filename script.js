const form = document.getElementById("form");
const day = document.getElementById("day");
const months = document.getElementById("month");
const years = document.getElementById("year");
const errorMsg = document.getElementById("error-msg");
const h4 = document.querySelectorAll("h4");
const input = document.querySelectorAll("input");

const setDate = ({ currentDate, currentMonth, currentYear }) => {
  day.innerText = currentDate;
  months.innerText = currentMonth;
  years.innerText = currentYear;
};

const currentTime = {
  currentDate: new Date().getDate(),
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
};

setDate({'--', '--', '--'});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const givenDate = e.target.elements.givenDate.value;
  const givenMonth = e.target.elements.givenMonth.value;
  const givenYear = e.target.elements.givenYear.value;

  if (givenDate == "" && givenMonth == "" && givenYear == "") {
    errorMsg.classList.remove("hidden");
    h4.forEach((e) => e.classList.add("text-red-700"));
    input.forEach((e) => e.classList.add("border-red-700"));
    return (errorMsg.innerHTML = "This field is required");
  } else if (!(givenDate <= 30 && givenMonth <= 12)) {
    errorMsg.classList.remove("hidden");
    h4.forEach((e) => e.classList.add("text-red-700"));
    input.forEach((e) => e.classList.add("border-red-700"));
    return (errorMsg.innerHTML = "Must be a valid date");
  } else {
    errorMsg.classList.add("hidden");
    h4.forEach((e) => e.classList.remove("text-red-700"));
    input.forEach((e) => e.classList.remove("border-red-700"));
    
    const calculatedDate = currentTime.currentDate - givenDate;
    const calculatedMonth = currentTime.currentMonth - givenMonth;
    const calculatedYear = currentTime.currentYear - givenYear;
    setDate({
      currentDate: calculatedDate,
      currentMonth: calculatedMonth,
      currentYear: calculatedYear,
    });
  }
});
