//check if date is past
export function dateIsPast(dateString) {
  // Get the current timestamp
  const now = new Date().getTime();
  // add one day to now

  // Get the timestamp for the date string
  const date = new Date(dateString).getTime();

  // Compare the two timestamps
  return date <= now;
}

//get today date adding days yyyy-mm-dd
export function getTodayDatePlusDays(days = 0) {
  const today = new Date();
  const newDate = new Date();
  newDate.setDate(today.getDate() + days);
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  //if day length is 1 add 0
  if (day.toString().length === 1) {
    day = "0" + day;
  }
  //if month length is 1 add 0
  if (month.toString().length === 1) {
    month = "0" + month;

  }
  return year + "-" + month + "-" + day;
}

// format date from yyyy-mm-dd to dd/mm/yyyy
export function formatDate(dateString) {
  const date = new Date(dateString);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  //if day length is 1 add 0
  if (day.toString().length === 1) {
    day = "0" + day;
  }
  //if month length is 1 add 0
  if (month.toString().length === 1) {
    month = "0" + month;
  }
  return day + "/" + month + "/" + year;
}

//format date time from yyyy-mm-dd hh:mm:ss to dd/mm/yyyy hh:mm
export function formatDateTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const day = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  return day + "/" + month + "/" + year + " à " + hours + ":" + minutes;
}


export function dateToString(date) {
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}

export function getDatesBetweenTwoDates(startDate, endDate) {
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);
  const dates = [];

  while (date1 <= date2) {
    dates.push(dateToString(date1));
    date1.setDate(date1.getDate() + 1);
  }

  return dates;
}

//get first and last date of current month yyyy-mm-dd format
export function getFirstAndLastDateOfCurrentMonth() {
  const date = new Date();
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  let firstDayString = dateToString(firstDay);
  let lastDayString = dateToString(lastDay);
  return [firstDayString, lastDayString];
}

