const screenMap = {
  home: { scr: "scr-home" },
  about: { scr: "scr-about" },
  contact: { scr: "scr-contact" },
};
function showScreen(name) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  const m = screenMap[name];
  if (m) document.getElementById(m.scr).classList.add("active");
}
document.getElementById("btn-dark").addEventListener("click", function () {
  document.documentElement.setAttribute("data-theme", "dark");
});
document.getElementById("btn-default").addEventListener("click", function () {
  document.documentElement.removeAttribute("data-theme");
});
const STORAGE_KEY = "myapp_v1";
let db = {
  tasks: ["운동하기", "책 읽기", "코딩 공부"],
};
function saveData() {
  try {
    const state = {
      tasks: db.tasks,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    alert("저장 완료!");
  } catch (e) {}
}
function loadData() {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const s = JSON.parse(raw);
    if (Array.isArray(s.tasks) && s.tasks.lenght) db.tasks = s.tasks;
    renderTasks();
  } catch (e) {}
}
function renderTasks() {
  const list = document.getElementById("task-list");
  if (!list) return;
  list.innerHTML = "";
  db.tasks.forEach(function (task) {
    const div = document.createElement("div");
    div.className = "task";
    div.innerHTML = `<span class="task-text">${task}</span>`;
  });
}
loadData();
renderTasks();
