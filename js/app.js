/* ============================================================
   ATLANTIC WAVE — app.js
   Puerto Plata, Dominican Republic
   ============================================================ */

// ── DATA: BUSINESSES ──────────────────────────────────────────
const businesses = [
  {
    id: 1,
    name: "La Terraza del Mar",
    cat: "restaurant",
    badge: "Restaurant",
    bc: "coral",
    img: "js/images/terraza.jpg",
    desc: "Fresh seafood and Dominican classics with panoramic ocean views.",
    loc: "Malecón, Puerto Plata",
    rating: "4.9",
    extra: "Open daily 11am–11pm. Live music on weekends. Reservations recommended.",
    phone: "18098159682"
  },
  {
    id: 2,
    name: "Casa Cultura Tours",
    cat: "tour",
    badge: "Tours",
    bc: "",
    img: "js/images/cultura.jpg",
    desc: "Expert-led cultural and adventure tours across the North Coast.",
    loc: "Centro, Puerto Plata",
    rating: "4.8",
    extra: "Half-day and full-day tours. English & Spanish guides. Hotel pickup included.",
    phone: "18092612731"
  },
  {
    id: 3,
    name: "Artesanías Taína",
    cat: "artisan",
    badge: "Artisan",
    bc: "lime",
    img: "js/images/manualidades-tainas.jpg",
    desc: "Handcrafted amber jewelry, larimar pieces, and Taíno-inspired art.",
    loc: "C. 12 de Julio 24, Puerto Plata 57000",
    rating: "4.9",
    extra: "Open Mon–Sat 9am–6pm. Custom orders welcome. Authenticity certificate included.",
    phone: "18095550203"
  },
  {
    id: 4,
    name: "Blue Ocean Kiteboarding",
    cat: "activity",
    badge: "Activity",
    bc: "aqua",
    img: "js/images/kiteboarding.jpg",
    desc: "Professional kiteboarding lessons and equipment rental at Cabarete Beach.",
    loc: "Cabarete, Puerto Plata",
    rating: "5.0",
    extra: "Beginner to advanced lessons. Equipment included. 2-hour to full-day sessions.",
    phone: "18095550204"
  },
  {
    id: 5,
    name: "Puerto Plata Express",
    cat: "transport",
    badge: "Transport",
    bc: "",
    img: "js/images/express.jpg",
    desc: "Reliable private airport transfers and day-trip transportation services.",
    loc: "Gregorio Luperón Airport",
    rating: "4.7",
    extra: "24/7 availability. Air-conditioned vehicles. Fixed transparent pricing.",
    phone: "18095550205"
  },
  {
    id: 6,
    name: "Los 3 Cocos",
    cat: "restaurant",
    badge: "Restaurant",
    bc: "coral",
    img: "js/images/cocos.jpg",
    desc: "Authentic Dominican cuisine in a cozy, family-run beachside setting.",
    loc: "Long Beach, Puerto Plata",
    rating: "4.8",
    extra: "Try the sancocho and tostones. Lunch specials daily 12–3pm. Sea views from every table.",
    phone: "18095550206"
  },
  {
    id: 7,
    name: "Damajagua Waterfall Adventure",
    cat: "tour",
    badge: "Tours",
    bc: "",
    img: "js/images/damajagua.jpg",
    desc: "Guided adventure to the iconic 27 Charcos waterfalls of Damajagua.",
    loc: "Imbert, Puerto Plata",
    rating: "4.9",
    extra: "Includes transport, certified guide, and safety equipment. All fitness levels welcome.",
    phone: "18095550207"
  },
  {
    id: 8,
    name: "Galería Amber Coast",
    cat: "artisan",
    badge: "Artisan",
    bc: "lime",
    img: "js/images/amber-coast.jpg",
    desc: "Largest curated selection of Dominican amber and larimar gemstones.",
    loc: "C Duarte-Emilio Prud'Homme, Puerto Plata",
    rating: "4.7",
    extra: "Certificate of authenticity included. Expert gemologists on site. International shipping available.",
    phone: "18097342599"
  },
  {
    id: 9,
    name: "Surf School Encuentro",
    cat: "activity",
    badge: "Activity",
    bc: "aqua",
    img: "js/images/encuentro.jpg",
    desc: "Learn to surf on one of the Caribbean's best beginner-friendly waves.",
    loc: "Playa Encuentro, Puerto Plata",
    rating: "4.8",
    extra: "Board rental included. Private and group lessons from $35. Morning and afternoon sessions.",
    phone: "18095550209"
  }
];

