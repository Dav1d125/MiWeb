// Habilidades: edita esta lista
const skills = {
  "HTML y CSS": "Maquetación responsiva y accesible.",
  "Programación": "Lógica, estructuras de datos y buenas prácticas de código.",
  "JavaScript": "Interactividad en el navegador y manejo del DOM.",
  "Trabajo en equipo": "Comunicación clara y cumplimiento de acuerdos.",
  "Git y GitHub": "Control de versiones y trabajo colaborativo.",
  "Inglés": "Lectura técnica y conversación."
};
const box = document.querySelector(".skills"), info = document.getElementById("skillInfo");
Object.entries(skills).forEach(([name, text]) => {
  const b = document.createElement("button");
  b.textContent = name; b.setAttribute("aria-pressed", "false");
  b.onclick = () => {
    box.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", "false"));
    b.setAttribute("aria-pressed", "true"); info.textContent = text;
  };
  box.appendChild(b);
});

// Menú móvil
const menu = document.getElementById("menu"), links = document.getElementById("links");
menu.onclick = () => { const o = links.classList.toggle("open"); menu.setAttribute("aria-expanded", o); };
links.addEventListener("click", e => { if (e.target.tagName === "A") { links.classList.remove("open"); menu.setAttribute("aria-expanded", false); } });

// Tema claro/oscuro
document.getElementById("theme").onclick = () => {
  const r = document.documentElement;
  const dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  r.dataset.theme = dark ? "light" : "dark";
};

// Formulario: abre el correo del usuario (cambia el correo de destino)
const DESTINO = "tucorreo@ejemplo.com";
document.getElementById("form").onsubmit = e => {
  e.preventDefault();
  const n = nombre.value.trim(), c = correo.value.trim(), m = mensaje.value.trim(), out = document.getElementById("msg");
  if (!n || !/^\S+@\S+\.\S+$/.test(c) || !m) { out.textContent = "Completa nombre, un correo válido y el mensaje."; return; }
  location.href = `mailto:${DESTINO}?subject=${encodeURIComponent("Mensaje de " + n)}&body=${encodeURIComponent(m + "\n\n" + c)}`;
  out.textContent = "Abriendo tu aplicación de correo.";
};
document.getElementById("year").textContent = new Date().getFullYear();
