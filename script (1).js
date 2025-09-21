const days = [
  "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday", "Sunday"
];

const planner = document.getElementById("planner");

// Create inputs for each day
days.forEach(day => {
  const dayDiv = document.createElement("div");
  dayDiv.className = "day";
  dayDiv.innerHTML = `
    <label for="${day}">${day}</label>
    <input type="text" id="${day}" placeholder="Enter meal for ${day}" />
  `;
  planner.appendChild(dayDiv);
});

// Load saved plan
function loadPlan() {
  const savedPlan = JSON.parse(localStorage.getItem("mealPlan")) || {};
  days.forEach(day => {
    document.getElementById(day).value = savedPlan[day] || "";
  });
}

// Save current plan
function savePlan() {
  const plan = {};
  days.forEach(day => {
    plan[day] = document.getElementById(day).value;
  });
  localStorage.setItem("mealPlan", JSON.stringify(plan));
  alert("Meal plan saved!");
}

// Reset plan
function resetPlan() {
  if (confirm("Clear all meals?")) {
    days.forEach(day => {
      document.getElementById(day).value = "";
    });
    localStorage.removeItem("mealPlan");
  }
}

document.getElementById("save").addEventListener("click", savePlan);
document.getElementById("reset").addEventListener("click", resetPlan);

loadPlan();
