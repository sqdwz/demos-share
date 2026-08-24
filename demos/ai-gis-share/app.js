(() => {
  'use strict';

  const data = window.presentationData;
  const root = document.getElementById('presentation');
  const chapter = document.getElementById('chapter');
  const progress = document.getElementById('progress');
  const ricsDock = document.getElementById('ricsDock');

  if (!data || !root) return;

  document.title = data.meta.title;

  const arrows = '<span class="flow-arrow" aria-hidden="true">→</span>';
  const flow = (items, extra = '') => `
    <div class="flow ${extra}">
      ${items.map((item, index) => `${index ? arrows : ''}<span class="flow-node">${item}</span>`).join('')}
    </div>`;

  const scene = (item, className, content) => `
    <section class="scene ${className}" id="${item.id}" data-chapter="${item.chapter}"${item.rics ? ` data-rics="${item.rics}"` : ''}>
      <div class="scene-inner reveal">${content}</div>
    </section>`;

  const heading = item => `
    <div class="scene-heading">
      <div class="eyebrow">${item.eyebrow}</div>
      <h2>${item.title}</h2>
    </div>`;

  const ricsButtons = location => data.caseIntro.rics.map(item => `
    <button class="rics-button" type="button" data-rics-key="${item.key}" data-rics-target="${item.target}" data-rics-location="${location}">
      <span class="rics-number">${item.number}</span>
      <span class="rics-label">${item.label}</span>
    </button>`).join('');

  const hero = scene(data.hero, 'scene-hero', `
    <div class="hero-grid">
      <div class="hero-copy">
        <h1>${data.hero.title.map(line => `<span>${line}</span>`).join('')}</h1>
        <p class="hero-subtitle">${data.hero.subtitle}</p>
      </div>
<a class="qr-card" href="https://sqdwz.github.io/demos-share/demos/ai-gis-share/" target="_blank" rel="noopener" aria-label="${data.ui.scan}">
        <img src="qr-code.png" alt="${data.ui.scan}">
<span class="qr-copy"><strong>${data.ui.scan}</strong><span>${data.ui.publicAccess}</span><code>sqdwz.github.io/demos-share/demos/ai-gis-share</code></span>
      </a>
    </div>
    <div class="section-jumps">
      ${data.hero.sections.map(item => `
        <button class="section-jump" type="button" data-jump="${item.target}">
          <span>${item.label}</span><strong>${item.title}</strong><b aria-hidden="true">↘</b>
        </button>`).join('')}
    </div>
    ${flow(data.hero.flow, 'hero-flow')}
  `);

  const agentIntro = scene(data.agentIntro, 'scene-agent-intro', `
    ${heading(data.agentIntro)}
    <p class="statement statement-large">${data.agentIntro.statement}</p>
    <div class="shift-grid">
      <article class="phase-card phase-before">
        <span>${data.agentIntro.before.label}</span>
        ${flow(data.agentIntro.before.flow)}
      </article>
      <article class="phase-card phase-now">
        <span>${data.agentIntro.now.label}</span>
        ${flow(data.agentIntro.now.flow)}
      </article>
    </div>
    <p class="support-note">${data.agentIntro.note}</p>
  `);

  const experience = scene(data.experience, 'scene-experience', `
    <div class="heading-row">
      ${heading(data.experience)}
      <p class="interaction-hint">${data.ui.clickExample}</p>
    </div>
    <div class="experience-grid">
      ${data.experience.items.map(item => `
        <button class="experience-card" type="button" data-experience="${item.key}" aria-expanded="false">
          <span>${item.number} · ${item.label}</span>
          <strong>${item.question}</strong>
        </button>`).join('')}
    </div>
    <div class="experience-detail" id="experienceDetail" hidden>
      <div><span>${data.ui.example}</span><p id="experienceExample"></p></div>
      <div><span>${data.ui.conclusion}</span><strong id="experienceConclusion"></strong></div>
    </div>
  `);

  const commonProblems = scene(data.commonProblems, 'scene-problems', `
    ${heading(data.commonProblems)}
    <div class="problem-list">
      ${data.commonProblems.items.map(item => `
        <article class="problem-card">
          <div class="problem-index">${item.number}</div>
          <div><h3>${item.title}</h3><p>${item.text}</p></div>
          <div class="solution-pill"><span>${data.ui.solution}</span><strong>${item.solution}</strong></div>
        </article>`).join('')}
    </div>
    ${flow(data.commonProblems.summary, 'summary-flow')}
  `);

  const method = scene(data.method, 'scene-method', `
    <div class="heading-row">
      ${heading(data.method)}
      <p class="interaction-hint">${data.ui.clickDetail}</p>
    </div>
    <div class="method-grid">
      ${data.method.items.map((item, index) => `
        <button class="method-step" type="button" data-method="${index}" aria-expanded="false">
          <span>${item.number}</span><strong>${item.title}</strong><p>${item.prompt}</p>
        </button>`).join('')}
    </div>
    <div class="method-detail" id="methodDetail" hidden></div>
    <p class="statement">${data.method.statement}</p>
  `);

  const practices = scene(data.practices, 'scene-practices', `
    ${heading(data.practices)}
    <div class="practice-grid">
      ${data.practices.items.map(item => `
        <article class="practice-card"><h3>${item.title}</h3>${flow(item.flow)}</article>`).join('')}
    </div>
    <div class="transition-line"><span aria-hidden="true">↓</span><strong>${data.practices.transition}</strong></div>
  `);

  const caseIntro = scene(data.caseIntro, 'scene-case-intro', `
    ${heading(data.caseIntro)}
    <p class="case-subtitle">${data.caseIntro.subtitle}</p>
    <div class="rics-grid">${ricsButtons('overview')}</div>
    <div class="rics-preview" id="ricsPreview"><span>${data.ui.ricsPrompt}</span></div>
  `);

  const background = scene(data.background, 'scene-background scene-rics', `
    ${heading(data.background)}
    <div class="background-grid">
      <div class="background-story"><p>${data.background.text}</p><div class="big-number"><strong>${data.background.number}</strong><span>${data.background.numberLabel}</span></div></div>
      <article class="checklist-card">
        <h3>${data.background.checklistTitle}</h3>
        <ul>${data.background.checklist.map(item => `<li>${item}</li>`).join('')}</ul>
      </article>
    </div>
  `);

  const challenge = scene(data.challenge, 'scene-challenge scene-rics', `
    ${heading(data.challenge)}
    <div class="challenge-row">
      ${flow(data.challenge.flow, 'challenge-flow')}
      <strong class="multiplier">${data.challenge.multiplier}</strong>
    </div>
    ${flow(data.challenge.sequence, 'sequence-flow')}
    <p class="statement">${data.challenge.statement}</p>
  `);

  const automationFit = scene(data.automationFit, 'scene-automation-fit scene-rics', `
    <div class="heading-row">${heading(data.automationFit)}<p class="interaction-hint">${data.automationFit.idle}</p></div>
    <div class="trait-grid">
      ${data.automationFit.items.map((item, index) => `
        <button class="trait-card" type="button" data-trait="${index}" aria-pressed="false">
          <strong>${item.title}</strong><span>${item.text}</span>
        </button>`).join('')}
    </div>
    <p class="trait-feedback" id="traitFeedback">${data.automationFit.idle}</p>
  `);

  const solution = scene(data.solution, 'scene-solution scene-rics', `
    ${heading(data.solution)}
    <div class="solution-grid">
      <article class="process-panel"><span>${data.solution.manual.label}</span>${flow(data.solution.manual.flow)}</article>
      <div class="conversion" aria-hidden="true">→</div>
      <article class="process-panel process-panel-accent"><span>${data.solution.program.label}</span>${flow(data.solution.program.flow)}</article>
    </div>
    ${flow(data.solution.bridge, 'bridge-flow')}
    <p class="statement">${data.solution.statement}</p>
  `);

  const roles = scene(data.roles, 'scene-roles scene-rics', `
    ${heading(data.roles)}
    <div class="roles-grid">
      <article class="role-card"><h3>${data.roles.human.title}</h3><ul>${data.roles.human.items.map(item => `<li>${item}</li>`).join('')}</ul></article>
      <article class="role-card role-ai"><h3>${data.roles.ai.title}</h3><ul>${data.roles.ai.items.map(item => `<li>${item}</li>`).join('')}</ul></article>
    </div>
    <p class="statement">${data.roles.statement}</p>
  `);

  const debugging = scene(data.debugging, 'scene-debugging scene-rics', `
    ${heading(data.debugging)}
    <div class="debug-layout">
      <div class="timeline">
        ${data.debugging.steps.map((item, index) => `
          <article class="timeline-step"><span>${item.number}</span><div><h3>${item.title}</h3><p>${item.issue}</p></div></article>
          ${index < data.debugging.steps.length - 1 ? '<div class="timeline-arrow" aria-hidden="true">↓</div>' : ''}`).join('')}
      </div>
      <div class="debug-stats">
        ${data.debugging.stats.map(item => `<article><strong>${item.value}</strong><span>${item.label}</span></article>`).join('')}
      </div>
    </div>
  `);

  const results = scene(data.results, 'scene-results scene-rics', `
    ${heading(data.results)}
    <div class="metric-grid">
      ${data.results.metrics.map(item => `<article><strong>${item.value}</strong><span>${item.label}</span></article>`).join('')}
    </div>
    <div class="before-after">
      <article><span>${data.results.before.label}</span><h3>${data.results.before.title}</h3><strong>${data.results.before.value}</strong></article>
      <div aria-hidden="true">→</div>
      <article class="after-card"><span>${data.results.after.label}</span><h3>${data.results.after.title}</h3><strong>${data.results.after.value}</strong></article>
    </div>
    <p class="statement">${data.results.statement}</p>
  `);

  const scale = scene(data.scale, 'scene-scale scene-rics', `
    ${heading(data.scale)}
    <div class="slider-card">
      <input id="houseRange" type="range" min="${data.scale.min}" max="${data.scale.max}" value="${data.scale.initial}" step="1" aria-label="${data.scale.countLabel}">
      <div class="slider-marks"><span>${data.scale.min}</span><span>96</span><span>200</span><span>${data.scale.max}</span></div>
      <div class="slider-values">
        <div><span>${data.scale.countLabel}</span><strong id="houseCount">${data.scale.initial}</strong></div>
        <div><span>${data.scale.timeLabel}</span><strong id="runTime"></strong></div>
      </div>
    </div>
    <p class="statement statement-scale">${data.scale.statement}</p>
  `);

  const lessons = scene(data.lessons, 'scene-lessons scene-rics', `
    ${heading(data.lessons)}
    <div class="thinking-shift">
      <article><span>${data.lessons.before.label}</span><strong>${data.lessons.before.text}</strong></article>
      <div aria-hidden="true">↓</div>
      <article class="thinking-after"><span>${data.lessons.after.label}</span><strong>${data.lessons.after.text}</strong></article>
    </div>
    <div class="lesson-grid">
      ${data.lessons.items.map(item => `<article><span>${item.number}</span><h3>${item.title}</h3><p>${item.text}</p></article>`).join('')}
    </div>
  `);

  const summary = scene(data.summary, 'scene-summary', `
    ${heading(data.summary)}
    <div class="criteria-grid">
      ${data.summary.items.map((item, index) => `<button class="criterion" type="button" data-criterion="${index}" aria-pressed="false">${item}</button>`).join('')}
    </div>
    <div class="summary-feedback"><strong id="summaryCount">0 / 4</strong><p id="summaryFeedback">${data.summary.feedback[0]}</p></div>
  `);

  const end = scene(data.end, 'scene-end', `
    <div class="eyebrow">${data.end.eyebrow}</div>
    <h2>${data.end.title}</h2>
    ${flow(data.end.flow, 'end-flow')}
    <div class="qna">${data.end.footer}</div>
  `);

  root.innerHTML = [hero, agentIntro, experience, commonProblems, method, practices, caseIntro, background, challenge, automationFit, solution, roles, debugging, results, scale, lessons, summary, end].join('');
  ricsDock.innerHTML = ricsButtons('dock');

  const scenes = [...document.querySelectorAll('.scene')];
  const ricsOrder = data.caseIntro.rics.map(item => item.key);
  const caseSceneIds = new Set(['case-intro', 'background', 'challenge', 'automation-fit', 'solution', 'roles', 'debugging', 'results', 'scale', 'lessons']);
  let currentScene = 0;
  let ricsTimer = 0;

  const scrollToId = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  document.querySelectorAll('[data-jump]').forEach(button => {
    button.addEventListener('click', () => scrollToId(button.dataset.jump));
  });

  const experienceButtons = [...document.querySelectorAll('[data-experience]')];
  const experienceDetail = document.getElementById('experienceDetail');
  experienceButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = data.experience.items.find(entry => entry.key === button.dataset.experience);
      if (!item) return;
      experienceButtons.forEach(entry => {
        const active = entry === button;
        entry.classList.toggle('active', active);
        entry.setAttribute('aria-expanded', String(active));
      });
      document.getElementById('experienceExample').textContent = item.example;
      document.getElementById('experienceConclusion').textContent = item.conclusion;
      experienceDetail.hidden = false;
      experienceDetail.classList.remove('detail-pop');
      requestAnimationFrame(() => experienceDetail.classList.add('detail-pop'));
    });
  });

  const methodButtons = [...document.querySelectorAll('[data-method]')];
  const methodDetail = document.getElementById('methodDetail');
  methodButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = data.method.items[Number(button.dataset.method)];
      if (!item) return;
      methodButtons.forEach(entry => {
        const active = entry === button;
        entry.classList.toggle('active', active);
        entry.setAttribute('aria-expanded', String(active));
      });
      methodDetail.textContent = item.detail;
      methodDetail.hidden = false;
      methodDetail.classList.remove('detail-pop');
      requestAnimationFrame(() => methodDetail.classList.add('detail-pop'));
    });
  });

  const setRicsState = key => {
    const currentIndex = ricsOrder.indexOf(key);
    document.querySelectorAll('[data-rics-key]').forEach(button => {
      const index = ricsOrder.indexOf(button.dataset.ricsKey);
      button.classList.toggle('current', index === currentIndex);
      button.classList.toggle('completed', currentIndex >= 0 && index < currentIndex);
      if (index === currentIndex) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
  };

  document.querySelectorAll('[data-rics-key]').forEach(button => {
    button.addEventListener('click', () => {
      const item = data.caseIntro.rics.find(entry => entry.key === button.dataset.ricsKey);
      if (!item) return;
      window.clearTimeout(ricsTimer);
      setRicsState(item.key);
      if (button.dataset.ricsLocation === 'overview') {
        const preview = document.getElementById('ricsPreview');
        preview.innerHTML = `<strong>${item.number} · ${item.label}</strong><span>${item.summary}</span>`;
        preview.classList.add('active');
        ricsTimer = window.setTimeout(() => scrollToId(item.target), 420);
      } else {
        scrollToId(item.target);
      }
    });
  });

  const traitButtons = [...document.querySelectorAll('[data-trait]')];
  traitButtons.forEach(button => {
    button.addEventListener('click', () => {
      const active = button.classList.toggle('active');
      button.setAttribute('aria-pressed', String(active));
      const count = traitButtons.filter(entry => entry.classList.contains('active')).length;
      const feedback = count === traitButtons.length ? data.automationFit.complete : count ? data.automationFit.partial : data.automationFit.idle;
      document.getElementById('traitFeedback').textContent = feedback;
      document.getElementById('traitFeedback').classList.toggle('complete', count === traitButtons.length);
    });
  });

  const range = document.getElementById('houseRange');
  const updateRange = () => {
    const count = Number(range.value);
    const minutes = Math.round((count * data.scale.secondsPerItem / 60) * 10) / 10;
    const minuteText = `${minutes.toFixed(Number.isInteger(minutes) ? 0 : 1)} 分钟`;
    document.getElementById('houseCount').textContent = count;
    document.getElementById('runTime').textContent = minuteText;
    range.style.setProperty('--range-progress', `${(count - data.scale.min) / (data.scale.max - data.scale.min) * 100}%`);
  };
  range.addEventListener('input', updateRange);
  updateRange();

  const criteria = [...document.querySelectorAll('[data-criterion]')];
  criteria.forEach(button => {
    button.addEventListener('click', () => {
      const active = button.classList.toggle('active');
      button.setAttribute('aria-pressed', String(active));
      const count = criteria.filter(entry => entry.classList.contains('active')).length;
      document.getElementById('summaryCount').textContent = `${count} / ${criteria.length}`;
      document.getElementById('summaryFeedback').textContent = data.summary.feedback[count];
      document.querySelector('.summary-feedback').classList.toggle('high-priority', count === criteria.length);
    });
  });

  const updateScene = index => {
    if (index < 0 || index >= scenes.length) return;
    currentScene = index;
    const current = scenes[index];
    chapter.textContent = current.dataset.chapter || data.meta.shortTitle;
    const inCase = caseSceneIds.has(current.id);
    ricsDock.hidden = !inCase;
    if (current.dataset.rics) setRicsState(current.dataset.rics);
  };

  const sceneObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) updateScene(scenes.indexOf(entry.target));
    });
  }, { rootMargin: '-38% 0px -52% 0px', threshold: 0 });
  scenes.forEach(item => sceneObserver.observe(item));

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item));

  const go = delta => {
    const next = Math.max(0, Math.min(scenes.length - 1, currentScene + delta));
    scenes[next].scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  document.getElementById('prev').addEventListener('click', () => go(-1));
  document.getElementById('next').addEventListener('click', () => go(1));

  const enterPresent = () => document.documentElement.requestFullscreen?.().catch(() => {});
  document.getElementById('present').addEventListener('click', enterPresent);
  document.addEventListener('keydown', event => {
    const rangeInput = event.target.matches('input');
    const clickable = event.target.matches('button, a');
    if (rangeInput && [' ', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    if (clickable && event.key === ' ') return;
    if (['ArrowDown', 'ArrowRight', ' '].includes(event.key)) {
      event.preventDefault();
      go(1);
    }
    if (['ArrowUp', 'ArrowLeft'].includes(event.key)) {
      event.preventDefault();
      go(-1);
    }
    if (event.key.toLowerCase() === 'p' && !rangeInput) enterPresent();
    if (event.key === 'Escape' && document.fullscreenElement) document.exitFullscreen?.();
  });

  const updateProgress = () => {
    const doc = document.documentElement;
    const total = doc.scrollHeight - doc.clientHeight;
    progress.style.width = `${total > 0 ? doc.scrollTop / total * 100 : 0}%`;
  };
  document.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
  updateScene(0);
})();
