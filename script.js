const WHATSAPP = "5511954341225";

const services = [
  { icon: "🎀", name: "Laços infantis", desc: "Laços delicados em todos os tamanhos, cores e temas, do dia a dia às festas." },
  { icon: "📿", name: "Colar e pulseira infantil", desc: "Bijus fofinhas e seguras, com miçangas, nomes e pingentes do jeitinho dela." },
  { icon: "🖨️", name: "Xerox e impressão", desc: "Cópias e impressões coloridas ou P&B, rapidinho e com qualidade." },
  { icon: "📸", name: "Revelação de fotos", desc: "Eternize seus momentos favoritos em fotos impressas com cores vivas." },
  { icon: "💼", name: "Cartão de visita", desc: "Cartões com a cara do seu negócio, com arte criada especialmente pra você." },
  { icon: "🎂", name: "Topo de bolo", desc: "Topos personalizados com o tema e o nome do aniversariante." },
  { icon: "🎁", name: "Lembrancinhas de aniversário", desc: "Caixinhas, sacolinhas e mimos temáticos para encantar os convidados." },
  { icon: "📒", name: "Caderno personalizado", desc: "Cadernos com capa exclusiva: nome, tema e cores que a criança ama." },
  { icon: "🛍️", name: "Sacolas personalizadas", desc: "Sacolinhas para festas, datas comemorativas e para a sua loja." },
  { icon: "🧷", name: "Cabide para laços", desc: "Organizador lindo para guardar e exibir a coleção de lacinhos." },
  { icon: "🌈", name: "Adesivos personalizados", desc: "Adesivos e etiquetas com nome, logo ou tema, para tudo o que precisar." },
];

const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

// Serviços
const grid = document.getElementById("services-grid");
const select = document.getElementById("servico-select");
select.innerHTML = '<option value="" disabled selected>Escolha um serviço</option>';

services.forEach((s) => {
  const card = document.createElement("article");
  card.className = "service reveal";
  card.innerHTML = `
    <div class="service__icon" aria-hidden="true">${s.icon}</div>
    <h3>${s.name}</h3>
    <p>${s.desc}</p>
    <a href="${waLink(`Olá, Mimos da Maitê! Gostaria de um orçamento de ${s.name} 🎀`)}" target="_blank" rel="noopener">Pedir orçamento →</a>`;
  grid.appendChild(card);
  select.insertAdjacentHTML("beforeend", `<option>${s.name}</option>`);
});
select.insertAdjacentHTML("beforeend", "<option>Mini calendário de Natal</option><option>Outro</option>");

// Formulário -> WhatsApp
document.getElementById("order-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  let msg = `Olá, Mimos da Maitê! 🎀\nMeu nome é ${d.nome}.\nGostaria de um orçamento de: ${d.servico}`;
  if (d.tema) msg += `\nTema/data: ${d.tema}`;
  if (d.detalhes) msg += `\nDetalhes: ${d.detalhes}`;
  window.open(waLink(msg), "_blank", "noopener");
});

// Menu mobile
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  })
);

// Lightbox
const lightbox = document.getElementById("lightbox");
const lbImg = lightbox.querySelector("img");
document.querySelectorAll("[data-full]").forEach((el) =>
  el.addEventListener("click", () => {
    lbImg.src = el.dataset.full;
    lbImg.alt = el.querySelector("img")?.alt || "";
    lightbox.hidden = false;
  })
);
lightbox.addEventListener("click", (e) => {
  if (e.target !== lbImg) lightbox.hidden = true;
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") lightbox.hidden = true;
});

// Corações flutuando no topo
const hearts = document.querySelector(".hearts");
for (let i = 0; i < 14; i++) {
  const h = document.createElement("span");
  h.textContent = ["♥", "♡", "🎀"][i % 3];
  h.style.left = Math.random() * 100 + "%";
  h.style.fontSize = 12 + Math.random() * 18 + "px";
  h.style.animationDuration = 10 + Math.random() * 12 + "s";
  h.style.animationDelay = -Math.random() * 20 + "s";
  hearts.appendChild(h);
}

// Animação de entrada
document.querySelectorAll(".section__head, .gallery__item, .about__media, .about__text, .step, .form, .card-link, .card-note")
  .forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
