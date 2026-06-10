
// ========== TYPING ANIMATION ==========
const texts = [
  "Software Engineer",
  "Laravel Developer",
  "Full Stack Developer",
  "Software Architect",
  "PHP & Laravel Expert",
  "Creating Web Experiences",
  "Writing Clean Code",
  "Solving problems",
  "Bug Fixing"
];
let idx = 0, char = 0, del = false;
const typedEl = document.getElementById("typed-text");

function typeEffect() {
  const current = texts[idx];
  if (del) {
    typedEl.textContent = current.substring(0, char - 1);
    char--;
  } else {
    typedEl.textContent = current.substring(0, char + 1);
    char++;
  }

  if (!del && char === current.length) {
    del = true;
    setTimeout(typeEffect, 2000);
    return;
  }

  if (del && char === 0) {
    del = false;
    idx = (idx + 1) % texts.length;
  }

  setTimeout(typeEffect, del ? 50 : 100);
}
typeEffect();

// ========== NAV SCROLL ==========
const navbar = document.getElementById("navbar");
const hireBtn = document.querySelector(".nav-hire-float");
const langBtn = document.querySelector(".nav-lang-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        hireBtn?.classList.add("scrolled");
        langBtn?.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
        hireBtn?.classList.remove("scrolled");
        langBtn?.classList.remove("scrolled");
    }

});

// ========== MOBILE MENU ==========
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ========== CONTACT FORM ==========
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✨ Thanks for reaching out! I'll respond within 24 hours.");
  e.target.reset();
});

// ========== SCROLL ANIMATION ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card, .cert-card, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(25px)';
  el.style.transition = '0.5s ease';
  observer.observe(el);
});