// ── DATA: EXPERIENCES ─────────────────────────────────────────
const experiences = [
  {
    image: "https://www.expreso.info/files/2024-06/Puerto_Plata_Teleferico.jpg",
    name: "Isabel de Torres Cable Car",
    desc: "Soar to the summit of Mount Isabel de Torres for breathtaking 360° views.",
    tags: ["~3 hrs", "Easy", "All Ages"],
    rating: 4.8,
    price: 45
  },
  {
    image: "https://www.royalcaribbean.com/media-assets/pmc/content/dam/shore-x/puerto-plata-pop/y74t-damajagua-waterfalls-and-private-beach-getaway-with-lunch/Y74T-Damajagua-Waterfalls-and-Private-Beach-Getaway-with-Lunch-Damajagua.jpg?w=1920",
    name: "27 Waterfalls — Damajagua",
    desc: "Jump, slide, and swim through cascading waterfalls in a tropical canyon.",
    tags: ["Half Day", "Adventure", "Guided"],
    rating: 4.9,
    price: 65
  },
  {
    image: "https://atlantictoursrd.com/uploads/0000/1/2022/11/09/atardecer-sosua.jpg?w=1920",
    name: "Sunset Catamaran Cruise",
    desc: "Sail the coast with snorkeling, drinks, and Caribbean vibes.",
    tags: ["4 hrs", "Snorkeling", "Open Bar"],
    rating: 4.7,
    price: 80
  },
  {
    image: "https://www.touringdominicanrepublic.com/wp-content/uploads/2016/12/5-1.png?w=1920",
    name: "Historic Downtown Walk",
    desc: "Explore colonial streets and vibrant culture in Puerto Plata.",
    tags: ["2 hrs", "Cultural", "Walking"],
    rating: 4.6,
    price: 25
  }
];

// ── HELPERS ───────────────────────────────────────────────────
function generateStars(rating) {
  const full = Math.floor(rating);
  let stars = "★".repeat(full);
  while (stars.length < 5) stars += "☆";
  return stars;
}

// ── RENDER: EXPERIENCES ───────────────────────────────────────
function renderExperiences() {
  const grid = document.getElementById("expGrid");
  if (!grid) return;

  grid.innerHTML = experiences.map(exp => `
    <div class="exp-card">
      <div class="exp-image">
        <img src="${exp.image}" alt="${exp.name}" loading="lazy">
      </div>
      <div class="exp-content">
        <div class="exp-rating">
          ${generateStars(exp.rating)} <span>${exp.rating}</span>
        </div>
        <h3 class="exp-name">${exp.name}</h3>
        <p class="exp-desc">${exp.desc}</p>
        <div class="exp-meta">
          ${exp.tags.map(t => `<span class="exp-tag">${t}</span>`).join("")}
        </div>
        <div class="exp-footer">
          <span class="exp-price">$${exp.price}</span>
          <button class="exp-btn" onclick="openBooking('${exp.name}', ${exp.price})">
            Book Now
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// ── RENDER: BUSINESSES ────────────────────────────────────────
let activeCat = "";

function renderBiz() {
  const q   = (document.getElementById("searchInput")?.value || "").toLowerCase();
  const cat = activeCat || (document.getElementById("categoryFilter")?.value || "");

  const filtered = businesses.filter(b => {
    const matchCat = !cat || b.cat === cat;
    const matchQ   = !q
      || b.name.toLowerCase().includes(q)
      || b.desc.toLowerCase().includes(q)
      || b.loc.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  const grid = document.getElementById("bizGrid");
  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <p style="color:var(--text-light);grid-column:1/-1;text-align:center;padding:3rem;font-size:1.05rem;">
        No businesses found. Try a different search or category.
      </p>`;
    return;
  }

  grid.innerHTML = filtered.map(b => `
    <div class="biz-card reveal" onclick="openModal(${b.id})">
      <div class="biz-img-wrap">
        <img class="biz-img" src="${b.img}" alt="${b.name}" loading="lazy">
        <span class="biz-badge ${b.bc}">${b.badge}</span>
      </div>
      <div class="biz-body">
        <div class="biz-name">${b.name}</div>
        <div class="biz-desc">${b.desc}</div>
        <div class="biz-loc">📍 ${b.loc}</div>
        <div class="biz-footer">
          <span class="rating">★ ${b.rating}</span>
          <button class="btn-details">View Experience</button>
        </div>
      </div>
    </div>
  `).join("");

  observeReveal();
}

function setCat(btn, cat) {
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeCat = cat;
  document.getElementById("categoryFilter").value = cat;
  renderBiz();
}

