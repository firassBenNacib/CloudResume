document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const html = document.documentElement;

  let theme = localStorage.getItem("theme") ||
              (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  setTheme(theme);

  toggleBtn.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
    setTheme(theme);
  });

  const moreProjectsBtn = document.getElementById("more-projects-toggle");
  const moreProjectsSection = document.getElementById("more-projects-section");
  
  if (moreProjectsBtn && moreProjectsSection) {
    moreProjectsBtn.addEventListener("click", () => {
      const isVisible = moreProjectsSection.classList.contains("show");
  
      if (isVisible) {
        moreProjectsSection.classList.remove("expand");
        moreProjectsSection.classList.add("collapse");
  
        moreProjectsSection.classList.remove("show");
        moreProjectsBtn.innerHTML = 'Show More<span class="arrow-icon">▼</span>';
        moreProjectsBtn.classList.add("collapsed");
      } else {
        moreProjectsSection.classList.remove("collapse");
        moreProjectsSection.classList.add("expand");
  
        moreProjectsSection.classList.add("show");
        moreProjectsBtn.innerHTML = 'Show Less<span class="arrow-icon">▲</span>';
        moreProjectsBtn.classList.remove("collapsed");
      }
    });
  }
  
  

  function setTheme(mode) {
    html.setAttribute("data-theme", mode);
    toggleBtn.classList.toggle("theme-toggle--toggled", mode === "dark");
  }

  fetch("{{API_URL}}")
    .then((res) => res.json())
    .then((data) => {
      const visitsElement = document.getElementById("visitor-count");
      if (visitsElement && data.visits !== undefined) {
        visitsElement.textContent = data.visits;
      }
    })
    .catch((err) => {
      console.error("Error fetching visitor count:", err);
    });
}); 

const terminalBody = document.getElementById('terminal-body');

if (terminalBody) {
  let history = [];
  let historyIndex = -1;

  const PROMPT = '[guest@cloud-resume ~]$';

  const COMMANDS = {
    help: `
    <div><span class="cmd">whoami</span> : General information</div>
    <div><span class="cmd">experience</span> : Technical Experience</div>
    <div><span class="cmd">education</span> : Educational background</div>
    <div><span class="cmd">skills</span> : Current technical skills</div>
    <div><span class="cmd">projects</span> : Projects</div>
    <div><span class="cmd">github</span> : GitHub profile</div>
    <div><span class="cmd">linkedin</span> : LinkedIn profile</div>
    <div><span class="cmd">contact</span> : Email for anything</div>
    <div><span class="cmd">sudo</span> : Try it :)</div>
    <div><span class="cmd">clear</span> : Clears the terminal</div>`,

    whoami: `
<pre style="color:#38bdf8;">
  ____ _                 _       
 / ___| | ___  _   _  __| |  
| |   | |/ _ \\| | | |/ _\`
| |___| | (_) | |_| | (_| |
 \\____|_|\\___/ \\__,_|\\|
</pre>
<div>Cloud & DevOps Engineer - AWS, Azure & Kubernetes Certified</div>`,

    experience: 'Extensive experience with AWS, Kubernetes, Terraform, Jenkins, GitLab CI, Docker.',
    education: 'Cloud & DevOps Engineering - ESPRIT',
    skills: 'AWS, Azure, Kubernetes, Terraform, Docker, Ansible, Jenkins, Argo CD, GitOps',
    projects: 'Tal9i7.tn AWS Infrastructure, Release Automation Platform, OptiChat',
    github: '<a href="https://github.com/firassBenNacib" target="_blank">https://github.com/firassBenNacib</a>',
    linkedin: '<a href="https://linkedin.com/in/firas-bennacib" target="_blank">https://linkedin.com/in/firas-bennacib</a>',
    contact: '<a href="mailto:bennacibfiras@gmail.com">bennacibfiras@gmail.com</a>',
    sudo: '<span style="color:#ff3366;">Permission denied:</span> you have no power here 🧙‍♂️'
  };

  createLine();

  function createLine() {
    const line = document.createElement('div');
    line.classList.add('line');

    const prompt = document.createElement('span');
    prompt.classList.add('prompt');
    prompt.textContent = PROMPT;

    const input = document.createElement('input');
    input.classList.add('command-input');
    input.type = 'text';
    input.autofocus = true;

    input.addEventListener('keydown', handleInput);

    line.appendChild(prompt);
    line.appendChild(input);
    terminalBody.appendChild(line);
    input.focus();
  }

  function handleInput(e) {
    const input = e.target;

    if (e.key === 'Enter') {
      const command = input.value.trim();
      history.push(command);
      historyIndex = history.length;

      const commandEcho = document.createElement('div');
      commandEcho.classList.add('line');
      commandEcho.innerHTML = `<span class="prompt">${PROMPT}</span> ${command}`;
      terminalBody.appendChild(commandEcho);
      input.parentElement.remove();
      executeCommand(command);

    } else if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        historyIndex--;
        input.value = history[historyIndex];
      }

    } else if (e.key === 'ArrowDown') {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        input.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        input.value = '';
      }

    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = Object.keys(COMMANDS).find(c => c.startsWith(input.value));
      if (match) input.value = match;
    }
  }

  function executeCommand(cmd) {
    const output = document.createElement('div');
    output.classList.add('output');

    if (cmd === "clear") {
      terminalBody.innerHTML = '';
      createLine();
      return;
    }

    const response = COMMANDS[cmd]
      ? COMMANDS[cmd]
      : `<span style="color:#ff3366;">command not found: ${cmd}</span>`;

    typeOutput(output, response);
  }

  function typeOutput(outputElement, text, delay = 10) {
    const isHTML = text.includes('<') && text.includes('>');
    if (isHTML) {
      outputElement.innerHTML = text;
      terminalBody.appendChild(outputElement);
      createLine();
      terminalBody.scrollTo({ top: terminalBody.scrollHeight, behavior: 'smooth' });
    } else {
      outputElement.textContent = '';
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          outputElement.textContent += text[i++];
        } else {
          clearInterval(typeInterval);
          createLine();
          terminalBody.scrollTo({ top: terminalBody.scrollHeight, behavior: 'smooth' });
        }
      }, delay);
      terminalBody.appendChild(outputElement);
    }
  }

  
const expandButtons = document.querySelectorAll(".expand-btn");

expandButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentProject = btn.closest(".project");
    const collapsible = parentProject?.querySelector(".project-tools-collapsible");

    if (collapsible) {
      collapsible.classList.toggle("open");
      btn.classList.toggle("open");
    }
  });
});



const accordionToggles = document.querySelectorAll('.accordion-toggle');

accordionToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const contentId = toggle.getAttribute('aria-controls');
    const content = document.getElementById(contentId);
    const isOpen = content.classList.contains('open');

    
    
    document.querySelectorAll('.accordion-content').forEach((section) => {
      section.classList.remove('open');
      section.previousElementSibling?.setAttribute('aria-expanded', 'false');
    });

    
    
    if (!isOpen) {
      content.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
});

  
}
