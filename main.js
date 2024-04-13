'use strict';

window.onload = function () {
  document.getElementById("height").focus();
};

function calcVal() {
  const h = document.getElementById("height").value;
  const w = document.getElementById("weight").value;
  const m = document.getElementById("message");
  const bmi = w / ((h / 100) * (h / 100));
  const ideal = ((h / 100) * (h / 100)) * 22;

  if (h === "" || w === "") {
    alert("please enter a valid 💡");
    return;
  }
  else if (bmi < 18.5) {
    m.textContent = "under.";
  } else if (bmi >= 25) {
    m.textContent = "over.";
  } else {
    m.textContent = "normal."
  }

  document.getElementById("result-calc").textContent = bmi.toFixed(2);
  document.getElementById("ideal-weight").textContent = ideal.toFixed(2);
}

function clearVal() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";

  document.getElementById("message").textContent = "...";

  document.getElementById("result-calc").textContent = "-";
  document.getElementById("ideal-weight").textContent = "-";

  document.getElementById("height").focus();
}