// ── MODAL: Business Details ───────────────────────────────────
function openModal(id) {
  const b = businesses.find(x => x.id === id);
  if (!b) return;

  document.getElementById("modalImg").src             = b.img;
  document.getElementById("modalName").textContent    = b.name;
  document.getElementById("modalDesc").textContent    = b.desc;
  document.getElementById("modalExtra").textContent   = b.extra;
  document.getElementById("modalTags").innerHTML      = `
    <span class="modal-tag">📍 ${b.loc}</span>
    <span class="modal-tag">⭐ ${b.rating} Rating</span>
    <span class="modal-tag">${b.badge}</span>`;
  document.getElementById("modalWa").href             = `https://wa.me/${b.phone}`;

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function maybeCloseModal(e) {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
}

// ── MODAL: Booking ────────────────────────────────────────────
let bookingBasePrice = 0;

function openBooking(name, price) {
  bookingBasePrice = price;

  const modal = document.getElementById("bookingModal");
  modal.querySelector(".booking-title").textContent = name;
  modal.querySelector(".booking-price").textContent = `$${price}`;

  // Resetear campos
  document.getElementById("peopleCount").textContent = "1";
  document.getElementById("bookingName").value  = "";
  document.getElementById("bookingEmail").value = "";
  document.getElementById("bookingDate").value  = "";
  updateTotal();

  // Fijar fecha mínima = hoy
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("bookingDate").min = today;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeBooking() {
  document.getElementById("bookingModal").style.display = "none";
  document.body.style.overflow = "";
}

function maybeCloseBooking(e) {
  if (e.target === document.getElementById("bookingModal")) closeBooking();
}

function changePeople(delta) {
  const el  = document.getElementById("peopleCount");
  const cur = parseInt(el.textContent) || 1;
  const next = Math.max(1, Math.min(20, cur + delta));
  el.textContent = next;
  updateTotal();
}

function updateTotal() {
  const people = parseInt(document.getElementById("peopleCount").textContent) || 1;
  const total  = bookingBasePrice * people;
  document.getElementById("bookingTotal").textContent = `$${total}`;
}

function confirmBooking() {
  const name  = document.getElementById("bookingName").value.trim();
  const email = document.getElementById("bookingEmail").value.trim();
  const date  = document.getElementById("bookingDate").value;

  if (!name || !email || !date) {
    // Resaltar campos vacíos
    ["bookingName","bookingEmail","bookingDate"].forEach(id => {
      const el = document.getElementById(id);
      if (!el.value.trim()) {
        el.style.borderColor = "#ff6b6b";
        setTimeout(() => el.style.borderColor = "", 2000);
      }
    });
    return;
  }

  const btn  = document.querySelector(".confirm-btn");
  const orig = btn.textContent;
  btn.textContent      = "✓ Booking Confirmed!";
  btn.style.background = "#2ecc71";
  btn.style.color      = "white";
  btn.disabled         = true;

  setTimeout(() => {
    btn.textContent      = orig;
    btn.style.background = "";
    btn.style.color      = "";
    btn.disabled         = false;
    closeBooking();
  }, 2800);
}

// ── AI CHAT ───────────────────────────────────────────────────
const fallbacks = {
  eat:       "For beachfront dining in Puerto Plata:\n• 🦞 La Terraza del Mar — Malecón, fresh seafood with ocean views\n• 🍛 Los 3 Cocos — Long Beach, authentic Dominican flavors\n• 🥗 Playa Dorada Beach Bar — casual grilled fish & tropical cocktails",
  tour:      "Top tours in Puerto Plata:\n• 🌊 27 Waterfalls Damajagua — must-do adventure\n• 🚡 Cable Car + Fort San Felipe combo\n• ⛵ Catamaran Sunset Cruise with snorkeling\n• 🌿 Cacao & Coffee Farm Tour",
  waterfall: "The 27 Charcos (Damajagua) is unmissable! 🌊\n• ~30 min from downtown in Imbert\n• Choose 7, 12, or all 27 waterfalls\n• Includes jumping, sliding, and swimming\n• ~$10–$65 depending on route\n• Book via Casa Cultura Tours on our platform",
  cable:     "The Teleférico cable car is a must! 🚡\n• Runs Tue–Sun, 8am–5pm\n• Tickets: ~$10 adults, $5 children\n• Botanical Garden + Christ statue at summit\n• 360° views of the Atlantic & city\n• Tip: go early to beat clouds!",
  beach:     "Puerto Plata's best beaches: 🏖\n• Playa Dorada — calm, golden, family-friendly\n• Playa Cofresí — local favorite, crystal waters\n• Cabarete — kite & wind sports (15 min east)\n• Playa Encuentro — top surf spot\n• Sosúa Beach — excellent snorkeling",
  default:   "¡Bienvenido! I can help you with:\n• 🍽 Restaurant & dining recommendations\n• 🧭 Tours & adventure activities\n• 🏖 Beach information & tips\n• 🚡 Attractions & opening times\n• 🌊 27 Waterfalls & nature experiences\n\nWhat would you like to explore in Puerto Plata?"
};

function getFallback(msg) {
  const m = msg.toLowerCase();
  if (m.includes("eat") || m.includes("food") || m.includes("restaurant") || m.includes("dine")) return fallbacks.eat;
  if (m.includes("tour") || m.includes("excursion")) return fallbacks.tour;
  if (m.includes("waterfall") || m.includes("27") || m.includes("charcos") || m.includes("damajagua")) return fallbacks.waterfall;
  if (m.includes("cable") || m.includes("telefer")) return fallbacks.cable;
  if (m.includes("beach") || m.includes("playa")) return fallbacks.beach;
  return fallbacks.default;
}

function appendMsg(text, isUser) {
  const msgs = document.getElementById("chatMessages");
  const div  = document.createElement("div");
  div.className = `msg ${isUser ? "user" : "bot"}`;

  const av    = `<div class="msg-av ${isUser ? "usr" : "bot"}">${isUser ? "👤" : "🌊"}</div>`;
  const lines = text.split("\n");
  let html = "", liLines = [];

  lines.forEach(l => {
    if (l.startsWith("•")) {
      liLines.push(`<li>${l.slice(1).trim()}</li>`);
    } else {
      if (liLines.length) { html += `<ul>${liLines.splice(0).join("")}</ul>`; }
      if (l.trim()) html += `<p>${l}</p>`;
    }
  });
  if (liLines.length) html += `<ul>${liLines.join("")}</ul>`;

  div.innerHTML = `${av}<div class="msg-bubble">${html}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

async function sendChat() {
  const input = document.getElementById("chatInput");
  const text  = input.value.trim();
  if (!text) return;

  appendMsg(text, true);
  input.value = "";

  const msgs = document.getElementById("chatMessages");
  const typingDiv = document.createElement("div");
  typingDiv.className = "msg bot";
  typingDiv.innerHTML = `
    <div class="msg-av bot">🌊</div>
    <div class="msg-bubble">
      <div class="typing-indicator"><span></span><span></span><span></span></div>
    </div>`;
  msgs.appendChild(typingDiv);
  msgs.scrollTop = msgs.scrollHeight;

try {
    const res = await fetch("/api/chat", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ message: text })
    });

    if (!res.ok) throw new Error("API error");

    const data  = await res.json();
    typingDiv.remove();
    const reply = data.reply || getFallback(text);
    appendMsg(reply, false);

  } catch {
    typingDiv.remove();
    appendMsg(getFallback(text), false);
  }
}

function sendPrompt(text) {
  document.getElementById("chatInput").value = text;
  sendChat();
}
// ── INIT EmailJS ──────────────────────────────────────────────
emailjs.init("7amPATc7B-k9wQmt7");
// ── CONTACT FORM (EmailJS) ─────────────────────
const EMAILJS_SERVICE_ID  = "service_u5ardom";
const EMAILJS_TEMPLATE_ID = "template_7wztg6p";
const EMAILJS_PUBLIC_KEY  = "7amPATc7B-k9wQmt7";


// ── CONTACT FORM ──────────────────────────────────────────────
async function handleForm(e) {
  e.preventDefault();
  const form = e.target;
  const btn  = form.querySelector(".btn-submit");
  const inputs  = form.querySelectorAll("input, textarea");
  const name    = inputs[0].value.trim();
  const email   = inputs[1].value.trim();
  const subject = inputs[2].value.trim() || "General Inquiry";
  const message = inputs[3].value.trim();
  if (!name || !email || !message) {
    btn.textContent      = "⚠ Please fill all required fields";
    btn.style.background = "#e67e22";
    setTimeout(() => {
      btn.textContent      = "Send Message →";
      btn.style.background = "";
    }, 2500);
    return;
  }
  btn.textContent   = "Sending...";
  btn.disabled      = true;
  btn.style.opacity = "0.7";
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_name:    "Atlantic Wave",
        from_name:  name,
        from_email: email,
        subject:    subject,
        message:    message
      },
      EMAILJS_PUBLIC_KEY
    );
    btn.textContent      = "✓ Message Sent!";
    btn.style.background = "#2ecc71";
    btn.style.opacity    = "1";
    btn.disabled         = false;
    form.reset();
    setTimeout(() => {
      btn.textContent      = "Send Message →";
      btn.style.background = "";
    }, 4000);
  } catch (err) {
    console.error("EmailJS error:", err);
    btn.textContent      = "✗ Error — try WhatsApp";
    btn.style.background = "#e74c3c";
    btn.style.opacity    = "1";
    btn.disabled         = false;
    setTimeout(() => {
      btn.textContent      = "Send Message →";
      btn.style.background = "";
    }, 4000);
  }
}
// ── NAV ───────────────────────────────────────────────────────
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}
function closeNav() {
  document.getElementById("navLinks").classList.remove("open");
}

// ── SCROLL REVEAL ─────────────────────────────────────────────
function observeReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".reveal:not(.visible)").forEach(el => obs.observe(el));
}

// ── INIT ──────────────────────────────────────────────────────
renderExperiences();
renderBiz();
observeReveal();