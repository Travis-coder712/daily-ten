// Per-edition text lives in content.js as window.EDITION; these defaults are the PA edition.
const E = Object.assign({
  key: 'dailyten.v1',
  intro: 'You already know how things really work around here. This is about getting the repetitive stuff off your plate, so more of your day goes on the parts that need a person.',
  why: 'Copilot has never met your manager, doesn’t know who’s sensitive about what, and can’t tell a good-looking document from a merely correct one. It’s very fast and never bored. Put the two together and you get speed <i>and</i> quality — which neither gets alone.',
  roleIntro: 'When Copilot does the gathering, time opens up for higher-value work. Use this list for a conversation with your manager about what changes.',
  takeOnTitle: 'Now within reach',
  handOverTitle: 'Things your manager shouldn’t be doing alone',
  handOverSub: 'With Copilot doing the legwork, these are quick for you — and a poor use of a senior person’s time.',
  examples: [1, 12, 19, 22],
}, window.EDITION || {});
const KEY = E.key;
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
}
let S = Object.assign({ name: '', started: false, log: {}, library: [] }, load());
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} }

function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 1800);
}
async function copy(text) {
  try { await navigator.clipboard.writeText(text); toast('Copied — paste it into Copilot'); }
  catch {
    const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); toast('Copied'); } catch { toast('Couldn’t copy — select the text instead'); }
    ta.remove();
  }
}
// Highlight [blanks] so it's obvious what to fill in.
const promptHtml = p => esc(p).replace(/\[([^\]]+)\]/g, '<mark>[$1]</mark>');

const doneCount = () => Object.values(S.log).filter(l => l.status === 'done').length;
const minsSaved = () => Object.values(S.log).reduce((a, l) => a + (Number(l.saved) || 0), 0);
const nextSession = () => SESSIONS.find(s => !S.log[s.id]) || null;
function level() {
  const n = doneCount();
  let cur = LEVELS[0], nxt = null;
  for (const l of LEVELS) { if (n >= l.at) cur = l; else { nxt = l; break; } }
  return { cur, nxt, n };
}
function fmtMins(m) {
  if (m < 60) return m + 'm';
  const h = Math.floor(m / 60), r = m % 60;
  return h + 'h' + (r ? ' ' + r + 'm' : '');
}
function greeting() {
  const h = new Date().getHours();
  const part = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  return part + (S.name ? ', ' + esc(S.name) : '');
}

// ── Views ───────────────────────────────────────────
function viewWelcome() {
  return `<section class="welcome">
    <div class="eyebrow">${E.label || 'Daily Ten'}</div>
    <h1>Ten minutes a day.<br>Hours back every week.</h1>
    <p>Small, practical experiments with Copilot — on the things you already do: inboxes, diaries, meetings, documents, travel.</p>
    <p>${E.intro}</p>
    <div class="card stack small">
      <div>☕ <b>One experiment a day</b>, 10–15 minutes. Skip days whenever you like.</div>
      <div>🧪 <b>Each one is a fair test.</b> If it doesn’t help, mark it and move on.</div>
      <div>🤝 <b>Copilot gathers, you finish.</b> It does the first draft; your judgement makes it good.</div>
      <div>🔒 <b>Completely private.</b> Your progress stays on this device only.</div>
    </div>
    ${PERSONAL_NOTE ? `<div class="card note">${esc(PERSONAL_NOTE)}</div>` : ''}
    <label class="small muted" for="nm">What should we call you? (optional)</label>
    <input type="text" id="nm" autocomplete="given-name" placeholder="First name" style="margin:6px 0 14px">
    <button class="btn block" id="go">Let’s start</button>
  </section>`;
}

