/**
 * Salike Kranthi Kowshik - Portfolio Interactive Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
  initThemeToggle();
  initNavbarScroll();
  initMobileMenu();
  renderSkills("programming");
  renderProjects("all");
  initProjectFilters();
  initSkillTabs();
  renderEducationAndCerts();
  renderAchievementsAndLeadership();
  initContactForm();
  initModals();
});

/* 1. Typewriter Animation */
function initTypewriter() {
  const element = document.getElementById("typewriter-text");
  if (!element) return;

  const titles = PORTFOLIO_DATA.profile.typewriterTitles;
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const delayBetween = 2000;

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      element.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    let delta = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentTitle.length) {
      delta = delayBetween;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      delta = 500;
    }

    setTimeout(type, delta);
  }

  type();
}

/* 2. Theme Toggle (Dark / Light) */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const themeIcon = toggleBtn ? toggleBtn.querySelector("i") : null;
  const currentTheme = localStorage.getItem("portfolio_theme") || "dark";

  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = activeTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("portfolio_theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === "light") {
      themeIcon.className = "fa-solid fa-moon";
    } else {
      themeIcon.className = "fa-solid fa-sun";
    }
  }
}

/* 3. Navbar Scroll Effect */
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // ScrollSpy active link detection
    let currentSectionId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });
}

/* 4. Mobile Menu */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = menuBtn.querySelector("i");
      if (navLinks.classList.contains("active")) {
        icon.className = "fa-solid fa-xmark";
      } else {
        icon.className = "fa-solid fa-bars";
      }
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.querySelector("i").className = "fa-solid fa-bars";
      });
    });
  }
}

/* 5. Render Skills */
function renderSkills(categoryId) {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  const category = PORTFOLIO_DATA.skillsCategories.find((c) => c.id === categoryId) || PORTFOLIO_DATA.skillsCategories[0];

  grid.innerHTML = category.skills
    .map(
      (skill) => `
    <div class="glass-card skill-card">
      <div class="skill-header">
        <div class="skill-info">
          <div class="skill-icon">
            <i class="${skill.icon}"></i>
          </div>
          <span class="skill-name">${skill.name}</span>
        </div>
        <span class="skill-percent">${skill.level}%</span>
      </div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" style="width: 0%" data-level="${skill.level}%"></div>
      </div>
    </div>
  `
    )
    .join("");

  // Trigger progress bar animations
  setTimeout(() => {
    grid.querySelectorAll(".progress-bar-fill").forEach((bar) => {
      bar.style.width = bar.getAttribute("data-level");
    });
  }, 100);
}

function initSkillTabs() {
  const container = document.getElementById("skills-tabs");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skillsCategories
    .map(
      (cat, index) => `
    <button class="skill-tab-btn ${index === 0 ? "active" : ""}" data-category="${cat.id}">
      ${cat.name}
    </button>
  `
    )
    .join("");

  container.querySelectorAll(".skill-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".skill-tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderSkills(btn.getAttribute("data-category"));
    });
  });
}

/* 6. Render Projects */
function renderProjects(filterCategory) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filteredProjects =
    filterCategory === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === filterCategory);

  grid.innerHTML = filteredProjects
    .map(
      (project) => `
    <div class="glass-card project-card">
      <div class="project-img-wrapper">
        <img src="${project.image}" alt="${project.title}">
        <span class="project-badge-tag">${project.badge}</span>
      </div>
      <div class="project-content">
        <span class="project-date">${project.period}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        
        <div class="project-tech-stack">
          ${project.techStack.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
        </div>

        <div class="project-actions">
          <button class="btn btn-primary btn-sm open-project-modal" data-id="${project.id}">
            <i class="fa-solid fa-circle-info"></i> Project Details
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Attach modal handlers
  grid.querySelectorAll(".open-project-modal").forEach((btn) => {
    btn.addEventListener("click", () => {
      openProjectModal(btn.getAttribute("data-id"));
    });
  });
}

function initProjectFilters() {
  const filtersContainer = document.getElementById("project-filters");
  if (!filtersContainer) return;

  filtersContainer.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filtersContainer.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.getAttribute("data-filter"));
    });
  });
}

/* 7. Education & Certifications */
function renderEducationAndCerts() {
  const eduContainer = document.getElementById("education-timeline");
  const certContainer = document.getElementById("certifications-list");

  if (eduContainer) {
    eduContainer.innerHTML = PORTFOLIO_DATA.education
      .map(
        (edu) => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="glass-card timeline-content">
          <span class="timeline-period">${edu.period}</span>
          <h3 class="timeline-title">${edu.degree}</h3>
          <p class="timeline-institution">${edu.institution}</p>
          <span class="timeline-grade">${edu.grade}</span>
          <p style="margin-top: 0.6rem; font-size: 0.88rem; color: var(--text-secondary);">${edu.details}</p>
        </div>
      </div>
    `
      )
      .join("");
  }

  if (certContainer) {
    certContainer.innerHTML = PORTFOLIO_DATA.certifications
      .map(
        (cert) => `
      <div class="glass-card cert-card">
        <div class="cert-icon">
          <i class="${cert.icon}"></i>
        </div>
        <div class="cert-info">
          <h4>${cert.title}</h4>
          <p class="cert-issuer">${cert.issuer}</p>
          <span class="cert-date"><i class="fa-regular fa-calendar"></i> ${cert.date}</span>
        </div>
      </div>
    `
      )
      .join("");
  }
}

