var todaytext = document.querySelector("h2");

moment().format('MMMM Do YYYY, h:mm:ss a');
refresh();

(function () {
  // instantiate a moment object
  var NowMoment = moment().format('dddd, MMMM Do YYYY');

  // display value of moment object in #displayMoment div
  var currentDay = document.getElementById('currentDay');
  currentDay.innerHTML = NowMoment;
  document.getElementById("currentDay").style.textAlign = "center";
  todaytext.style.textAlign = "center";

})();