function viewToday() {
  const nx = nextSession(), { cur, nxt, n } = level(), saved = minsSaved();
  const pct = nxt ? Math.round(((n - cur.at) / (nxt.at - cur.at)) * 100) : 100;
  const qi = QUICK[new Date().getDate() % QUICK.length];
  let hero;
  if (nx) {
    const w = WEEKS[nx.week - 1];
    hero = `<div class="card hero">
      <div class="eyebrow">Today’s experiment · Week ${nx.week}: ${esc(w.title)}</div>
      <h2>${esc(nx.title)}</h2>
      <p class="muted">${esc(nx.why)}</p>
      <div class="row wrap" style="margin-bottom:14px"><span class="chip">⏱ ${nx.mins} min</span><span class="chip">${esc(nx.app)}</span></div>
      <a class="btn block" href="#/s/${nx.id}">Start</a>
    </div>`;
  } else {
    hero = `<div class="card hero celebrate"><div class="big">🎉</div><h2>All thirty done.</h2>
      <p class="muted">You’ve built a real way of working. Keep one Copilot habit a day — and revisit any you skipped.</p>
      <a class="btn" href="#/library">See your playbook</a></div>`;
  }
  return `<h1 class="hello">${greeting()}</h1>
    ${hero}
    <div class="stats">
      <div class="stat"><b>${n}</b><span>experiments tried</span></div>
      <div class="stat"><b>${saved ? fmtMins(saved) : '—'}</b><span>saved each time</span></div>
      <div class="stat"><b>${S.library.length}</b><span>prompts saved</span></div>
    </div>
    <div class="card">
      <div class="row spread" style="margin-bottom:8px"><div><div class="eyebrow">Level</div><h3>${cur.name}</h3></div>
      ${nxt ? `<span class="small muted">${nxt.at - n} to ${nxt.name}</span>` : '<span class="chip warm">Top level</span>'}</div>
      <div class="level"><div class="bar"><i style="width:${pct}%"></i></div></div>
      <p class="small muted" style="margin:8px 0 0">${cur.note}</p>
    </div>
    <div class="card">
      <div class="eyebrow">Busy day? A two-minute win</div>
      <h3 style="margin:4px 0 8px">${esc(qi.title)} <span class="chip" style="vertical-align:middle">${esc(qi.app)}</span></h3>
      <div class="prompt">${promptHtml(qi.prompt)}<button class="btn sm copy" data-copy="${esc(qi.prompt)}">Copy</button></div>
      <a class="small" href="#/quick" style="display:inline-block;margin-top:10px">More two-minute wins →</a>
    </div>`;
}

function viewPath() {
  const nx = nextSession();
  return `<h1 class="hello">The path</h1>
    <p class="muted">Six weeks, five a week. Go in order or jump to whatever’s useful today.</p>
    ${WEEKS.map(w => {
      const ss = SESSIONS.filter(s => s.week === w.n);
      const d = ss.filter(s => S.log[s.id]?.status === 'done').length;
      return `<div class="week"><div class="row spread"><h3>Week ${w.n} · ${esc(w.title)}</h3><span class="small muted">${d}/${ss.length}</span></div>
        <p class="small muted">${esc(w.blurb)}</p></div>
        ${ss.map(s => {
          const l = S.log[s.id];
          const cls = l?.status === 'done' ? 'done' : l?.status === 'skip' ? 'skip' : (nx && nx.id === s.id ? 'next' : '');
          const mark = l?.status === 'done' ? '✓' : l?.status === 'skip' ? '–' : s.id;
          const sub = l?.status === 'skip' ? 'Skipped — come back any time' : `${s.mins} min · ${s.app}`;
          return `<a class="item ${cls}" href="#/s/${s.id}"><span class="dot">${mark}</span><span class="t"><b>${esc(s.title)}</b><span>${esc(sub)}</span></span>${l?.result ? resultIcon(l.result) : ''}</a>`;
        }).join('')}`;
    }).join('')}`;
}
const resultIcon = r => `<span title="${r}">${{ yes: '👍', sort: '🤷', no: '👎' }[r] || ''}</span>`;

