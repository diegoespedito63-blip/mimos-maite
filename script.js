const WHATSAPP = "5511954341225";

// Ícones em linha (SVG) para cada serviço
const icons = {
  laco: '<path d="M12 12 4 7.5v9L12 12Zm0 0 8-4.5v9L12 12Z"/><circle cx="12" cy="12" r="1.6"/><path d="m10.5 13.5-2 7M13.5 13.5l2 7"/>',
  colar: '<path d="M5 4c0 6 3 10 7 10s7-4 7-10"/><circle cx="12" cy="17.5" r="2.5"/>',
  impressao: '<path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7"/>',
  foto: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"/><circle cx="12" cy="13" r="3.5"/>',
  cartao: '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M5 16c.5-1.5 1.6-2 3-2s2.5.5 3 2M14 10h5M14 13h4"/>',
  bolo: '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20M7 8v3M12 8v3M17 8v3M7 4h.01M12 4h.01M17 4h.01"/>',
  presente: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
  caderno: '<rect x="5" y="2" width="15" height="20" rx="2"/><path d="M2 6h5M2 10h5M2 14h5M2 18h5M10 7h6M10 11h6"/>',
  sacola: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
  cabide: '<path d="M10 6a2 2 0 1 1 3 1.7c-.6.4-1 .9-1 1.6V10"/><path d="M12 10 2.6 17.2a1 1 0 0 0 .6 1.8h17.6a1 1 0 0 0 .6-1.8Z"/>',
  adesivo: '<path d="M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/>',
};

const services = [
  { icon: "laco", name: "Laços infantis", desc: "Laços em diversos tamanhos, cores e temas, para o dia a dia e ocasiões especiais." },
  { icon: "colar", name: "Colar e pulseira infantil", desc: "Bijuterias delicadas e seguras, personalizadas com nome, miçangas e pingentes." },
  { icon: "impressao", name: "Xerox e impressão", desc: "Cópias e impressões coloridas ou em preto e branco, com agilidade e qualidade." },
  { icon: "foto", name: "Revelação de fotos", desc: "Revelação com cores vivas e acabamento profissional para eternizar seus momentos." },
  { icon: "cartao", name: "Cartão de visita", desc: "Cartões com arte exclusiva, alinhados à identidade visual do seu negócio." },
  { icon: "bolo", name: "Topo de bolo", desc: "Topos personalizados com o tema da festa e o nome do aniversariante." },
  { icon: "presente", name: "Lembrancinhas de aniversário", desc: "Caixinhas, sacolinhas e mimos temáticos para encantar os convidados." },
  { icon: "caderno", name: "Caderno personalizado", desc: "Cadernos com capa exclusiva: nome, tema e cores escolhidos por você." },
  { icon: "sacola", name: "Sacolas personalizadas", desc: "Sacolas para festas, datas comemorativas e para a embalagem da sua marca." },
  { icon: "cabide", name: "Cabide para laços", desc: "Organizador decorativo para guardar e exibir a coleção de laços." },
  { icon: "adesivo", name: "Adesivos personalizados", desc: "Adesivos e etiquetas com nome, logotipo ou tema, no tamanho que precisar." },
];

const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

// Serviços
const grid = document.getElementById("services-grid");
const select = document.getElementById("servico-select");
select.innerHTML = '<option value="" disabled selected>Selecione</option>';

services.forEach((s) => {
  const card = document.createElement("article");
  card.className = "service";
  card.innerHTML = `
    <div class="service__icon"><svg viewBox="0 0 24 24" aria-hidden="true">${icons[s.icon]}</svg></div>
    <h3>${s.name}</h3>
    <p>${s.desc}</p>
    <a href="${waLink(`Olá, Mimos da Maitê! Gostaria de um orçamento de ${s.name}.`)}" target="_blank" rel="noopener">Solicitar orçamento</a>`;
  grid.appendChild(card);
  select.insertAdjacentHTML("beforeend", `<option>${s.name}</option>`);
});
select.insertAdjacentHTML("beforeend", "<option>Mini calendário de Natal</option><option>Outro</option>");

// Formulário -> WhatsApp
document.getElementById("order-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  let msg = `Olá, Mimos da Maitê!\nMeu nome é ${d.nome}.\nGostaria de um orçamento de: ${d.servico}`;
  if (d.tema) msg += `\nTema/data: ${d.tema}`;
  if (d.detalhes) msg += `\nDetalhes: ${d.detalhes}`;
  window.open(waLink(msg), "_blank", "noopener");
});

// Menu mobile
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const setMenu = (open) => {
  nav.classList.toggle("open", open);
  toggle.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

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

// Animação de entrada
document.querySelectorAll(".section__head, .service, .gallery__item, .about__media, .about__text, .step, .contact__info, .form")
  .forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
  }),
  { threshold: 0.1 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
