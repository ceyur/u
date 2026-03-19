import { navigate } from "./router.js";

// Инициализация базового UI
export function initUI() {
 //  const app = document.getElementById("app");
 //  app.innerHTML = `
 //    <header style="padding: 16px; background-color: #1e1e1e; color: #fff; display: flex; justify-content: space-between;">
 //      <h1>Smart Dashboard</h1>
 //      <nav>
 //      <button data-path="/tasks">Tasks</button>
 //        <button data-path="/notes">Notes</button>
 //        <button data-path="/tracker">Tracker</button>
 //      </nav>
 //    </header>
 //    <main id="main-content" style="padding: 16px;"></main>
 //  `;

  // Привязка кнопок навигации
  const buttons = app.querySelectorAll("button[data-path]");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const path = btn.getAttribute("data-path");
      navigate(path);
    });
  });
}

// Получение контейнера для рендеринга модулей
export function getMainContainer() {
  return document.getElementById("main-content");
}