function viewSession(id) {
  const s = SESSIONS.find(x => x.id === id);
  if (!s) return viewPath();
  const l = S.log[id] || {};
  const inLib = S.library.some(p => p.from === id);
  const R = [['yes', '👍 Worked'], ['sort', '🤷 Sort of'], ['no', '👎 Not really']];
  const M = [0, 5, 10, 15, 30, 60];
  return `<a class="back" href="#/path">← The path</a>
    <div class="eyebrow">Week ${s.week} · Experiment ${s.id} of ${SESSIONS.length}</div>
    <h1 style="margin:6px 0 10px">${esc(s.title)}</h1>
    <div class="row wrap" style="margin-bottom:14px"><span class="chip">⏱ ${s.mins} min</span><span class="chip">${esc(s.app)}</span>${l.status === 'done' ? '<span class="chip warm">Done ✓</span>' : ''}</div>
    <p style="font-size:17px">${esc(s.why)}</p>
    ${SPLITS[s.id] ? `<div class="card split"><div class="ai"><div class="lbl">Copilot pulls together</div><p>${esc(SPLITS[s.id][0])}</p></div><div class="you"><div class="lbl">You make it good</div><p>${esc(SPLITS[s.id][1])}</p></div></div>` : ''}
    <div class="card"><h3 style="margin-bottom:12px">How</h3><ol class="steps">${s.steps.map(x => `<li>${x}</li>`).join('')}</ol></div>
    <div class="card"><div class="row spread" style="margin-bottom:10px"><h3>The prompt</h3><span class="small muted">Fill in the <mark style="background:var(--warm-soft);color:var(--warm);border-radius:4px;padding:0 3px">[blanks]</mark></span></div>
      <div class="prompt">${promptHtml(s.prompt)}<button class="btn sm copy" data-copy="${esc(s.prompt)}">Copy</button></div>
      <button class="btn ghost sm" id="savep" style="margin-top:10px" ${inLib ? 'disabled' : ''}>${inLib ? '★ In your library' : '☆ Save to my library'}</button>
    </div>
    <div class="card stack">
      <div class="tip"><b>Try a twist.</b> ${s.twist}</div>
      <div class="tip" style="border-color:var(--brand)"><b>Check it.</b> ${s.check}</div>
    </div>
    <div class="card stack" id="rate">
      <h3>How did it go?</h3>
      <div class="choice">${R.map(([k, t]) => `<button data-r="${k}" aria-pressed="${l.result === k}">${t}</button>`).join('')}</div>
      <div class="small muted" style="margin-top:14px">Roughly how much time would this save you each time?</div>
      <div class="mins">${M.map(m => `<button data-m="${m}" aria-pressed="${Number(l.saved) === m && l.saved !== undefined}">${m === 0 ? 'None' : m === 60 ? '1h+' : m + ' min'}</button>`).join('')}</div>
      <label class="small muted" for="note" style="display:block;margin-top:14px">A note for future you (optional)</label>
      <textarea id="note" placeholder="What worked, what didn’t, what you’d change…">${esc(l.note || '')}</textarea>
      <button class="btn block" id="done">${l.status === 'done' ? 'Update' : 'Mark as done'}</button>
      ${l.status !== 'done' ? `<button class="btn ghost block" id="skip">Not for me — skip it</button>` : ''}
    </div>`;
}

function viewQuick() {
  return `<h1 class="hello">Two-minute wins</h1>
    <p class="muted">For days with no spare ten minutes. Copy, fill in the blanks, paste into Copilot.</p>
    ${QUICK.map(q => `<div class="card"><div class="row spread" style="margin-bottom:10px"><h3>${esc(q.title)}</h3><span class="chip">${esc(q.app)}</span></div>
      <div class="prompt">${promptHtml(q.prompt)}<button class="btn sm copy" data-copy="${esc(q.prompt)}">Copy</button></div></div>`).join('')}`;
}

function viewLibrary() {
  const notes = SESSIONS.filter(s => S.log[s.id]?.note);
  return `<h1 class="hello">My library</h1>
    <p class="muted">The prompts that earned their keep, and your notes along the way. This becomes your playbook.</p>
    <div class="card stack">
      <h3>Add your own prompt</h3>
      <input type="text" id="lt" placeholder="Name it (e.g. Monday triage)">
      <textarea id="lp" placeholder="Paste a prompt that worked for you"></textarea>
      <button class="btn" id="ladd">Save prompt</button>
    </div>
    ${S.library.length ? S.library.map((p, i) => `<div class="card lib"><h3 style="margin-bottom:10px">${esc(p.title)}</h3>
      <div class="prompt">${promptHtml(p.text)}<div class="acts"><button class="btn ghost sm" data-del="${i}">Remove</button><button class="btn sm" data-copy="${esc(p.text)}">Copy</button></div></div></div>`).join('')
      : `<div class="card empty">No saved prompts yet. Tap <b>☆ Save to my library</b> on any experiment.</div>`}
    ${notes.length ? `<h2 style="margin:24px 0 10px">My notes</h2>${notes.map(s => `<a class="item" href="#/s/${s.id}"><span class="dot">${resultIcon(S.log[s.id].result) || s.id}</span><span class="t"><b>${esc(s.title)}</b><span>${esc(S.log[s.id].note)}</span></span></a>`).join('')}` : ''}
    <div class="card stack" style="margin-top:20px">
      <h3>Export my playbook</h3>
      <p class="small muted">Everything — results, time saved, notes and saved prompts — as plain text you can paste into Copilot, Word or an email.</p>
      <div class="row wrap"><button class="btn" id="exp">Copy as text</button><button class="btn ghost" id="share">Copy a quick update</button></div>
    </div>
    <details class="card"><summary>Settings</summary>
      <div class="stack" style="margin-top:12px">
        <label class="small muted" for="nm2">Your name</label>
        <input type="text" id="nm2" value="${esc(S.name)}">
        <button class="btn ghost sm" id="nmsave">Save name</button>
        <hr>
        <button class="btn ghost sm" id="reset" style="color:var(--nope)">Start over (clears everything on this device)</button>
      </div>
    </details>`;
}