// ========== PROJECT DATA ==========
const projects = {
  lsg: {
    title: "🏛️ LSG Portal",
    company: "Mysoftheaven (BD) LTD.",
    badge: "Government Portal",
    headerBg: "#f0fdf4",
    badgeBg: "#dcfce7",
    badgeColor: "#166534",
    titleColor: "#14532d",
    companyColor: "#15803d",
    techBg: "#f0fdf4",
    techColor: "#166534",
    techBorder: "#bbf7d0",
    meta: [
      { icon: "📅", label: "2023 — Ongoing" },
      { icon: "💻", label: "Laravel / PHP 8" },
      { icon: "🌐", label: "Web Application" }
    ],
    desc: "A government land service gateway system that provides citizens and officials with a unified portal to manage land-related services. Features role-based access control (RBAC), external API integrations, and multilingual support to serve a diverse user base across Bangladesh.",
    tech: ["Laravel", "PHP 8", "MySQL", "REST API", "RBAC", "Blade Templating", "Bootstrap", "jQuery", "MVC Architecture", "GitHub"],
    links: [
      { label: "🌐 Live Portal", url: "#", type: "primary" }
    ]
  },
  ldtax: {
    title: "📑 LDTAX System",
    company: "Mysoftheaven (BD) LTD.",
    badge: "FinTech / GovTech",
    headerBg: "#fffbeb",
    badgeBg: "#fef3c7",
    badgeColor: "#92400e",
    titleColor: "#78350f",
    companyColor: "#b45309",
    techBg: "#fffbeb",
    techColor: "#92400e",
    techBorder: "#fde68a",
    meta: [
      { icon: "📅", label: "2023 — Ongoing" },
      { icon: "💻", label: "Laravel / PHP 8" },
      { icon: "💳", label: "Payment Gateway" }
    ],
    desc: "A land development tax management system built for government use. Enables citizens to calculate, pay, and track land development tax online. Integrated OTP-based verification for secure authentication, a payment gateway for seamless transactions, and automated reporting for administrators.",
    tech: ["Laravel", "PHP 8", "MySQL", "Payment Gateway", "OTP Auth", "Blade Templating", "Bootstrap", "jQuery", "PDF Reports", "MVC Architecture", "GitHub"],
    links: [
      { label: "🌐 Live System", url: "#", type: "primary" }
    ]
  },
  ecommerce: {
    title: "🛍️ E-commerce Platform",
    company: "Personal / Client Project",
    badge: "E-Commerce",
    headerBg: "#fdf4ff",
    badgeBg: "#fae8ff",
    badgeColor: "#6b21a8",
    titleColor: "#581c87",
    companyColor: "#7e22ce",
    techBg: "#fdf4ff",
    techColor: "#6b21a8",
    techBorder: "#e9d5ff",
    meta: [
      { icon: "📅", label: "2023" },
      { icon: "💻", label: "Laravel / jQuery" },
      { icon: "💳", label: "Stripe Payments" }
    ],
    desc: "A full-featured e-commerce solution built from scratch. Includes product catalog management, shopping cart, secure checkout with Stripe payment integration, order tracking, and inventory management. Admin panel allows real-time stock control and sales analytics.",
    tech: ["Laravel", "PHP 8", "MySQL", "jQuery", "Stripe", "Blade Templating", "Bootstrap", "REST API", "Inventory Management", "Order Tracking", "GitHub"],
    links: [
      { label: "🛒 View Store", url: "#", type: "primary" },
      { label: "⚙️ Admin Panel", url: "#", type: "secondary" }
    ]
  },
  sstex: {
    title: "🏢 SSTEX Admin Panel",
    company: "SSTEX GROUP BD",
    badge: "Web Application",

    images: [
      "images/sstex-admin-dashboard.jpg",
      "images/sstex-home-page.jpg"
    ],


    headerBg: "#f0fdf4",
    badgeBg: "#dcfce7",
    badgeColor: "#166534",
    titleColor: "#14532d",
    companyColor: "#15803d",
    techBg: "#f0fdf4",
    techColor: "#166534",
    techBorder: "#bbf7d0",
    meta: [
      { icon: "📅", label: "Nov 2024 – Jun 2025" },
      { icon: "💻", label: "PHP 8 / Laravel 10" },
      { icon: "🌐", label: "Web Application" }
    ],
    desc: "Developed a fully dynamic admin panel for SSTEX GROUP BD to manage Sliders, Services, Products, CEO Messages, and Blog content. Integrated role-based authentication, optimized MySQL queries, image upload with validation, newsletter system, contact forms, Google OAuth login, and multilingual (Bangla & English) support. Built with responsive design, scalability, and maintainability in mind.",
    tech: ["Laravel 10", "PHP 8", "MySQL", "Blade Templating", "Tailwind CSS", "JavaScript", "REST APIs", "Role-Based Auth", "Google OAuth", "Image Upload & Validation", "Newsletter System", "Contact Form", "Multilingual (Bangla & English)", "MVC Architecture", "GitHub"],
    links: [
      { label: "🖥️ Admin Dashboard", url: "#", type: "primary" },
      { label: "🏠 Home Page", url: "#", type: "secondary" }
    ]
  },
  taskmanager: {
    title: "✅ Task Manager",
    company: "Personal / Team Project",
    badge: "Collaboration Tool",
    headerBg: "#eff6ff",
    badgeBg: "#dbeafe",
    badgeColor: "#1e40af",
    titleColor: "#1e3a8a",
    companyColor: "#1d4ed8",
    techBg: "#eff6ff",
    techColor: "#1e40af",
    techBorder: "#bfdbfe",
    meta: [
      { icon: "📅", label: "2024" },
      { icon: "💻", label: "React / Laravel" },
      { icon: "⚡", label: "Real-time / WebSocket" }
    ],
    desc: "A team collaboration tool with real-time task updates using WebSocket technology. Features drag-and-drop Kanban boards, task assignment, priority management, deadline tracking, and team chat. React frontend communicates with a Laravel REST API backend for seamless user experience.",
    tech: ["React", "Laravel", "PHP 8", "MySQL", "WebSocket", "REST API", "Tailwind CSS", "Kanban Board", "Real-time Updates", "JWT Auth", "GitHub"],
    links: [
      { label: "🚀 Live App", url: "#", type: "primary" },
      { label: "💻 Source Code", url: "#", type: "secondary" }
    ]
  },
  analytics: {
    title: "📊 Analytics Dashboard",
    company: "Personal / Client Project",
    badge: "Data Visualization",
    headerBg: "#f0fdfa",
    badgeBg: "#ccfbf1",
    badgeColor: "#065f46",
    titleColor: "#064e3b",
    companyColor: "#059669",
    techBg: "#f0fdfa",
    techColor: "#065f46",
    techBorder: "#99f6e4",
    meta: [
      { icon: "📅", label: "2024" },
      { icon: "💻", label: "React / Chart.js" },
      { icon: "📊", label: "Data Visualization" }
    ],
    desc: "A real-time analytics dashboard with interactive charts and live data feeds via REST API. Displays KPIs, user activity trends, revenue metrics, and conversion funnels through visually rich Chart.js components. Designed for business intelligence and performance monitoring with a clean, modern UI.",
    tech: ["React", "Chart.js", "REST API", "JavaScript", "Tailwind CSS", "Real-time Data", "Recharts", "Axios", "CSS Animations", "GitHub"],
    links: [
      { label: "📊 Live Dashboard", url: "#", type: "primary" },
      { label: "💻 Source Code", url: "#", type: "secondary" }
    ]
  }
};

