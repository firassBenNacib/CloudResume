(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const locale = (html.getAttribute("lang") || "en").slice(0, 2).toLowerCase();
    safeSet("lang", locale);
    const TERMINAL_ASCII = [
      " _____ ___ ___ __  __ ___ _  _   _   _",
      "|_   _| __| _ \\  \\/  |_ _| \\| | /_\\ | |",
      "  | | | _||   / |\\/| || || .` |/ _ \\| |__",
      "  |_| |___|_|_\\_|  |_|___|_|\\_/_/ \\_\\____|",
    ].join("\n");

    const i18n = {
      en: {
        moreProjects: "Show more projects",
        lessProjects: "Show fewer projects",
        stackView: "View stack",
        stackHide: "Hide stack",
        terminalTitle: "firas@cloud-resume - zsh",
        terminalBannerAscii: TERMINAL_ASCII,
        terminalWelcomeTitle: "Welcome to my interactive portfolio!",
        terminalWelcomeHelpLead: "Type",
        terminalWelcomeHelpTail: "to list available commands.",
        promptUser: "firas",
        promptHost: "cloud-resume",
        promptPath: "~",
        promptSign: "$",
        cmds: {
          help: `<div><span class="cmd">whoami</span> : General information</div><div><span class="cmd">experience</span> : Technical experience</div><div><span class="cmd">education</span> : Educational background</div><div><span class="cmd">skills</span> : Current technical skills</div><div><span class="cmd">projects</span> : Featured projects</div><div><span class="cmd">certs</span> : Certifications</div><div><span class="cmd">resume</span> : Download CV</div><div><span class="cmd">github</span> : GitHub profile</div><div><span class="cmd">linkedin</span> : LinkedIn profile</div><div><span class="cmd">contact</span> : Email</div><div><span class="cmd">sudo</span> : Try it :)</div><div><span class="cmd">clear</span> : Clear the terminal</div>`,
          whoami: `
<pre style="color:#38bdf8;font-family:monospace;line-height:1.2;">
 _____ _                 ____               _   _            _ _     
|  ___(_)_ __ __ _ ___  | __ )  ___ _ __   | \\ | | __ _  ___(_) |__  
| |_  | | '__/ _\` / __| |  _ \\ / _ \\ '_ \\  |  \\| |/ _\` |/ __| | '_ \\ 
|  _| | | | | (_| \\__ \\ | |_) |  __/ | | | | |\\  | (_| | (__| | |_) |
|_|   |_|_|  \\__,_|___/ |____/ \\___|_| |_| |_| \\_|\\__,_|\\___|_|_.__/ 
</pre>
<div>Cloud & DevOps Engineer (Kubestronaut) - AWS, Azure, Kubernetes & Terraform Certified</div>`,
          experience: `
<div>Freelance Cloud and DevOps contractor working with startups, companies, and direct clients on infrastructure and automation projects.</div>
<div>More than 10 certifications across AWS, Azure, Kubernetes, Terraform, and security domains.</div>`,
          education:
            `<div><span class="keyword">ESPRIT - Ecole Supérieure Privée d'Ingénierie et de Technologies</span></div><div>Engineer's Degree, Computer Science</div><div>2021 – 2024</div><div class="terminal-edu-gap"></div><div><span class="keyword">IPEIT - Institut Préparatoire aux Etudes d'Ingénieurs de Tunis</span></div><div>2019 – 2021</div>`,
          skills: `
<div><span class="keyword">Cloud Platforms:</span> AWS, Microsoft Azure, OpenStack</div>
<div><span class="keyword">Infrastructure as Code:</span> Terraform, Ansible</div>
<div><span class="keyword">Containers & Orchestration:</span> Kubernetes, OpenShift, Docker, Docker Compose, Helm, KEDA, cert-manager, Karpenter</div>
<div><span class="keyword">Observability:</span> Prometheus, Grafana, ELK Stack, CloudWatch</div>
<div><span class="keyword">Networking & Service Mesh:</span> Istio, Cilium, Traefik, Ingress, DNS, Load Balancing</div>
<div><span class="keyword">Security:</span> HashiCorp Vault, Falco, Trivy</div>
<div><span class="keyword">CI/CD & DevOps Tooling:</span> GitLab CI, GitHub Actions, Jenkins, CircleCI, Argo CD, SonarQube, Nexus</div>
<div><span class="keyword">Languages & Scripting:</span> Python, Bash, PowerShell, Groovy, Java, JavaScript, SQL, YAML</div>
<div><span class="keyword">Version Control & Collaboration:</span> Git, GitHub, GitLab, Jira</div>
<div><span class="keyword">Operating Systems:</span> Linux (Ubuntu, CentOS, RHEL, Amazon Linux, Talos Linux)</div>
<div><span class="keyword">Virtualization & Platforms:</span> VMware, VirtualBox, Proxmox, Vagrant</div>`,
          projects: `
<div><a href="https://github.com/firassBenNacib/KubleOps" target="_blank" rel="noopener noreferrer">KubleOps</a></div>
<div><a href="https://github.com/firassBenNacib/KubleOps-manifest" target="_blank" rel="noopener noreferrer">KubleOps-manifest (GitOps)</a></div>
<div><a href="https://github.com/firassBenNacib/CloudResume" target="_blank" rel="noopener noreferrer">Cloud Resume Challenge</a> | <a href="https://firasbennacib.com" target="_blank" rel="noopener noreferrer">Demo</a></div>
<div><a href="https://github.com/firassBenNacib/k3s-Cluster-Setup" target="_blank" rel="noopener noreferrer">k3s-Cluster-Setup</a> | <a href="https://asciinema.org/a/772374" target="_blank" rel="noopener noreferrer">Demo</a></div>
<div><a href="https://github.com/firassBenNacib/Talos-HyperV-Bootstrap" target="_blank" rel="noopener noreferrer">Talos-HyperV-Bootstrap</a> | <a href="https://asciinema.org/a/747251" target="_blank" rel="noopener noreferrer">Demo</a></div>
<div><a href="https://github.com/firassBenNacib/EcoAuto_AWS_Terraform" target="_blank" rel="noopener noreferrer">EcoAuto</a></div>
<div><a href="https://github.com/firassBenNacib/OptiChat" target="_blank" rel="noopener noreferrer">OptiChat</a></div>
<div><span class="keyword">Release Automation Platform</span></div>`,
          certs: `
<div><a href="https://www.credly.com/badges/84ac6776-7130-487a-8e48-7455914f0e8c/public_url" target="_blank" rel="noopener noreferrer">Kubestronaut</a></div>
<div><a href="https://www.credly.com/badges/f8b19abd-42f6-43f0-a21c-677ab19b535e/public_url" target="_blank" rel="noopener noreferrer">Certified Kubernetes Security Specialist (CKS)</a></div>
<div><a href="https://www.credly.com/badges/39dd875e-ad09-41a1-a9f9-075f45bd753c/public_url" target="_blank" rel="noopener noreferrer">Certified Kubernetes Administrator (CKA)</a></div>
<div><a href="https://www.credly.com/badges/21b34410-97f6-4b26-a592-9018f97c128f/public_url" target="_blank" rel="noopener noreferrer">Certified Kubernetes Application Developer (CKAD)</a></div>
<div><a href="https://www.credly.com/badges/1e6984bc-8c24-4745-942b-0604900bed0a/public_url" target="_blank" rel="noopener noreferrer">Kubernetes and Cloud Native Security Associate (KCSA)</a></div>
<div><a href="https://www.credly.com/badges/7239a686-9e24-424a-a17d-580487fbaed3/public_url" target="_blank" rel="noopener noreferrer">Kubernetes and Cloud Native Associate (KCNA)</a></div>
<div><a href="https://www.credly.com/badges/0d0cfc0a-735f-4581-9269-85d8464e968d/public_url" target="_blank" rel="noopener noreferrer">AWS Certified Solutions Architect - Associate</a></div>
<div><a href="https://www.credly.com/badges/e20edd1d-e44a-4543-bfde-8e4a7a544a3c" target="_blank" rel="noopener noreferrer">AWS Certified Cloud Practitioner</a></div>
<div><a href="https://learn.microsoft.com/fr-fr/users/firasbennacib-6669/credentials/d1931b541bd8428e?ref=https%3A%2F%2Fwww.credly.com%2F" target="_blank" rel="noopener noreferrer">Microsoft Azure Fundamentals (AZ-900)</a></div>
<div><a href="https://www.credly.com/badges/5a87f62e-a264-4349-89ea-e1d8cbf9ae2d/public_url" target="_blank" rel="noopener noreferrer">HashiCorp Terraform Associate (003)</a></div>
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
        moreProjects: "Afficher plus de projets",
        lessProjects: "Afficher moins de projets",
        stackView: "Voir la stack",
        stackHide: "Masquer la stack",
        terminalTitle: "firas@cloud-resume - zsh",
        terminalBannerAscii: TERMINAL_ASCII,
        terminalWelcomeTitle: "Welcome to my interactive portfolio!",
        terminalWelcomeHelpLead: "Type",
        terminalWelcomeHelpTail: "to list available commands.",
        promptUser: "firas",
        promptHost: "cloud-resume",
        promptPath: "~",
        promptSign: "$",
        cmds: {
          help: `<div><span class="cmd">whoami</span> : Infos générales</div><div><span class="cmd">experience</span> : Expérience technique</div><div><span class="cmd">education</span> : Parcours académique</div><div><span class="cmd">skills</span> : Compétences techniques</div><div><span class="cmd">projects</span> : Projets principaux</div><div><span class="cmd">certs</span> : Certifications</div><div><span class="cmd">resume</span> : Télécharger le CV</div><div><span class="cmd">github</span> : Profil GitHub</div><div><span class="cmd">linkedin</span> : Profil LinkedIn</div><div><span class="cmd">contact</span> : Email</div><div><span class="cmd">sudo</span> : Essaie :)</div><div><span class="cmd">clear</span> : Effacer le terminal</div>`,
          whoami: `
<pre style="color:#38bdf8;font-family:monospace;line-height:1.2;">
 _____ _                 ____               _   _            _ _     
| ___(_)_ __ __ _ ___  | __ )  ___ _ __   | \\ | | __ _  ___(_) |__  
| |_  | | '__/ _\` / __| |  _ \\ / _ \\ '_ \\  |  \\| |/ _\` |/ __| | '_ \\ 
|  _| | | | | (_| \\__ \\ | |_) |  __/ | | | | |\\  | (_| | (__| | |_) |
|_|   |_|_|  \\__,_|___/ |____/ \\___|_| |_| |_| \\_|\\__,_|\\___|_|_.__/ 
</pre>
<div>Ingénieur Cloud & DevOps (Kubestronaut) - Certifié AWS, Azure, Kubernetes & Terraform</div>`,
          experience: `
<div>Contractant freelance Cloud et DevOps auprès de startups, d’entreprises et de clients directs sur des projets d’infrastructure et d’automatisation.</div>
<div>Plus de 10 certifications couvrant AWS, Azure, Kubernetes, Terraform et la sécurité.</div>`,
          education:
            `<div><span class="keyword">ESPRIT - Ecole Supérieure Privée d'Ingénierie et de Technologies</span></div><div>Diplôme d'ingénieur, Informatique</div><div>2021 – 2024</div><div class="terminal-edu-gap"></div><div><span class="keyword">IPEIT - Institut Préparatoire aux Etudes d'Ingénieurs de Tunis</span></div><div>2019 – 2021</div>`,
          skills: `
<div><span class="keyword">Plateformes Cloud:</span> AWS, Microsoft Azure, OpenStack</div>
<div><span class="keyword">Infrastructure as Code:</span> Terraform, Ansible</div>
<div><span class="keyword">Conteneurs & Orchestration:</span> Kubernetes, OpenShift, Docker, Docker Compose, Helm, KEDA, cert-manager, Karpenter</div>
<div><span class="keyword">Observabilité:</span> Prometheus, Grafana, ELK Stack, CloudWatch</div>
<div><span class="keyword">Réseau & Service Mesh:</span> Istio, Cilium, Traefik, Ingress, DNS, Load Balancing</div>
<div><span class="keyword">Sécurité:</span> HashiCorp Vault, Falco, Trivy</div>
<div><span class="keyword">CI/CD & outils DevOps:</span> GitLab CI, GitHub Actions, Jenkins, CircleCI, Argo CD, SonarQube, Nexus</div>
<div><span class="keyword">Langages & Scripting:</span> Python, Bash, PowerShell, Groovy, Java, JavaScript, SQL, YAML</div>
<div><span class="keyword">Gestion de versions & Collaboration:</span> Git, GitHub, GitLab, Jira</div>
<div><span class="keyword">Systèmes:</span> Linux (Ubuntu, CentOS, RHEL, Amazon Linux, Talos Linux)</div>
<div><span class="keyword">Virtualisation & plateformes:</span> VMware, VirtualBox, Proxmox, Vagrant</div>`,
          projects: `
<div><a href="https://github.com/firassBenNacib/KubleOps" target="_blank" rel="noopener noreferrer">KubleOps</a></div>
<div><a href="https://github.com/firassBenNacib/KubleOps-manifest" target="_blank" rel="noopener noreferrer">KubleOps-manifest (GitOps)</a></div>
<div><a href="https://github.com/firassBenNacib/CloudResume" target="_blank" rel="noopener noreferrer">Cloud Resume Challenge</a> | <a href="https://firasbennacib.com" target="_blank" rel="noopener noreferrer">Démo</a></div>
<div><a href="https://github.com/firassBenNacib/k3s-Cluster-Setup" target="_blank" rel="noopener noreferrer">k3s-Cluster-Setup</a> | <a href="https://asciinema.org/a/772374" target="_blank" rel="noopener noreferrer">Démo</a></div>
<div><a href="https://github.com/firassBenNacib/Talos-HyperV-Bootstrap" target="_blank" rel="noopener noreferrer">Talos-HyperV-Bootstrap</a> | <a href="https://asciinema.org/a/747251" target="_blank" rel="noopener noreferrer">Démo</a></div>
<div><a href="https://github.com/firassBenNacib/EcoAuto_AWS_Terraform" target="_blank" rel="noopener noreferrer">EcoAuto</a></div>
<div><a href="https://github.com/firassBenNacib/OptiChat" target="_blank" rel="noopener noreferrer">OptiChat</a></div>
<div><span class="keyword">Plateforme d’Automatisation des Déploiements</span></div>`,
          certs: `
<div><a href="https://www.credly.com/badges/84ac6776-7130-487a-8e48-7455914f0e8c/public_url" target="_blank" rel="noopener noreferrer">Kubestronaut</a></div>
<div><a href="https://www.credly.com/badges/f8b19abd-42f6-43f0-a21c-677ab19b535e/public_url" target="_blank" rel="noopener noreferrer">Certified Kubernetes Security Specialist (CKS)</a></div>
<div><a href="https://www.credly.com/badges/39dd875e-ad09-41a1-a9f9-075f45bd753c/public_url" target="_blank" rel="noopener noreferrer">Certified Kubernetes Administrator (CKA)</a></div>
<div><a href="https://www.credly.com/badges/21b34410-97f6-4b26-a592-9018f97c128f/public_url" target="_blank" rel="noopener noreferrer">Certified Kubernetes Application Developer (CKAD)</a></div>
<div><a href="https://www.credly.com/badges/1e6984bc-8c24-4745-942b-0604900bed0a/public_url" target="_blank" rel="noopener noreferrer">Kubernetes and Cloud Native Security Associate (KCSA)</a></div>
<div><a href="https://www.credly.com/badges/7239a686-9e24-424a-a17d-580487fbaed3/public_url" target="_blank" rel="noopener noreferrer">Kubernetes and Cloud Native Associate (KCNA)</a></div>
<div><a href="https://www.credly.com/badges/0d0cfc0a-735f-4581-9269-85d8464e968d/public_url" target="_blank" rel="noopener noreferrer">AWS Certified Solutions Architect - Associate</a></div>
<div><a href="https://www.credly.com/badges/e20edd1d-e44a-4543-bfde-8e4a7a544a3c" target="_blank" rel="noopener noreferrer">AWS Certified Cloud Practitioner</a></div>
<div><a href="https://learn.microsoft.com/fr-fr/users/firasbennacib-6669/credentials/d1931b541bd8428e?ref=https%3A%2F%2Fwww.credly.com%2F" target="_blank" rel="noopener noreferrer">Microsoft Azure Fundamentals (AZ-900)</a></div>
<div><a href="https://www.credly.com/badges/5a87f62e-a264-4349-89ea-e1d8cbf9ae2d/public_url" target="_blank" rel="noopener noreferrer">HashiCorp Terraform Associate (003)</a></div>
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
      applySkillIconTheme(mode);
      if (toggleBtn) {
        toggleBtn.classList.toggle("theme-toggle--toggled", mode === "light");
        toggleBtn.setAttribute("aria-pressed", String(mode === "dark"));
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
      moreSection.setAttribute("aria-hidden", "true");
      setMoreProjectsLabel(false);
      moreBtn.addEventListener("click", () => {
        const isOpen = moreSection.classList.contains("show");
        const nextOpen = !isOpen;
        moreSection.classList.toggle("show", nextOpen);
        moreBtn.classList.toggle("collapsed", !nextOpen);
        moreBtn.setAttribute("aria-expanded", String(nextOpen));
        moreSection.setAttribute("aria-hidden", String(!nextOpen));
        setMoreProjectsLabel(nextOpen);
      });
    }

    const stackButtons = document.querySelectorAll(".project .expand-btn:not(#more-projects-toggle)");
    stackButtons.forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      setStackLabel(btn, false);
      const block = btn.closest(".project")?.querySelector(".project-tools-collapsible");
      if (block) {
        block.classList.remove("open");
        block.setAttribute("aria-hidden", "true");
      }
    });

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
        const open = !block.classList.contains("open");
        block.classList.toggle("open", open);
        setStackLabel(btn, open);
        btn.setAttribute("aria-expanded", String(open));
        block.setAttribute("aria-hidden", String(!open));
      }
    });

    const terminalBody = byId("terminal-body");
    if (terminalBody) initTerminal(terminalBody, locale, i18n);

    initSkillIcons();
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

    function setStackLabel(btn, isOpen) {
      btn.classList.toggle("open", isOpen);
      btn.innerHTML = `${isOpen ? L.stackHide : L.stackView}<span class="arrow-icon">▼</span>`;
    }

    function setMoreProjectsLabel(isOpen) {
      if (!moreBtn) return;
      moreBtn.innerHTML = isOpen
        ? `${L.lessProjects}<span class="arrow-icon">▲</span>`
        : `${L.moreProjects}<span class="arrow-icon">▼</span>`;
    }

    function initSkillIcons() {
      const themeIconUrls = {
        GitHub: {
          light: "https://cdn.simpleicons.org/github/181717",
          dark: "https://cdn.simpleicons.org/github/f5f5f5",
        },
        Nexus: {
          light: "https://cdn.simpleicons.org/sonatype/1B1C30",
          dark: "https://cdn.simpleicons.org/sonatype/f5f5f5",
        },
      };

      const iconUrls = {
        AWS:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        "Microsoft Azure":
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
        KEDA:
          "https://raw.githubusercontent.com/kedacore/keda-docs/main/static/img/logos/keda-icon-color.png",
        Jenkins:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
        "Argo CD":
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/argocd/argocd-original.svg",
        SonarQube:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/sonarqube/sonarqube-original.svg",
        Trivy:
          "https://cdn.simpleicons.org/trivy/38BDF8",
        CloudWatch:
          "https://raw.githubusercontent.com/sashee/aws-svg-icons/main/docs/Architecture-Service-Icons_07302021/Arch_Management-Governance/64/Arch_Amazon-CloudWatch_64.svg",
        PostgreSQL:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        SQL:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/azuresqldatabase/azuresqldatabase-original.svg",
        "Oracle SQL":
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
        WildFly:
          "https://raw.githubusercontent.com/wildfly/wildfly.org/main/public/assets/img/wildfly_icons_one-color-logo.png",
        WebSphere:
          "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        "Amazon Linux":
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
        "Talos Linux":
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/talos/talos-original.svg",
        PowerShell:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/powershell/powershell-original.svg",
        Groovy:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/groovy/groovy-original.svg",
        "cert-manager":
          "https://raw.githubusercontent.com/cncf/artwork/main/projects/cert-manager/icon/color/cert-manager-icon-color.svg",
        Java:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      };

      const iconSlugs = {
        AWS: "amazonaws",
        "Microsoft Azure": "microsoftazure",
        OpenStack: "openstack",
        Jenkins: "jenkins",
        "GitLab CI": "gitlab",
        "GitHub Actions": "githubactions",
        CircleCI: "circleci",
        "Argo CD": "argocd",
        SonarQube: "sonarqube",
        Nexus: "sonatype",
        Trivy: "aquasecurity",
        Docker: "docker",
        "Docker Compose": "docker",
        Kubernetes: "kubernetes",
        OpenShift: "redhatopenshift",
        Helm: "helm",
        KEDA: "keda",
        "cert-manager": "kubernetes",
        Karpenter: "kubernetes",
        Terraform: "terraform",
        Ansible: "ansible",
        Bash: "gnubash",
        "Shell Scripting": "gnubash",
        "Scripts Shell": "gnubash",
        Python: "python",
        Prometheus: "prometheus",
        Grafana: "grafana",
        "ELK Stack": "elastic",
        CloudWatch: "amazoncloudwatch",
        PostgreSQL: "postgresql",
        MySQL: "mysql",
        "Oracle SQL": "oracle",
        MongoDB: "mongodb",
        WildFly: "wildfly",
        WebSphere: "ibm",
        Git: "git",
        GitHub: "github",
        GitLab: "gitlab",
        Jira: "jira",
        Ubuntu: "ubuntu",
        CentOS: "centos",
        RHEL: "redhat",
        "Amazon Linux": "amazon",
        "Talos Linux": "talos",
        Istio: "istio",
        Cilium: "cilium",
        Traefik: "traefikproxy",
        Ingress: "kubernetes",
        DNS: "cloudflare",
        "Load Balancing": "nginx",
        "HashiCorp Vault": "vault",
        Falco: "falco",
        PowerShell: "powershell",
        Groovy: "groovy",
        Java: "java",
        JavaScript: "javascript",
        SQL: "sqlite",
        YAML: "yaml",
        VMware: "vmware",
        VirtualBox: "virtualbox",
        Proxmox: "proxmox",
        Vagrant: "vagrant",
        "VM Ubuntu": "ubuntu",
      };

      const skillLinks = document.querySelectorAll(".skills-section .skill-card li a");
      skillLinks.forEach((link) => {
        if (link.dataset.iconApplied === "1") return;
        const label = link.textContent.trim();
        const slug = iconSlugs[label];
        const source = iconUrls[label] || (slug ? `https://cdn.simpleicons.org/${slug}` : "");
        if (!source) return;

        const icon = document.createElement("img");
        icon.className = "skill-logo";
        const themeSource = themeIconUrls[label];
        if (themeSource) {
          icon.dataset.lightSrc = themeSource.light;
          icon.dataset.darkSrc = themeSource.dark;
          icon.src =
            document.documentElement.getAttribute("data-theme") === "dark"
              ? themeSource.dark
              : themeSource.light;
        } else {
          icon.src = source;
        }
        icon.alt = "";
        icon.loading = "lazy";
        icon.decoding = "async";
        icon.setAttribute("aria-hidden", "true");
        icon.dataset.skillKey = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        icon.addEventListener("error", () => {
          icon.remove();
        });

        link.classList.add("skill-link-with-icon");
        link.prepend(icon);
        link.dataset.iconApplied = "1";
      });

      applySkillIconTheme(document.documentElement.getAttribute("data-theme") || "light");
    }

    function applySkillIconTheme(mode) {
      const logos = document.querySelectorAll(".skills-section .skill-logo[data-light-src][data-dark-src]");
      logos.forEach((logo) => {
        const lightSrc = logo.dataset.lightSrc;
        const darkSrc = logo.dataset.darkSrc;
        if (!lightSrc || !darkSrc) return;
        logo.src = mode === "dark" ? darkSrc : lightSrc;
      });
    }
  });

  function initTerminal(terminalBody, locale = "en", i18nMap) {
    const L = (i18nMap && i18nMap[locale]) || i18nMap.en;
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
      clear: "__CLEAR__",
    };

    const commandNames = Object.keys(COMMANDS);
    const history = [];
    let historyIndex = -1;
    let currentInputSnapshot = "";

    const windowNode = terminalBody.closest(".terminal-window");
    const titleNode = windowNode && windowNode.querySelector(".terminal-header .title");
    if (titleNode && L.terminalTitle) titleNode.textContent = L.terminalTitle;
    if (windowNode) windowNode.classList.add("terminal-window--startup");

    terminalBody.textContent = "";

    const output = el("div", { class: "terminal-output terminal-output--startup" });
    const inputRow = el("div", { class: "terminal-input-row" });
    const promptNode = createPromptNode();
    const input = el("input", {
      class: "command-input",
      type: "text",
      autocomplete: "off",
      autocapitalize: "off",
      spellcheck: "false",
      id: "terminal-command-input",
      name: "terminal-command",
      "aria-label": locale === "fr" ? "Saisie de commande du terminal" : "Terminal command input",
    });

    inputRow.appendChild(promptNode);
    inputRow.appendChild(input);
    terminalBody.appendChild(output);
    terminalBody.appendChild(inputRow);
    appendStartupBlock();

    terminalBody.addEventListener("click", () => input.focus());
    terminalBody.addEventListener(
      "wheel",
      (e) => {
        if (output.scrollHeight <= output.clientHeight) return;
        output.scrollTop += e.deltaY;
        e.preventDefault();
      },
      { passive: false }
    );
    input.addEventListener("keydown", handleInputKeydown);
    input.focus();

    function handleInputKeydown(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const rawInput = input.value;
        const trimmedInput = rawInput.trim();

        appendCommandEcho(rawInput);

        if (trimmedInput) {
          if (history[0] !== trimmedInput) {
            history.unshift(trimmedInput);
            if (history.length > MAX_HISTORY) history.length = MAX_HISTORY;
          }
          historyIndex = -1;
          currentInputSnapshot = "";
          executeCommand(trimmedInput);
        } else {
          historyIndex = -1;
          currentInputSnapshot = "";
        }

        input.value = "";
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (!history.length) return;
        if (historyIndex === -1) currentInputSnapshot = input.value;
        const nextIndex = Math.min(historyIndex + 1, history.length - 1);
        historyIndex = nextIndex;
        input.value = history[nextIndex];
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (!history.length) return;
        if (historyIndex > 0) {
          historyIndex -= 1;
          input.value = history[historyIndex];
        } else if (historyIndex === 0) {
          historyIndex = -1;
          input.value = currentInputSnapshot;
        }
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        autocompleteCommand();
        return;
      }

      if (e.key.toLowerCase() === "c" && e.ctrlKey) {
        e.preventDefault();
        if (input.value) {
          appendCommandEcho(`${input.value}^C`);
          input.value = "";
          historyIndex = -1;
          currentInputSnapshot = "";
        }
        return;
      }

      if (e.key.toLowerCase() === "l" && e.ctrlKey) {
        e.preventDefault();
        clearOutput();
      }
    }

    function autocompleteCommand() {
      const value = input.value.trim().toLowerCase();
      if (!value) return;

      const matches = commandNames.filter((name) => name.startsWith(value));
      if (!matches.length) return;

      if (matches.length === 1) {
        input.value = matches[0];
        return;
      }

      let prefix = matches[0];
      for (let i = 1; i < matches.length; i++) {
        while (prefix && !matches[i].startsWith(prefix)) {
          prefix = prefix.slice(0, -1);
        }
      }

      if (prefix.length > value.length) {
        input.value = prefix;
      } else {
        appendCommandEcho(input.value);
        appendResponse(`<div class="terminal-autocomplete">${matches.join("  ")}</div>`);
      }
    }

    function executeCommand(commandLine) {
      const parts = commandLine.split(/\s+/);
      const commandName = (parts[0] || "").toLowerCase();
      const response = COMMANDS[commandName];

      if (response === "__CLEAR__") {
        clearOutput();
        return;
      }

      appendResponse(response || (L.cmds.notfound ? L.cmds.notfound(commandName) : ""));
    }

    function appendStartupBlock() {
      const row = el("div", { class: "output terminal-response terminal-startup" });
      row.appendChild(el("pre", { class: "terminal-ascii-banner" }, L.terminalBannerAscii || ""));
      row.appendChild(el("div", { class: "terminal-welcome-title" }, L.terminalWelcomeTitle || ""));
      const sub = el("div", { class: "terminal-welcome-sub" });
      sub.appendChild(document.createTextNode(`${L.terminalWelcomeHelpLead || "Type"} '`));
      sub.appendChild(el("span", { class: "cmd" }, "help"));
      sub.appendChild(document.createTextNode(`' ${L.terminalWelcomeHelpTail || "to list available commands."}`));
      row.appendChild(sub);
      output.appendChild(row);
      scrollOutputToBottom();
    }

    function clearOutput() {
      output.textContent = "";
      if (!output.classList.contains("terminal-output--startup")) {
        output.classList.add("terminal-output--startup");
      }
      if (windowNode && !windowNode.classList.contains("terminal-window--startup")) {
        windowNode.classList.add("terminal-window--startup");
      }
      appendStartupBlock();
    }

    function appendCommandEcho(commandText) {
      disableStartupOutputLayout();
      const row = el("div", { class: "terminal-line" });
      row.appendChild(createPromptNode());
      row.appendChild(el("span", { class: "terminal-command-text" }, commandText));
      output.appendChild(row);
      scrollOutputToBottom();
    }

    function appendResponse(html) {
      disableStartupOutputLayout();
      const row = el("div", { class: "output terminal-response" });
      row.innerHTML = html;
      output.appendChild(row);
      scrollOutputToBottom();
    }

    function disableStartupOutputLayout() {
      if (output.classList.contains("terminal-output--startup")) {
        output.classList.remove("terminal-output--startup");
      }
      if (windowNode && windowNode.classList.contains("terminal-window--startup")) {
        windowNode.classList.remove("terminal-window--startup");
      }
    }

    function scrollOutputToBottom() {
      output.scrollTop = output.scrollHeight;
    }

    function createPromptNode() {
      const prompt = el("span", { class: "terminal-prompt" });
      prompt.appendChild(el("span", { class: "prompt-user" }, L.promptUser || "visitor"));
      prompt.appendChild(el("span", { class: "prompt-sep" }, " @ "));
      prompt.appendChild(el("span", { class: "prompt-host" }, L.promptHost || "portfolio"));
      prompt.appendChild(el("span", { class: "prompt-sep" }, " : "));
      prompt.appendChild(el("span", { class: "prompt-path" }, L.promptPath || "~"));
      prompt.appendChild(el("span", { class: "prompt-sign" }, ` ${L.promptSign || "$"}`));
      return prompt;
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