function viewGuide(part) {
  const parts = [['together', 'Together'], ['role', 'Your role'], ['rules', 'Ground rules']];
  if (!parts.some(p => p[0] === part)) part = 'together';
  const seg = `<div class="seg">${parts.map(([k, t]) => `<a href="#/guide/${k}" class="${k === part ? 'on' : ''}">${t}</a>`).join('')}</div>`;
  const body = part === 'role' ? guideRole() : part === 'rules' ? guideRules() : guideTogether();
  return `<h1 class="hello">Guide</h1>${seg}${body}`;
}

function guideTogether() {
  return `<div class="card">
      <h2 style="margin-bottom:10px">Working together, not replacing</h2>
      <p>${TOGETHER.lead}</p>
      <div class="flow">${TOGETHER.flow.map(f => `<div class="${f.who}"><b>${f.t}</b>${f.d}</div>`).join('')}</div>
      <div class="flow-key"><span><i style="background:var(--brand)"></i>Copilot</span><span><i style="background:var(--warm)"></i>You</span></div>
    </div>
    <div class="card"><h3 style="margin-bottom:8px">What that looks like in practice</h3>
      <p class="muted small">Every experiment shows both halves. A few examples:</p>
      ${E.examples.map(id => `<a class="item" href="#/s/${id}" style="margin:8px 0 0"><span class="t"><b>${esc(SESSIONS.find(x => x.id === id).title)}</b><span>Copilot: ${esc(SPLITS[id][0].toLowerCase())}. You: ${esc(SPLITS[id][1].toLowerCase())}.</span></span></a>`).join('')}
    </div>
    <div class="card"><h3 style="margin-bottom:8px">Why it works this way</h3>
      <p class="muted" style="margin:0">${E.why}</p>
    </div>`;
}

function guideRole() {
  return `<p class="muted">${E.roleIntro}</p>
    <h2 style="margin:18px 0 10px">${E.takeOnTitle}</h2>
    ${ROLE.takeOn.map(r => `<div class="card" style="padding:14px 16px"><h3 style="margin-bottom:4px">${esc(r.h)}</h3><p class="muted small" style="margin:0">${esc(r.p)}</p></div>`).join('')}
    <div class="card">
      <h2 style="margin-bottom:6px">${E.handOverTitle}</h2>
      <p class="muted small">${E.handOverSub}</p>
      <ul class="ticks">${ROLE.handOver.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
    </div>
    <h2 style="margin:18px 0 10px">Still firmly human</h2>
    ${ROLE.human.map(r => `<div class="card" style="padding:14px 16px;border-left:3px solid var(--warm)"><h3 style="margin-bottom:4px">${esc(r.h)}</h3><p class="muted small" style="margin:0">${esc(r.p)}</p></div>`).join('')}`;
}

function guideRules() {
  return `<p class="muted">${RULES.length === 7 ? 'Seven' : RULES.length} things worth knowing before (and after) every experiment.</p>
    ${RULES.map((r, i) => `<div class="card"><div class="row" style="align-items:flex-start;gap:14px"><span class="chip warm" style="flex:none">${i + 1}</span><div><h3 style="margin-bottom:6px">${r.h}</h3><p class="muted" style="margin:0">${r.p}</p></div></div></div>`).join('')}
    <div class="card"><h3 style="margin-bottom:8px">The levels</h3>
      ${LEVELS.map(l => `<div class="row spread small" style="padding:6px 0;border-bottom:1px solid var(--line)"><b>${l.name}</b><span class="muted">${l.at ? l.at + ' experiments' : 'Day one'}</span></div>`).join('')}
    </div>`;
}

// ── Export ──────────────────────────────────────────
function playbookText() {
  const L = { yes: 'Worked', sort: 'Sort of', no: 'Not really' };
  let t = `MY COPILOT PLAYBOOK\n${doneCount()} experiments tried · ~${fmtMins(minsSaved())} saved per round\n\n`;
  for (const w of WEEKS) {
    const ss = SESSIONS.filter(s => s.week === w.n && S.log[s.id]);
    if (!ss.length) continue;
    t += `— Week ${w.n}: ${w.title} —\n`;
    for (const s of ss) {
      const l = S.log[s.id];
      t += `• ${s.title}: ${l.status === 'skip' ? 'Skipped' : (L[l.result] || 'Done')}${l.saved ? ` (~${l.saved} min saved)` : ''}${l.note ? `\n  Note: ${l.note}` : ''}\n`;
    }
    t += '\n';
  }
  if (S.library.length) t += `SAVED PROMPTS\n${S.library.map(p => `• ${p.title}\n  ${p.text}`).join('\n\n')}\n`;
  return t;
}
function updateText() {
  const done = SESSIONS.filter(s => S.log[s.id]?.status === 'done');
  const best = done.filter(s => S.log[s.id].result === 'yes').sort((a, b) => (S.log[b.id].saved || 0) - (S.log[a.id].saved || 0))[0];
  return `Daily Ten update: ${done.length} experiments tried so far${minsSaved() ? `, roughly ${fmtMins(minsSaved())} saved per round` : ''}.` +
    (best ? ` Best one so far: “${best.title}”.` : '');
}