// ========== OPEN MODAL ==========
function openModal(key) {
  const p = projects[key];
  if (!p) return;

  document.getElementById('modalHeader').style.background = p.headerBg;

  const badge = document.getElementById('modalBadge');
  badge.textContent = p.badge;
  badge.style.cssText = `background:${p.badgeBg}; color:${p.badgeColor}; font-size:0.6rem; font-weight:700; text-transform:uppercase; letter-spacing:2px; padding:4px 12px; border-radius:20px; margin-bottom:0.7rem; display:inline-block; position:relative; z-index:1;`;

  const title = document.getElementById('modalTitle');
  title.textContent = p.title;
  title.style.color = p.titleColor;

  const company = document.getElementById('modalCompany');
  company.textContent = p.company;
  company.style.color = p.companyColor;

  const meta = document.getElementById('modalMeta');
  meta.innerHTML = p.meta.map(m =>
    `<span class="modal-meta-chip">${m.icon} ${m.label}</span>`
  ).join('');

  document.getElementById('modalDesc').textContent = p.desc;

  const techWrap = document.getElementById('modalTech');
  techWrap.innerHTML = p.tech.map(t =>
    `<span class="modal-tech-chip" style="background:${p.techBg}; color:${p.techColor}; border:1px solid ${p.techBorder};">${t}</span>`
  ).join('');

  const links = document.getElementById('modalLinks');
  links.innerHTML = p.links.map(l => {
    const cls = l.type === 'primary' ? 'modal-link-btn modal-link-primary' : 'modal-link-btn modal-link-secondary';
    return `<a href="${l.url}" class="${cls}" target="_blank">${l.label}</a>`;
  }).join('');

  const overlay = document.getElementById('projectModal');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ========== CLOSE MODAL ==========
function closeModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('projectModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeAboutModal();
    closeCertModal();
  }
});