/* 8. Achievements & Leadership */
function renderAchievementsAndLeadership() {
  const container = document.getElementById("achievements-grid");
  if (!container) return;

  const combinedItems = [
    ...PORTFOLIO_DATA.achievements.map((item) => ({ ...item, tag: "Achievement" })),
    ...PORTFOLIO_DATA.leadership.map((item) => ({ ...item, tag: "Leadership" }))
  ];

  container.innerHTML = combinedItems
    .map(
      (item) => `
    <div class="glass-card achievement-card">
      <div class="achievement-icon">
        <i class="${item.icon}"></i>
      </div>
      <div class="achievement-details">
        <span style="font-size: 0.75rem; color: var(--accent-purple); font-weight: 700; text-transform: uppercase;">${item.tag}</span>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    </div>
  `
    )
    .join("");
}

/* 9. Interactive Modals */
function initModals() {
  const modalOverlay = document.getElementById("modal-overlay");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  if (!modalOverlay || !modalCloseBtn) return;

  modalCloseBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Resume Modal trigger
  const viewResumeBtn = document.getElementById("view-resume-btn");
  if (viewResumeBtn) {
    viewResumeBtn.addEventListener("click", openResumeModal);
  }
}

function closeModal() {
  const modalOverlay = document.getElementById("modal-overlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
  }
}

function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
  if (!project) return;

  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalBody = document.getElementById("modal-body");

  modalTitle.textContent = project.title;
  modalSubtitle.textContent = `${project.badge} • ${project.period}`;

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem; max-height: 280px; overflow: hidden; border-radius: var(--radius-md);">
      <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <p style="margin-bottom: 1.25rem;">${project.description}</p>
    <h4 style="color: var(--text-primary); margin-bottom: 0.75rem;">Key Architecture & Technical Contributions:</h4>
    <ul>
      ${project.highlights.map((h) => `<li>${h}</li>`).join("")}
    </ul>
    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Technologies Utilized:</h4>
    <div class="project-tech-stack" style="margin-bottom: 1.5rem;">
      ${project.techStack.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
    </div>
  `;

  document.getElementById("modal-overlay").classList.add("active");
}

function openResumeModal() {
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalBody = document.getElementById("modal-body");

  const prof = PORTFOLIO_DATA.profile;

  modalTitle.textContent = `Resume - ${prof.name}`;
  modalSubtitle.textContent = `Computer Science Undergraduate | ${prof.email} | ${prof.phone}`;

  modalBody.innerHTML = `
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 0.9rem;">
      <h3 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">Career Objective</h3>
      <p style="margin-bottom: 1.25rem;">${prof.objective}</p>
      
      <h3 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">Education</h3>
      <ul style="margin-bottom: 1.25rem;">
        ${PORTFOLIO_DATA.education.map((e) => `<li><strong>${e.institution}</strong> - ${e.degree} (${e.period}) [${e.grade}]</li>`).join("")}
      </ul>

      <h3 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">Technical Skills</h3>
      <ul style="margin-bottom: 1.25rem;">
        ${PORTFOLIO_DATA.skillsCategories.map((sc) => `<li><strong>${sc.name}:</strong> ${sc.skills.map((s) => s.name).join(", ")}</li>`).join("")}
      </ul>

      <h3 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">Projects Summary</h3>
      <ul style="margin-bottom: 1.25rem;">
        ${PORTFOLIO_DATA.projects.map((p) => `<li><strong>${p.title}:</strong> ${p.description}</li>`).join("")}
      </ul>

      <div style="display: flex; gap: 1rem; margin-top: 1.5rem; justify-content: flex-end;">
        <button class="btn btn-primary btn-sm" onclick="window.print()">
          <i class="fa-solid fa-print"></i> Print / Save as PDF
        </button>
      </div>
    </div>
  `;

  document.getElementById("modal-overlay").classList.add("active");
}

/* 10. Contact Form & Quick Copy */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;

    alert(`Thank you, ${name}! Your message has been recorded. Salike Kranthi Kowshik will reply to ${email} soon.`);
    form.reset();
  });
}

function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`${label} copied to clipboard: ${text}`);
  });
}