// ── Router ──────────────────────────────────────────
function render() {
  const h = location.hash.replace(/^#\/?/, '') || 'today';
  const [route, arg] = h.split('/');
  const app = $('#app');
  if (!S.started) { $('#tabs').hidden = true; app.innerHTML = viewWelcome(); bindWelcome(); return; }
  $('#tabs').hidden = false;
  const views = { today: viewToday, path: viewPath, quick: viewQuick, library: viewLibrary, guide: () => viewGuide(arg), rules: () => viewGuide('rules') };
  app.innerHTML = route === 's' ? viewSession(Number(arg)) : (views[route] || viewToday)();
  const tab = route === 's' ? 'path' : route === 'rules' ? 'guide' : (views[route] ? route : 'today');
  document.querySelectorAll('nav.tabs a').forEach(a => a.classList.toggle('on', a.dataset.tab === tab));
  if (route === 's') bindSession(Number(arg));
  if (route === 'library') bindLibrary();
}

function bindWelcome() {
  $('#go').onclick = () => {
    S.name = $('#nm').value.trim(); S.started = true; save();
    location.hash = '#/today'; render();
  };
}

function bindSession(id) {
  const s = SESSIONS.find(x => x.id === id); if (!s) return;
  const draft = Object.assign({}, S.log[id] || {});
  document.querySelectorAll('[data-r]').forEach(b => b.onclick = () => {
    draft.result = b.dataset.r;
    document.querySelectorAll('[data-r]').forEach(x => x.setAttribute('aria-pressed', x === b));
  });
  document.querySelectorAll('[data-m]').forEach(b => b.onclick = () => {
    draft.saved = Number(b.dataset.m);
    document.querySelectorAll('[data-m]').forEach(x => x.setAttribute('aria-pressed', x === b));
  });
  $('#savep').onclick = () => {
    S.library.push({ title: s.title, text: s.prompt, from: id }); save();
    toast('Saved to your library');
    // Update in place so an unsaved rating/note isn't wiped by a re-render.
    $('#savep').disabled = true; $('#savep').textContent = '★ In your library';
  };
  $('#done').onclick = () => {
    const first = S.log[id]?.status !== 'done';
    const before = level().cur.name;
    S.log[id] = Object.assign(draft, { status: 'done', note: $('#note').value.trim(), date: new Date().toLocaleDateString('en-CA') });
    save();
    const after = level().cur.name;
    if (first && after !== before) toast(`New level: ${after} 🎉`);
    else toast(first ? 'Nice one. See you tomorrow.' : 'Updated');
    location.hash = '#/today';
  };
  const sk = $('#skip');
  if (sk) sk.onclick = () => {
    S.log[id] = { status: 'skip', note: $('#note').value.trim() }; save();
    toast('Skipped — no harm done'); location.hash = '#/today';
  };
}

function bindLibrary() {
  $('#ladd').onclick = () => {
    const text = $('#lp').value.trim(); if (!text) return toast('Paste a prompt first');
    S.library.unshift({ title: $('#lt').value.trim() || 'My prompt', text }); save();
    toast('Saved'); render();
  };
  document.querySelectorAll('[data-del]').forEach(b => b.onclick = () => {
    S.library.splice(Number(b.dataset.del), 1); save(); render();
  });
  $('#exp').onclick = () => copy(playbookText());
  $('#share').onclick = () => copy(updateText());
  $('#nmsave').onclick = () => { S.name = $('#nm2').value.trim(); save(); toast('Saved'); };
  $('#reset').onclick = () => {
    if (!confirm('Clear all progress, notes and saved prompts on this device?')) return;
    S = { name: '', started: false, log: {}, library: [] }; save(); location.hash = ''; render();
  };
}

// Delegated copy buttons
document.addEventListener('click', e => {
  const b = e.target.closest('[data-copy]');
  if (b) copy(b.dataset.copy);
});
window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); });
render();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register(E.sw || 'sw.js').catch(() => {});
}