// About Modal
function openAboutModal() {
  document.getElementById('aboutModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAboutModal() {
  document.getElementById('aboutModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('aboutModal').addEventListener('click', function(e) {
  if (e.target === this) closeAboutModal();
});

// About Modal End

// Certifications
const certs = {
  degree: {
    title: "🎓 Bachelor of Science",
    org: "Computer Science & Engineering · Faculty of Engineering",
    badge: "Academic Degree",
    headerBg: "#eff6ff",
    badgeBg: "#dbeafe", badgeColor: "#1e40af",
    titleColor: "#1e3a8a", orgColor: "#1d4ed8",
    meta: [
      { icon: "📅", label: "Completed June 2022" },
      { icon: "🏛️", label: "Faculty of Engineering" },
      { icon: "💻", label: "Computer Science & Engineering" }
    ],
    desc: "Successfully completed my Bachelor's degree program in Computer Science and Engineering in June 2022 from the Faculty of Engineering. The program covered core areas of software engineering, algorithms, data structures, database systems, and computer networks.",
    links: []
  },
  cyber: {
    title: "🛡️ Cybersecurity for Professionals",
    org: "Byte Capsule · 4th Batch",
    badge: "🏆 Batch Topper",
    headerBg: "#fdf4ff",
    badgeBg: "#fae8ff", badgeColor: "#6b21a8",
    titleColor: "#581c87", orgColor: "#7e22ce",
    meta: [
      { icon: "📅", label: "Aug 2023" },
      { icon: "⏱️", label: "6-Month Program" },
      { icon: "🏆", label: "Batch Topper" }
    ],
    desc: "Completed the Cybersecurity for Professionals course in August 2023 from the 4th batch of Byte Capsule. The course was a 6-month self-learning program covering cybersecurity fundamentals, ethical hacking, network security, and secure coding practices. Achieved batch topper distinction.",
    links: [
      { label: "🔗 View Certificate", url: "#", type: "primary" }
    ]
  },
  bigdata: {
    title: "📊 Big Data Technology",
    org: "IIT, University of Dhaka · EDGE Project",
    badge: "Govt. Program",
    headerBg: "#f0fdfa",
    badgeBg: "#ccfbf1", badgeColor: "#065f46",
    titleColor: "#064e3b", orgColor: "#059669",
    meta: [
      { icon: "📅", label: "26 May – 01 Aug 2023" },
      { icon: "🏛️", label: "University of Dhaka" },
      { icon: "🌐", label: "BCC · ICT Division" }
    ],
    desc: "Successfully completed the training on Big Data Technology under the Hire and Train program of the Enhancing Digital Government & Economy (EDGE) project by the Bangladesh Computer Council (BCC), ICT Division. The program was organized by Mysoftheaven (BD) Ltd. and managed by the Institute of Information Technology (IIT), University of Dhaka — conducted from 26 May 2023 to 01 August 2023.",
    links: [
      { label: "🔗 View Certificate", url: "#", type: "primary" }
    ]
  },
  employ: {
    title: "💼 21st Century Employability Skilling",
    org: "Wadhwani Foundation · EDGE (BCC)",
    badge: "Advanced Level",
    headerBg: "#fffbeb",
    badgeBg: "#fef3c7", badgeColor: "#92400e",
    titleColor: "#78350f", orgColor: "#b45309",
    meta: [
      { icon: "📅", label: "27 Nov 2023" },
      { icon: "📈", label: "Advanced Level" },
      { icon: "🌐", label: "Digital Government & Economy — EDGE" }
    ],
    desc: "Completed the 21st Century Employability Skilling Program — Advanced level on 27 November 2023 under the Digital Government and Economy — EDGE program by BCC. The program covered professional skills, digital literacy, workplace communication, and career readiness for the modern tech industry.",
    links: [
      { label: "🔗 View Certificate", url: "#", type: "primary" }
    ]
  },
  lean: {
    title: "📋 Lean Project Management",
    org: "LeanPM® Foundation",
    badge: "Professional Cert",
    headerBg: "#f0fdf4",
    badgeBg: "#dcfce7", badgeColor: "#166534",
    titleColor: "#14532d", orgColor: "#15803d",
    meta: [
      { icon: "📅", label: "Feb 2026" },
      { icon: "🏅", label: "LeanPM® Foundation" },
      { icon: "⚙️", label: "Agile & Lean Methodology" }
    ],
    desc: "Completed the LeanPM® Foundation certification in Lean Project Management in February 2026. The certification covers lean principles, agile methodologies, waste elimination, continuous improvement (Kaizen), and applying lean thinking to software project management.",
    links: [
      { label: "🔗 View Certificate", url: "#", type: "primary" }
    ]
  }
};

function openCertModal(key) {
  const c = certs[key];
  if (!c) return;

  document.getElementById('certModalHeader').style.background = c.headerBg;

  const badge = document.getElementById('certBadge');
  badge.textContent = c.badge;
  badge.style.cssText = `background:${c.badgeBg};color:${c.badgeColor};font-size:0.6rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;padding:4px 12px;border-radius:20px;margin-bottom:0.7rem;display:inline-block;`;

  const title = document.getElementById('certTitle');
  title.textContent = c.title;
  title.style.color = c.titleColor;

  const org = document.getElementById('certOrg');
  org.textContent = c.org;
  org.style.color = c.orgColor;

  document.getElementById('certMeta').innerHTML = c.meta.map(m =>
    `<span class="modal-meta-chip">${m.icon} ${m.label}</span>`
  ).join('');

  document.getElementById('certDesc').textContent = c.desc;

  document.getElementById('certLinks').innerHTML = c.links.map(l =>
    `<a href="${l.url}" class="modal-link-btn ${l.type === 'primary' ? 'modal-link-primary' : 'modal-link-secondary'}" target="_blank">${l.label}</a>`
  ).join('') || '<span style="font-size:0.78rem;color:var(--ink-3);">No external link available.</span>';

  document.getElementById('certModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  document.getElementById('certModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('certModal').addEventListener('click', function(e) {
  if (e.target === this) closeCertModal();
});

// Certifications End