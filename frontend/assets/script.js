(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const locale = (html.getAttribute("lang") || "en").slice(0, 2).toLowerCase();
    safeSet("lang", locale);

    const i18n = {
      en: {
        more: "Show More",
        less: "Show Less",
        prompt: "[guest@cloud-resume ~]$",
        cmds: {
          help: `
    <div><span class="cmd">whoami</span> : General information</div>
    <div><span class="cmd">experience</span> : Technical experience</div>
    <div><span class="cmd">education</span> : Educational background</div>
    <div><span class="cmd">skills</span> : Current technical skills</div>
    <div><span class="cmd">projects</span> : Featured projects</div>
    <div><span class="cmd">certs</span> : Certifications</div>
    <div><span class="cmd">resume</span> : Download CV</div>
    <div><span class="cmd">github</span> : GitHub profile</div>
    <div><span class="cmd">linkedin</span> : LinkedIn profile</div>
    <div><span class="cmd">contact</span> : Email</div>
    <div><span class="cmd">sudo</span> : Try it :)</div>
    <div><span class="cmd">clear</span> : Clear the terminal</div>`,
          whoami: `
<pre style="color:#38bdf8;font-family:monospace;line-height:1.2;">
 _____ _                 ____               _   _            _ _     
|  ___(_)_ __ __ _ ___  | __ )  ___ _ __   | \\ | | __ _  ___(_) |__  
| |_  | | '__/ _\` / __| |  _ \\ / _ \\ '_ \\  |  \\| |/ _\` |/ __| | '_ \\ 
|  _| | | | | (_| \\__ \\ | |_) |  __/ | | | | |\\  | (_| | (__| | |_) |
|_|   |_|_|  \\__,_|___/ |____/ \\___|_| |_| |_| \\_|\\__,_|\\___|_|_.__/ 
</pre>
<div>Cloud & DevOps Engineer - AWS, Azure, Kubernetes & Terraform Certified</div>`,
          experience:
            "Built prod-ready infra on AWS (EKS, VPC, ALB), GitOps with Argo CD & Helm, observability with Prometheus & Grafana, CI/CD with GitHub Actions / GitLab CI / Jenkins / CircleCI, and automation with Terraform & Ansible.",
          education: "Cloud & DevOps Engineering - ESPRIT",
          skills:
            "AWS, Azure, Kubernetes, OpenShift, Terraform, Helm, Ansible, Docker, Docker Compose, KEDA, Argo CD, Jenkins, GitLab CI, GitHub Actions, CircleCI, Prometheus, Grafana, ELK, Trivy, SonarQube, Nexus, Python, Bash, Git",
          projects: `
<div><a href="https://github.com/firassBenNacib/KubleOps" target="_blank" rel="noopener noreferrer">KubleOps</a></div>
<div><a href="https://github.com/firassBenNacib/EcoAuto_AWS_Terraform" target="_blank" rel="noopener noreferrer">EcoAuto</a></div>
<div><a href="https://github.com/firassBenNacib/CloudResume" target="_blank" rel="noopener noreferrer">Cloud Resume Challenge</a></div>
<div><a href="https://github.com/firassBenNacib/OptiChat" target="_blank" rel="noopener noreferrer">OptiChat</a></div>
<div>Release Automation Platform</div>`,
          certs: `
<div><a href="https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/6daec97e-0738-43f1-9dba-1395f7cb2758-firas-ben-nacib-748a690a-feaa-43b1-b7a1-07bcea780ead-certificate.pdf" target="_blank" rel="noopener noreferrer">Certified Kubernetes Administrator (CKA)</a></div>
<div><a href="https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/6daec97e-0738-43f1-9dba-1395f7cb2758-firas-ben-nacib-30dec65f-5968-475f-b091-babe21e4b554-certificate.pdf" target="_blank" rel="noopener noreferrer">Certified Kubernetes Application Developer (CKAD)</a></div>
<div><a href="https://www.credly.com/badges/5a87f62e-a264-4349-89ea-e1d8cbf9ae2d/public_url" target="_blank" rel="noopener noreferrer">HashiCorp Terraform Associate (003)</a></div>
<div><a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/1a6a5fa99c404436b7fa2e8de97fc3d1" target="_blank" rel="noopener noreferrer">AWS Certified Solutions Architect - Associate</a></div>
<div><a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/1d6689b1355e481ba35a7bfa6e9c4dfa" target="_blank" rel="noopener noreferrer">AWS Certified Cloud Practitioner</a></div>
<div><a href="https://learn.microsoft.com/api/credentials/share/fr-fr/FirasBenNacib-6669/D1931B541BD8428E?sharingId=1EE28426564D1A99" target="_blank" rel="noopener noreferrer">Microsoft Azure Fundamentals (AZ-900)</a></div>
<div><a href="https://www.credly.com/badges/2d760ef9-0f9a-4ed7-9c55-3a3180aadb40/public_url" target="_blank" rel="noopener noreferrer">Cisco Network Security</a></div>`,
          github:
            '<a href="https://github.com/firassBenNacib" target="_blank" rel="noopener noreferrer">github.com/firassBenNacib</a>',
          resume:
            '<a href="files/Firas_Ben_Nacib_Resume_EN.pdf" target="_blank" rel="noopener noreferrer">firas_ben_nacib resume</a>',
          linkedin:
            '<a href="https://www.linkedin.com/in/firas-ben-nacib-27a858243" target="_blank" rel="noopener noreferrer">linkedin.com/in/firas-ben-nacib-27a858243</a>',
          contact:
            '<a href="mailto:bennacibfiras@gmail.com">bennacibfiras@gmail.com</a>',
          sudo:
            '<span style="color:#ff3366;">Permission denied:</span> you have no power here 🧙‍♂️',
          notfound: (cmd) =>
            `<span style="color:#ff3366;">command not found: ${escapeHTML(cmd)}</span>`,
        },
      },
      fr: {
        more: "Afficher plus",
        less: "Afficher moins",
        prompt: "[invite@cloud-resume ~]$",
        cmds: {
          help: `
    <div><span class="cmd">whoami</span> : Infos générales</div>
    <div><span class="cmd">experience</span> : Expérience technique</div>
    <div><span class="cmd">education</span> : Parcours académique</div>
    <div><span class="cmd">skills</span> : Compétences techniques</div>
    <div><span class="cmd">projects</span> : Projets principaux</div>
    <div><span class="cmd">certs</span> : Certifications</div>
    <div><span class="cmd">resume</span> : Télécharger le CV</div>
    <div><span class="cmd">github</span> : Profil GitHub</div>
    <div><span class="cmd">linkedin</span> : Profil LinkedIn</div>
    <div><span class="cmd">contact</span> : Email</div>
    <div><span class="cmd">sudo</span> : Essaie :)</div>
    <div><span class="cmd">clear</span> : Effacer le terminal</div>`,
          whoami: `
<pre style="color:#38bdf8;font-family:monospace;line-height:1.2;">
 _____ _                 ____               _   _            _ _     
| ___(_)_ __ __ _ ___  | __ )  ___ _ __   | \\ | | __ _  ___(_) |__  
| |_  | | '__/ _\` / __| |  _ \\ / _ \\ '_ \\  |  \\| |/ _\` |/ __| | '_ \\ 
|  _| | | | | (_| \\__ \\ | |_) |  __/ | | | | |\\  | (_| | (__| | |_) |
|_|   |_|_|  \\__,_|___/ |____/ \\___|_| |_| |_| \\_|\\__,_|\\___|_|_.__/ 
</pre>
<div>Ingénieur Cloud & DevOps - Certifié AWS, Azure, Kubernetes & Terraform</div>`,
          experience:
            "Mise en place d'infras prêtes pour la prod sur AWS (EKS, VPC, ALB), GitOps avec Argo CD & Helm, observabilité Prometheus & Grafana, CI/CD (GitHub Actions / GitLab CI / Jenkins / CircleCI), automatisation Terraform & Ansible.",
          education: "Cloud & DevOps Engineering - ESPRIT",
          skills:
            "AWS, Azure, Kubernetes, OpenShift, Terraform, Helm, Ansible, Docker, Docker Compose, KEDA, Argo CD, Jenkins, GitLab CI, GitHub Actions, CircleCI, Prometheus, Grafana, ELK, Trivy, SonarQube, Nexus, Python, Bash, Git",
          projects: `
<div><a href="https://github.com/firassBenNacib/KubleOps" target="_blank" rel="noopener noreferrer">KubleOps</a></div>
<div><a href="https://github.com/firassBenNacib/EcoAuto_AWS_Terraform" target="_blank" rel="noopener noreferrer">EcoAuto</a></div>
<div><a href="https://github.com/firassBenNacib/CloudResume" target="_blank" rel="noopener noreferrer">Cloud Resume Challenge</a></div>
<div><a href="https://github.com/firassBenNacib/OptiChat" target="_blank" rel="noopener noreferrer">OptiChat</a></div>
<div>Plateforme d’Automatisation des Déploiements</div>`,
          certs: `
<div><a href="https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/6daec97e-0738-43f1-9dba-1395f7cb2758-firas-ben-nacib-748a690a-feaa-43b1-b7a1-07bcea780ead-certificate.pdf" target="_blank" rel="noopener noreferrer">Certified Kubernetes Administrator (CKA)</a></div>
<div><a href="https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/6daec97e-0738-43f1-9dba-1395f7cb2758-firas-ben-nacib-30dec65f-5968-475f-b091-babe21e4b554-certificate.pdf" target="_blank" rel="noopener noreferrer">Certified Kubernetes Application Developer (CKAD)</a></div>
<div><a href="https://www.credly.com/badges/5a87f62e-a264-4349-89ea-e1d8cbf9ae2d/public_url" target="_blank" rel="noopener noreferrer">HashiCorp Terraform Associate (003)</a></div>
<div><a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/1a6a5fa99c404436b7fa2e8de97fc3d1" target="_blank" rel="noopener noreferrer">AWS Certified Solutions Architect - Associate</a></div>
<div><a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/1d6689b1355e481ba35a7bfa6e9c4dfa" target="_blank" rel="noopener noreferrer">AWS Certified Cloud Practitioner</a></div>
<div><a href="https://learn.microsoft.com/api/credentials/share/fr-fr/FirasBenNacib-6669/D1931B541BD8428E?sharingId=1EE28426564D1A99" target="_blank" rel="noopener noreferrer">Microsoft Azure Fundamentals (AZ-900)</a></div>
<div><a href="https://www.credly.com/badges/2d760ef9-0f9a-4ed7-9c55-3a3180aadb40/public_url" target="_blank" rel="noopener noreferrer">Cisco Network Security</a></div>`,
          github:
            '<a href="https://github.com/firassBenNacib" target="_blank" rel="noopener noreferrer">github.com/firassBenNacib</a>',
          resume:
            '<a href="../files/Firas_Ben_Nacib_Resume_FR.pdf" target="_blank" rel="noopener noreferrer">firas_ben_nacib cv</a>',
          linkedin:
            '<a href="https://www.linkedin.com/in/firas-ben-nacib-27a858243" target="_blank" rel="noopener noreferrer">linkedin.com/in/firas-ben-nacib-27a858243</a>',
          contact:
            '<a href="mailto:bennacibfiras@gmail.com">bennacibfiras@gmail.com</a>',
          sudo:
            '<span style="color:#ff3366;">Accès refusé :</span> aucun pouvoir ici 🧙‍♂️',
          notfound: (cmd) =>
            `<span style="color:#ff3366;">commande introuvable : ${escapeHTML(cmd)}</span>`,
        },
      },
    };

    const L = i18n[locale] || i18n.en;

    const toggleBtn = byId("theme-toggle-btn") || document.querySelector(".theme-toggle");
    const moreBtn = byId("more-projects-toggle");
    const moreSection = byId("more-projects-section");

    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    const storedTheme = safeGet("theme");
    let theme = storedTheme || (prefersDark && prefersDark.matches ? "dark" : "light");
    setTheme(theme);

    prefersDark && prefersDark.addEventListener && prefersDark.addEventListener("change", (e) => {
      if (!safeGet("theme")) setTheme(e.matches ? "dark" : "light");
    });

    if (toggleBtn) {
      toggleBtn.setAttribute("aria-pressed", String(theme === "dark"));
      toggleBtn.addEventListener("click", () => {
        const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
        safeSet("theme", next);
        setTheme(next);
      });
    }

    function setTheme(mode) {
      const html = document.documentElement;
      html.setAttribute("data-theme", mode);
      html.classList.toggle("dark", mode === "dark");
      if (toggleBtn) {
        toggleBtn.classList.toggle("theme-toggle--toggled", mode === "dark");
        toggleBtn.setAttribute("aria-pressed", String(mode === "dark"));
        const title = mode === "dark" ? "Switch to light theme" : "Switch to dark theme";
        toggleBtn.setAttribute("title", title);
        toggleBtn.setAttribute("aria-label", "Toggle theme");
      }
    }

    const langToggle = byId("lang-toggle");
    const langMenu = byId("lang-menu");
    if (langToggle && langMenu) {
      langToggle.setAttribute("aria-expanded", "false");
      langToggle.setAttribute("aria-haspopup", "true");

      langToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const added = langMenu.classList.toggle("hidden");
        langToggle.setAttribute("aria-expanded", String(!added));
      });

      langMenu.querySelectorAll("a[hreflang]").forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          const code = a.getAttribute("hreflang")?.toLowerCase() === "fr" ? "fr" : "en";
          goToLang(code);
        });
      });

      document.addEventListener("click", (e) => {
        if (!e.target.closest(".lang-dropdown") && !langMenu.classList.contains("hidden")) {
          langMenu.classList.add("hidden");
          langToggle.setAttribute("aria-expanded", "false");
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !langMenu.classList.contains("hidden")) {
          langMenu.classList.add("hidden");
          langToggle.setAttribute("aria-expanded", "false");
          langToggle.focus();
        }
      });
    }

    function goToLang(code) {
      safeSet("lang", code);
      const base = new URL(location.href);
      let target;
      if (code === "fr") {
        target = new URL(base.pathname.includes("/fr/") ? "./" : "fr/", base);
      } else {
        target = new URL(base.pathname.includes("/fr/") ? "../" : "./", base);
      }
      location.assign(target.href);
    }

    if (moreBtn && moreSection) {
      moreBtn.setAttribute("aria-expanded", "false");
      moreBtn.innerHTML = `${L.more}<span class="arrow-icon">▼</span>`;
      moreBtn.addEventListener("click", () => {
        const expanded = moreSection.classList.contains("show");
        moreSection.classList.toggle("collapse", expanded);
        moreSection.classList.toggle("expand", !expanded);
        moreSection.classList.toggle("show", !expanded);
        moreBtn.classList.toggle("collapsed", expanded);
        moreBtn.setAttribute("aria-expanded", String(!expanded));
        moreBtn.innerHTML = !expanded
          ? `${L.less}<span class="arrow-icon">▲</span>`
          : `${L.more}<span class="arrow-icon">▼</span>`;
      });
    }

    const API_URL = "{{API_URL}}";
    if (typeof API_URL === "string" && !API_URL.includes("{{")) {
      const options =
        typeof AbortSignal !== "undefined" && "timeout" in AbortSignal
          ? { signal: AbortSignal.timeout(6000) }
          : {};
      fetch(API_URL, options)
        .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.statusText))))
        .then((data) => {
          const el = byId("visitor-count");
          if (el && typeof data?.visits !== "undefined") el.textContent = String(data.visits);
        })
        .catch(() => {});
    }

    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".expand-btn");
      if (!btn) return;
      if (btn.id === "more-projects-toggle") return;
      const block = btn.closest(".project")?.querySelector(".project-tools-collapsible");
      if (block) {
        block.classList.toggle("open");
        btn.classList.toggle("open");
      }
    });

    const terminalBody = byId("terminal-body");
    if (terminalBody) initTerminal(terminalBody, locale, i18n);

    initDynamicNavbar();

    function initDynamicNavbar() {
      const navbar = document.querySelector(".navbar");
      if (!navbar) return;

      const isFixed = navbar.classList.contains("fixed");
      let lastY = window.scrollY || 0;
      let ticking = false;

      const onScroll = () => {
        const y = window.scrollY || 0;
        if (y > 8) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
        if (!isFixed) {
          const goingDown = y > lastY;
          const past = y > 120;
          if (goingDown && past) navbar.classList.add("nav-hidden");
          else navbar.classList.remove("nav-hidden");
        }
        lastY = y;
        ticking = false;
      };

      window.addEventListener(
        "scroll",
        () => {
          if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
          }
        },
        { passive: true }
      );

      onScroll();
    }
  });

  function initTerminal(terminalBody, locale = "en", i18nMap) {
    const L = (i18nMap && i18nMap[locale]) || i18nMap.en;
    const PROMPT = L.prompt;
    const MAX_HISTORY = 50;

    const COMMANDS = {
      help: L.cmds.help,
      whoami: L.cmds.whoami,
      experience: L.cmds.experience,
      education: L.cmds.education,
      skills: L.cmds.skills,
      projects: L.cmds.projects,
      certs: L.cmds.certs,
      resume: L.cmds.resume,
      github: L.cmds.github,
      linkedin: L.cmds.linkedin,
      contact: L.cmds.contact,
      sudo: L.cmds.sudo,
    };

    const history = [];
    let historyIndex = -1;

    createLine();

    function createLine() {
      const line = el("div", { class: "line" });
      const prompt = el("span", { class: "prompt" }, PROMPT);
      const input = el("input", { class: "command-input", type: "text", autocomplete: "off" });
      input.addEventListener("keydown", handleInput);
      line.appendChild(prompt);
      line.appendChild(input);
      terminalBody.appendChild(line);
      input.focus();
    }

    function handleInput(e) {
      const input = e.target;
      if (e.key === "Enter") {
        const command = input.value.trim();
        if (command) {
          history.push(command);
          if (history.length > MAX_HISTORY) history.shift();
          historyIndex = history.length;
        }
        const echo = el("div", { class: "line" });
        echo.appendChild(el("span", { class: "prompt" }, PROMPT));
        echo.appendChild(document.createTextNode(" " + command));
        terminalBody.appendChild(echo);
        input.parentElement.remove();
        executeCommand(command);
      } else if (e.key === "ArrowUp") {
        if (historyIndex > 0) {
          historyIndex--;
          input.value = history[historyIndex] || "";
        }
      } else if (e.key === "ArrowDown") {
        if (historyIndex < history.length - 1) {
          historyIndex++;
          input.value = history[historyIndex] || "";
        } else {
          historyIndex = history.length;
          input.value = "";
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const match = Object.keys(COMMANDS).find((c) => c.startsWith(input.value));
        if (match) input.value = match;
      }
    }

    function executeCommand(cmd) {
      const out = el("div", { class: "output" });
      if (cmd === "clear") {
        terminalBody.textContent = "";
        createLine();
        return;
      }
      const response = COMMANDS[cmd];
      printOutput(out, response || (L.cmds.notfound ? L.cmds.notfound(cmd) : ""));
    }

    function printOutput(node, html) {
      node.innerHTML = html;
      terminalBody.appendChild(node);
      createLine();
      terminalBody.scrollTo({ top: terminalBody.scrollHeight, behavior: "smooth" });
    }

    function el(tag, attrs = {}, text) {
      const n = document.createElement(tag);
      for (const [k, v] of Object.entries(attrs)) {
        if (k === "class") n.className = v;
        else n.setAttribute(k, v);
      }
      if (text != null) n.textContent = text;
      return n;
    }
  }

  function byId(id) {
    return document.getElementById(id);
  }
  function escapeHTML(s = "") {
    return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function safeGet(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }
  function safeSet(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch {}
  }
})();
