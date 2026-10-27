// Daily Ten — all the content lives here. Edit freely: the app reads these arrays.
// Prompts: anything in [square brackets] is a blank to fill in before you send.

// Optional personal note shown on the welcome screen. Leave '' to hide it.
window.PERSONAL_NOTE = '';

window.WEEKS = [
  { n: 1, title: 'First wins', blurb: 'Low-stakes experiments on things you already do. No setup, no jargon.' },
  { n: 2, title: 'Inbox, handled', blurb: 'Triage, follow-ups and replies — the stuff that eats the morning.' },
  { n: 3, title: 'Diaries & meetings', blurb: 'Prep packs, agendas, recaps and the scheduling puzzles nobody else can solve.' },
  { n: 4, title: 'Docs, decks & sheets', blurb: 'Word, PowerPoint and Excel — first drafts in seconds, polish by you.' },
  { n: 5, title: 'Research & the big jobs', blurb: 'Agents, Claude, travel and events — the bigger, messier work.' },
  { n: 6, title: 'Make it yours', blurb: 'Saved prompts, scheduled briefs, your own agent — and becoming the go-to person.' },
];

window.SESSIONS = [
  // ── Week 1 ──────────────────────────────────────────────
  {
    id: 1, week: 1, mins: 10, app: 'Outlook',
    title: 'The long thread',
    why: 'Forty-reply email chains are where time goes to die. Let’s see if Copilot can read one for you.',
    steps: [
      'In Outlook, open the longest, messiest email thread you have this week.',
      'At the top of the message, click <b>Summarise</b> (or <b>Summary by Copilot</b>). If you can’t see it, open the Copilot pane and paste the prompt below.',
      'Now ask the follow-up prompt below for a sharper version.',
      'Read the thread yourself and mark Copilot’s homework: what did it get right? What did it miss?',
    ],
    prompt: 'Summarise this thread in 3 bullets: what has been decided, what is still open, and who is waiting on whom. Then list any dates or deadlines mentioned.',
    twist: 'Ask: “What’s the one thing in this thread my manager would want to know?”',
    check: 'Names and dates are where it slips. Give it a score out of 10 — that’s the whole point of today.',
  },
  {
    id: 2, week: 1, mins: 10, app: 'Outlook',
    title: 'Say it nicer (or firmer)',
    why: 'Tricky replies take ages because the tone has to be just right. Copilot is quick at drafts; you’re the one who knows the person.',
    steps: [
      'Pick a reply you’ve been putting off — a no, a chase, a delicate one.',
      'Click <b>Reply</b>, then the Copilot icon → <b>Draft with Copilot</b>. Type a rough version of what you want to say.',
      'Ask for three versions using the prompt below.',
      'Choose one, then make it sound like <i>you</i>. Send it (or don’t).',
    ],
    prompt: 'Give me three versions of this reply: one warmer, one firmer, one under 50 words. Keep it professional and Australian in tone — no gushing. Here’s what I want to say: [your rough version]',
    twist: 'Try <b>Coaching by Copilot</b> on an email you’ve written yourself. Ignore any advice you disagree with.',
    check: 'Never send a draft without reading it as if the recipient were reading it.',
  },
  {
    id: 3, week: 1, mins: 10, app: 'Copilot Chat',
    title: 'What did I miss?',
    why: 'A five-minute catch-up first thing, instead of scrolling for twenty.',
    steps: [
      'Open <b>Microsoft 365 Copilot</b> (the Copilot app, or Copilot in Teams). Make sure you’re on the <b>Work</b> tab so it can see your email, chats and meetings.',
      'Paste the prompt below.',
      'Compare its list with your own sense of the day. Did it rank things the way you would?',
    ],
    prompt: 'Look at my email and Teams messages from yesterday. Group them into: (1) needs action from me, (2) FYI, (3) safe to ignore. For group 1, say what the action is and who it’s for. Keep it to one screen.',
    twist: 'Ask: “Which of those has been waiting longest?”',
    check: 'It only sees what’s in your own mailbox and chats. If it misses something, that tells you where its blind spots are.',
  },
  {
    id: 4, week: 1, mins: 15, app: 'Copilot Chat',
    title: 'Brief your new assistant',
    why: 'Copilot gets far better once it knows who you are and how you like things done. Ten minutes now, better answers forever.',
    steps: [
      'In Copilot, open <b>Settings → Personalisation</b> (also called custom instructions or memory — the name moves around). If you can’t find it, ask Copilot “How do I set custom instructions?”',
      'Use the prompt below to have Copilot interview you, then paste the result into custom instructions.',
      'Finish by asking it the “what can you do for me” question in the twist.',
    ],
    prompt: 'Interview me, one question at a time, so you can write a short set of custom instructions about how to help me. I’m an executive assistant. Ask about my role, who I support, the tasks I do most, my preferred tone and spelling (Australian English), and things I want you to avoid. After 6–8 questions, write the instructions in under 150 words.',
    twist: '“Based on what you know about my role, what are 10 things you could do for me in Outlook, Teams and Word that I probably haven’t tried?”',
    check: 'Keep the instructions practical — tone, format, spelling, what matters to you.',
  },
  {
    id: 5, week: 1, mins: 15, app: 'Anywhere',
    title: 'The fair test',
    why: 'You don’t have to be convinced. Let’s run an honest test on a real task and see the numbers.',
    steps: [
      'Pick one small task you did manually this week — a reply, a summary, a list, a tidy-up.',
      'Do a similar one today with Copilot. Time it (roughly), including the time it takes to check and fix its work.',
      'Be honest about which was faster and which was better.',
      'Note the result below. A “not really” is a perfectly useful answer — it tells you where <i>not</i> to bother.',
    ],
    prompt: 'I’m going to give you a task I normally do by hand. Do your best version, then tell me which parts I should double-check. Task: [describe the task and paste any material]',
    twist: 'Ask Copilot: “How could I have asked that better?” Then try again and compare.',
    check: 'Week 1 done. The aim was never to love it — just to know what it’s good for.',
  },

  // ── Week 2 ──────────────────────────────────────────────
  {
    id: 6, week: 2, mins: 10, app: 'Copilot Chat',
    title: 'The morning triage',
    why: 'One prompt that sorts the inbox and drafts the easy replies, so you start the day on the important stuff.',
    steps: [
      'Open Copilot (Work tab) and paste the prompt below.',
      'Read its ranking. Do you agree with the top three?',
      'Open one of the drafts, edit it, and send it from Outlook.',
      'Save this prompt to your library if it earns its keep — you’ll want it every morning.',
    ],
    prompt: 'Find emails from the last 24 hours that I haven’t replied to. Rank each 1–5 for importance (5 = urgent, from a senior person, or time-sensitive). Show a table: sender, subject, rank, one-line reason. Then draft short replies for anything ranked 4 or 5.',
    twist: 'Run it again at 2pm with “since 9am” instead.',
    check: 'Copilot drafts; you send. Never let a draft go out unread.',
  },
  {
    id: 7, week: 2, mins: 10, app: 'Copilot Chat',
    title: 'Polite nudges',
    why: 'Chasing people is necessary, repetitive, and a bit awkward. Perfect intern work.',
    steps: [
      'Paste the prompt below into Copilot.',
      'Check the list — are these genuinely still outstanding?',
      'Pick two nudges, adjust the tone for each person, and send.',
    ],
    prompt: 'Find emails I sent in the last two weeks that asked for something and haven’t had a reply. List them by how long they’ve been waiting. For the three oldest, draft a friendly, short follow-up that makes it easy to reply in one line.',
    twist: 'Ask for a version you could send by Teams chat instead — shorter, more casual.',
    check: 'It might miss replies that came by Teams or phone. You know the context; it doesn’t.',
  },
  {
    id: 8, week: 2, mins: 10, app: 'Outlook',
    title: 'The two-line brief',
    why: 'Your manager doesn’t want the thread. They want the two lines that matter. This is one of the most valuable things a great EA does.',
    steps: [
      'Find a thread your manager needs to know about but hasn’t read.',
      'Open the Copilot pane in Outlook with that email open and use the prompt below.',
      'Edit it until it’s exactly what you’d say in person, then send it to them (or keep it as a draft to compare).',
    ],
    prompt: 'Write a two-line brief of this thread for a busy senior executive: line 1 = what’s happening, line 2 = what (if anything) they need to do and by when. No preamble.',
    twist: 'Ask for a version that starts with “Decision needed:” or “FYI only:” so they can tell at a glance.',
    check: 'Make sure it hasn’t softened or dropped anything important to sound concise.',
  },
  {
    id: 9, week: 2, mins: 10, app: 'Outlook → To Do',
    title: 'Email to action list',
    why: 'Long emails hide tasks. Pull them out into a list you can actually work through.',
    steps: [
      'Open an email (or meeting follow-up) with lots of asks buried in it.',
      'Use the prompt below in the Copilot pane.',
      'Copy the actions into Microsoft To Do, Planner or your usual list. (In Outlook you can also flag the email so it lands in To Do.)',
    ],
    prompt: 'Pull every action item out of this email into a table with columns: action, owner, due date (or “not stated”). Put anything assigned to me or my manager at the top.',
    twist: 'Ask it to draft a reply that confirms the actions back to everyone, so there’s no ambiguity.',
    check: '“Not stated” due dates are a gift — they’re what you should clarify.',
  },
  {
    id: 10, week: 2, mins: 15, app: 'Copilot Chat',
    title: 'Your greatest hits',
    why: 'You probably write the same ten emails over and over. Let’s turn them into templates.',
    steps: [
      'Paste the prompt below into Copilot (Work tab).',
      'Look at what it found. Are those really your repeats?',
      'Ask it to turn the best three into templates, then save them — in Outlook (<b>My Templates</b>/quick parts) or this app’s Library.',
    ],
    prompt: 'Look at emails I’ve sent over the last month and identify the 5–8 types of email I send most often (e.g. meeting requests, declines, room bookings, travel confirmations). For each, write a reusable template with [blanks] for the parts that change.',
    twist: 'Ask for a “decline politely without over-explaining” template. Everyone needs one.',
    check: 'Strip out anything specific to one person before saving a template.',
  },

  // ── Week 3 ──────────────────────────────────────────────
  {
    id: 11, week: 3, mins: 10, app: 'Copilot Chat',
    title: 'Tomorrow at a glance',
    why: 'An end-of-day look at tomorrow means fewer surprises at 8:55am.',
    steps: [
      'Paste the prompt below into Copilot (Work tab).',
      'Run it for your own diary, then again for your manager’s (name them in the prompt).',
      'Check it against the real calendar — you’ll spot things it can’t, like the meeting that’s quietly been cancelled.',
    ],
    prompt: 'Look at tomorrow’s calendar for [me / my manager’s name]. For each meeting give: time, who’s attending, what it’s about, and anything I should prepare or send beforehand (based on related emails and files). Flag back-to-backs, clashes, and anything with no agenda.',
    twist: 'Ask: “Which of tomorrow’s meetings could be an email instead?” (Maybe don’t forward that one.)',
    check: 'If something looks off, it usually is — calendars are full of stale invites.',
  },
  {
    id: 12, week: 3, mins: 15, app: 'Copilot Chat',
    title: 'The meeting prep pack',
    why: 'Walking your manager into a meeting fully briefed is a superpower. This gets you 80% of the way in minutes.',
    steps: [
      'Pick an important meeting coming up this week.',
      'Use the prompt below. Type <b>/</b> to reference the meeting, a person or a file directly.',
      'Tidy the result into a one-page brief. That’s your template for next time.',
    ],
    prompt: 'Prepare a one-page brief for [meeting name] on [date]. Include: purpose of the meeting, who’s attending and their role, recent email and Teams discussion with them on this topic, open issues or decisions needed, relevant files, and 3 questions worth asking. Use headings and keep it skimmable.',
    twist: 'Ask: “What’s likely to be top of mind for [attendee] going into this meeting?”',
    check: 'Check that people’s titles and roles are right — it sometimes guesses.',
  },
  {
    id: 13, week: 3, mins: 10, app: 'Copilot Chat',
    title: 'Agenda from chaos',
    why: '“Can we meet about all this?” followed by twelve emails. Turn it into a proper agenda.',
    steps: [
      'Find a messy email or chat that’s turning into a meeting.',
      'Use the prompt below, pointing Copilot at the thread (type <b>/</b> to reference it, or paste it in).',
      'Paste the agenda into the meeting invite.',
    ],
    prompt: 'Turn this discussion into a 45-minute meeting agenda. Give each item a time allocation, an owner, and the outcome we need (decision / update / discussion). Add any pre-reading people should do.',
    twist: 'Ask for a 25-minute version. Watch what it cuts — it’s usually right.',
    check: 'Owners are guesses until you confirm them.',
  },
  {
    id: 14, week: 3, mins: 10, app: 'Teams',
    title: 'Recap & follow-up',
    why: 'The meeting ends; the follow-up email is where things actually get done.',
    steps: [
      'Pick a Teams meeting that was recorded or transcribed (Copilot needs the transcript).',
      'Open the meeting in Teams → <b>Recap</b> tab, or open Copilot in the meeting chat.',
      'Use the prompt below, then edit and send the follow-up.',
      'Next meeting you organise: turn on transcription and try the <b>Facilitator</b> agent for live notes.',
    ],
    prompt: 'From this meeting, list the decisions made, the action items with owners and dates, and any unresolved questions. Then draft a short follow-up email to attendees with those three sections.',
    twist: 'Ask: “Was anyone given an action they might not have realised they agreed to?”',
    check: 'Transcripts mishear names and numbers. Check anything that matters.',
  },
  {
    id: 15, week: 3, mins: 15, app: 'Outlook / Copilot Chat',
    title: 'The scheduling puzzle',
    why: 'Six senior people, two time zones and one room. This is your expertise — see if Copilot can do the grunt work.',
    steps: [
      'Pick a real, awkward scheduling job (or invent one).',
      'Try <b>Schedule with Copilot</b> in Outlook if you see it. Otherwise, use the prompt below in Copilot Chat.',
      'Compare its options with what you’d have done. You’ll probably beat it — note where it helps.',
    ],
    prompt: 'I need to find a [length] meeting for [names] in the next [two weeks]. Constraints: [e.g. not Mondays, person X is in Perth, must be in person in Melbourne, avoid lunch]. Suggest the three best options with your reasoning, then draft the “finding a time” email.',
    twist: 'Ask for the time-zone table: what each option looks like in each person’s local time.',
    check: 'It can’t see private appointments, travel time or the politics. You can.',
  },

  // ── Week 4 ──────────────────────────────────────────────
  {
    id: 16, week: 4, mins: 15, app: 'Word',
    title: 'Notes to a proper document',
    why: 'Rough notes to a polished briefing note or letter is classic first-draft work.',
    steps: [
      'Open a new Word document and click <b>Draft with Copilot</b>.',
      'Use the prompt below. Reference a file with <b>/</b> if your notes are in one, or paste them.',
      'Edit until it’s right. Note roughly how long it took vs starting from blank.',
    ],
    prompt: 'Turn these notes into a one-page briefing note with headings: Purpose, Background, Key issues, Recommendation. Plain English, short paragraphs, Australian spelling. Notes: [paste or reference]',
    twist: 'Highlight a paragraph and ask Copilot to <b>rewrite</b> it more concisely, or as a table.',
    check: 'If it adds facts that weren’t in your notes, delete them. It fills gaps confidently.',
  },
  {
    id: 17, week: 4, mins: 10, app: 'Word',
    title: 'The forensic proofread',
    why: 'Spell-check catches typos. This catches the wrong date on page 3 that contradicts page 1.',
    steps: [
      'Open a document that’s about to go out (or one that went out last month).',
      'Open Copilot in Word and use the prompt below.',
      'Fix what’s real; ignore what isn’t.',
    ],
    prompt: 'Check this document for inconsistencies: dates, names, numbers, titles, and terms that are used differently in different places. Also flag anything ambiguous or that a reader could misinterpret. List each issue with where it is.',
    twist: 'Ask: “Read this as a sceptical board member — what questions would you ask?”',
    check: 'This is where it genuinely shines. Still — you make the final call.',
  },
  {
    id: 18, week: 4, mins: 15, app: 'Excel',
    title: 'Ask your spreadsheet a question',
    why: 'Attendee lists, expense trackers, contact sheets — Copilot can answer questions about them in plain English.',
    steps: [
      'Open a spreadsheet you use (format the data as a table with <b>Ctrl+T</b> — Copilot works best that way).',
      'Open Copilot in Excel and try the prompt below.',
      'Then ask it to explain a formula you’ve always been scared of.',
    ],
    prompt: 'Look at this table. Highlight any duplicates or missing values, summarise the totals by [category/person/month], and suggest one chart that would make the summary clear.',
    twist: '“Write me a formula that [what you want, in plain words], and explain how it works.”',
    check: 'Spot-check one total by hand. Trust, but verify.',
  },
  {
    id: 19, week: 4, mins: 15, app: 'PowerPoint',
    title: 'Deck in a hurry',
    why: '“Can you pull together a few slides on this?” at 4pm. Now there’s a head start.',
    steps: [
      'Open PowerPoint, click <b>Copilot</b> and choose to create a presentation from a file.',
      'Point it at a Word document (try the one from session 16) using the prompt below.',
      'Then open an existing deck and ask it to summarise it or add speaker notes.',
    ],
    prompt: 'Create a 5-slide presentation from [file]. Slide 1 title, then one slide each for the main points, and a final slide of next steps. Keep each slide to 3–4 bullets max.',
    twist: 'Ask Copilot to “add speaker notes to every slide” — handy before your manager presents.',
    check: 'Design will be generic. Apply the company template and fix any images that don’t fit.',
  },
  {
    id: 20, week: 4, mins: 10, app: 'Word / Teams',
    title: 'Minutes, properly',
    why: 'Formal minutes from a transcript or scribbled notes, in your organisation’s format.',
    steps: [
      'Find a past set of minutes you’re happy with — that’s your style guide.',
      'Use the prompt below in Copilot (Word or Chat), referencing the old minutes and the new transcript or notes.',
      'Compare. Save the prompt if it’s a keeper.',
    ],
    prompt: 'Using [previous minutes] as the format and style, write minutes for [this meeting] from [transcript/notes]. Include attendees, apologies, items discussed, decisions and actions (owner + date). Formal tone, third person, concise.',
    twist: 'Ask for an “actions only” version to send immediately, before the full minutes.',
    check: 'Minutes are a record. Check every decision against what was actually said.',
  },

  // ── Week 5 ──────────────────────────────────────────────
  {
    id: 21, week: 5, mins: 15, app: 'Researcher agent',
    title: 'Who are we meeting?',
    why: 'A visitor or company is coming in. Build a proper background brief from the web and your internal files.',
    steps: [
      'In Copilot, open the agents list and choose <b>Researcher</b>. (It takes a few minutes — that’s normal; it’s doing real research.)',
      'Use the prompt below. It may ask clarifying questions — answer them.',
      'Read the result and check a couple of claims against the sources it links.',
    ],
    prompt: 'Prepare a background brief on [organisation or person] ahead of a meeting with [my manager] on [topic]. Include: who they are, recent news (last 6 months), any past dealings with us found in my email/files, and 3 sensible talking points. One page, with sources.',
    twist: 'Ask Researcher to use both GPT and Claude (if your version offers <b>Council</b> or a model choice) and compare.',
    check: 'Use only the links it gives you as evidence. No source = treat as a guess.',
  },
  {
    id: 22, week: 5, mins: 15, app: 'Copilot Chat',
    title: 'The travel draft',
    why: 'Multi-city trips with meetings, buffers and time zones. Get a draft itinerary, then make it real.',
    steps: [
      'Pick a real or upcoming trip.',
      'Use the prompt below with the meetings and constraints you know.',
      'Book through your normal channels — this is planning, not booking.',
    ],
    prompt: 'Draft an itinerary for [name] travelling [route] from [date] to [date]. Meetings: [list with times/locations]. Preferences: [e.g. no red-eyes, aisle seat, 60-min buffer after landing]. Lay it out day by day in a table with local times, travel buffers and a pre-trip checklist.',
    twist: 'Ask: “What could go wrong on this trip, and what’s the backup for each?”',
    check: 'Flight times, visa rules and opening hours must be checked at the source. Always.',
  },
  {
    id: 23, week: 5, mins: 10, app: 'Copilot (Claude)',
    title: 'Second opinion',
    why: 'Your Copilot can use different AI models, including Claude. They have different strengths — worth knowing which you prefer.',
    steps: [
      'Pick a writing task: a tricky email, a summary or a short note.',
      'Run the prompt below with the default model. Then switch to Claude (look for a model picker, or a Claude-powered agent such as Researcher’s Critique/Council) and run it again.',
      'Which would you actually send? Note why.',
    ],
    prompt: 'Write a short, warm but professional note from [my manager] to the team acknowledging [achievement/event]. Under 120 words. Specific, not generic — avoid clichés like “thrilled” and “journey”.',
    twist: 'Ask each model to critique the other’s version.',
    check: 'There’s no right answer — this is about developing your own taste.',
  },
  {
    id: 24, week: 5, mins: 15, app: 'Copilot Chat / Pages',
    title: 'Event in a box',
    why: 'Team lunch, offsite, visiting delegation — the checklist that lives in your head, written down in five minutes.',
    steps: [
      'Pick an event you’re organising (or will be).',
      'Use the prompt below.',
      'Open the result as a <b>Copilot Page</b> (look for “Edit in Pages”) so you can keep editing it and share it.',
    ],
    prompt: 'Help me plan [event] for [number] people on [date] at [location/TBC]. Give me: a timeline of tasks counting back from the day, a run sheet for the day itself, a budget checklist, and draft wording for the invitation.',
    twist: 'Ask for a “what usually gets forgotten” list for this type of event.',
    check: 'You know the venue, the people and the budget. It knows checklists. Combine.',
  },
  {
    id: 25, week: 5, mins: 15, app: 'Copilot Notebooks',
    title: 'A notebook for the big one',
    why: 'Board meetings, offsites, recurring reports — gather all the files in one place and ask questions across them.',
    steps: [
      'In Copilot, find <b>Notebooks</b> and create one for an ongoing project.',
      'Add 3–5 relevant files, emails or pages.',
      'Ask the prompt below, then try your own questions.',
    ],
    prompt: 'Across everything in this notebook, what are the open actions, the key dates, and the questions that still haven’t been answered? Who owns each?',
    twist: 'Ask it to draft the “status update” email you’d normally write by hand.',
    check: 'A notebook is only as good as what you put in it — keep it current.',
  },

  // ── Week 6 ──────────────────────────────────────────────
  {
    id: 26, week: 6, mins: 10, app: 'Copilot Chat',
    title: 'Keep the keepers',
    why: 'A good prompt you can’t find again is wasted. Build your toolkit.',
    steps: [
      'Look back through this app’s <b>Library</b> and your Copilot history.',
      'In Copilot, save your best 3–5 prompts (look for <b>Save prompt</b>, or the prompt gallery).',
      'Use the prompt below to improve your favourite one.',
    ],
    prompt: 'Here’s a prompt I use often: [paste]. Improve it so the output is more consistent: add a clear goal, the context you need, the sources to use, and the exact format I want. Show me the improved version only.',
    twist: 'Give your saved prompts names you’ll recognise at 8am on a Monday.',
    check: 'The best prompt library is short. Five great prompts beat fifty okay ones.',
  },
  {
    id: 27, week: 6, mins: 10, app: 'Copilot Chat',
    title: 'Your Monday briefing, on autopilot',
    why: 'Have Copilot do the week-ahead review before you even log on.',
    steps: [
      'Run the prompt below in Copilot to check you like the output.',
      'If your version offers <b>Schedule this prompt</b> (look in the “…” menu under the response), set it to run every Monday at 7am.',
      'If not, save it as a prompt and make it the first thing you do on Mondays.',
    ],
    prompt: 'Give me a week-ahead briefing: key meetings and what to prepare for each, deadlines this week, emails still awaiting replies from last week, and anything that looks like a clash or risk. Under one screen, with headings.',
    twist: 'Add a Friday afternoon version: “What did I get done this week, and what’s carrying over?”',
    check: 'Scheduled prompts run on your data at that moment — still give it a once-over.',
  },
  {
    id: 28, week: 6, mins: 20, app: 'Agent builder',
    title: 'Build your first agent',
    why: 'Answer the same questions over and over? (Room bookings, travel policy, where’s the form for…) Build a helper that answers them.',
    steps: [
      'In Copilot, go to <b>Agents → Create agent</b> (Agent Builder). Describe what you want in plain words — no code.',
      'Use the description below as a starting point.',
      'Add knowledge: the relevant policy documents or SharePoint pages.',
      'Test it with five real questions. Keep it to yourself until you trust it — then share with one colleague.',
    ],
    prompt: 'Create an agent called “Office Helper” that answers questions about [travel policy / room bookings / expense process] using only the documents I provide. It should answer in plain English in under 100 words, always link to the source document, and say “I’m not sure — check with [name]” if the answer isn’t in the documents.',
    twist: 'Add three “conversation starters” — the questions people ask you most.',
    check: 'Only add documents everyone who’ll use the agent is allowed to see.',
  },
  {
    id: 29, week: 6, mins: 10, app: 'Teams',
    title: 'Teach one trick',
    why: 'The fastest way to really know something is to show someone else. And it’s how you become the go-to person.',
    steps: [
      'Pick the one thing from the last five weeks that saved you the most time.',
      'Show it to a colleague (another EA is ideal) — five minutes, live, on their own inbox.',
      'Or use the prompt below to write it up as a quick tip.',
    ],
    prompt: 'Write a short Teams message sharing a practical Copilot tip with fellow assistants: what it does, the exact prompt to use, and roughly how much time it saves. Friendly, under 80 words, no hype.',
    twist: 'Suggest a 15-minute monthly “what’s working” swap with other assistants.',
    check: 'Share what actually worked for you — real examples beat any training course.',
  },
  {
    id: 30, week: 6, mins: 15, app: 'This app',
    title: 'Your playbook',
    why: 'Thirty experiments in. Time to write down what you’ve learned — your own way of working.',
    steps: [
      'Open the <b>Library</b> tab and look at your notes and saved prompts.',
      'Use <b>Export my playbook</b> to grab everything as text.',
      'Paste it into Copilot with the prompt below to make it a one-page guide.',
      'Book 20 minutes with your manager. Open the <b>Guide → Your role</b> list together and agree three things you’ll take on now that Copilot does the gathering.',
      'Then: keep one Copilot habit a day. That’s it. You’re the go-to now.',
    ],
    prompt: 'Here are my notes from 30 small Copilot experiments: [paste]. Turn them into a one-page personal playbook: things I now do daily, things I do weekly, things I tried and don’t bother with, and my top five prompts.',
    twist: 'Send your manager the “things I tried and don’t bother with” list — it’s just as useful.',
    check: 'Well done. Truly.',
  },
];

// Two-minute wins: for days with no spare ten minutes.
window.QUICK = [
  { title: 'Explain this acronym', app: 'Copilot Chat', prompt: 'What does [acronym] mean in the context of our business? Check my emails and files for how it’s used.' },
  { title: 'Find that email', app: 'Copilot Chat', prompt: 'Find the email where [person] sent [thing] — I think it was around [month].' },
  { title: 'A better subject line', app: 'Outlook', prompt: 'Suggest five clear subject lines for this email that say what action is needed.' },
  { title: 'Bullets to email', app: 'Outlook', prompt: 'Turn these bullet points into a short, friendly email: [bullets]' },
  { title: 'Decline gracefully', app: 'Outlook', prompt: 'Draft a polite decline to this meeting on behalf of [manager], suggesting [alternative/delegate]. Two sentences.' },
  { title: 'Time zone check', app: 'Copilot Chat', prompt: 'If a meeting is at [time] in Melbourne on [date], what time is it in [cities]? Account for daylight saving.' },
  { title: 'Summarise this document', app: 'Word', prompt: 'Summarise this document in five bullets, then tell me the one thing I most need to act on.' },
  { title: 'Make it a table', app: 'Anywhere', prompt: 'Turn this into a neat table with sensible columns: [paste text]' },
  { title: 'Catch up on a chat', app: 'Teams', prompt: 'Summarise this chat from the last 7 days. What do people need from me?' },
  { title: 'Fix my formula', app: 'Excel', prompt: 'This formula isn’t working: [formula]. What’s wrong, and what’s the fixed version?' },
  { title: 'Shorter, please', app: 'Anywhere', prompt: 'Cut this by half without losing anything important: [paste]' },
  { title: 'How do I…?', app: 'Copilot Chat', prompt: 'How do I [do something] in Outlook / Teams / Excel? Give me the steps.' },
];

// The ground rules page.
window.RULES = [
  { h: 'You’re the editor. Always.', p: 'Copilot drafts; you decide. Nothing goes out under your name (or your manager’s) without you reading it properly.' },
  { h: 'Check names, dates and numbers', p: 'This is where AI slips most — and does it confidently. A quick check is part of the job, not a sign it failed.' },
  { h: 'It stays inside the company', p: 'Copilot at work uses your organisation’s protected version, so your emails and files aren’t used to train public AI. Still follow your usual rules on confidential and personal information.' },
  { h: 'If the answer is bad, give it more', p: 'The difference between a vague and a great answer is usually context. Try the four-part prompt: <b>Goal</b> (what you want) · <b>Context</b> (why, who it’s for) · <b>Source</b> (which emails/files) · <b>Expectations</b> (format, length, tone).' },
  { h: 'Buttons move around', p: 'Microsoft renames and moves things often. If you can’t find a button, open Copilot Chat and type the prompt there — or ask Copilot itself how to do it.' },
  { h: '“Not really” is a fine answer', p: 'Some of these won’t suit how you work. Mark them, move on. Knowing what not to use it for is half the skill.' },
  { h: 'Your progress is private', p: 'Everything in this app is stored only on this device. No accounts, no tracking — nobody can see what you’ve done or skipped.' },
];

window.LEVELS = [
  { at: 0, name: 'Curious', note: 'Just getting started.' },
  { at: 5, name: 'Capable', note: 'You know what it’s good for — and what it isn’t.' },
  { at: 12, name: 'Confident', note: 'Copilot is part of how you work now.' },
  { at: 20, name: 'Go-to', note: 'People will start asking you how you do it.' },
  { at: 30, name: 'Trailblazer', note: 'The best-equipped assistant in the building.' },
];

// Every experiment, split in two: what Copilot pulls together, and what only you bring.
window.SPLITS = {
  1: ['Reads all forty replies and drafts a summary', 'Spot what it missed — and what actually matters'],
  2: ['Three drafts in three tones, in seconds', 'Know the person, pick the tone, make it sound like you'],
  3: ['Sorts yesterday’s messages into piles', 'Judge what’s truly urgent — you know the backstory'],
  4: ['Remembers how you like things done', 'Decide how you want to work'],
  5: ['Does the first pass on a real task', 'Measure it honestly and decide if it’s worth it'],
  6: ['Ranks the inbox and drafts replies', 'Re-rank, edit, and decide what gets sent'],
  7: ['Finds the unanswered asks and drafts nudges', 'Know who needs a gentle nudge and who needs a phone call'],
  8: ['Condenses the thread', 'Choose what your manager needs to hear, and how'],
  9: ['Pulls out every action', 'Clarify owners and dates with the actual people'],
  10: ['Spots the emails you send again and again', 'Shape templates that still sound like you'],
  11: ['Pulls tomorrow together from calendar and email', 'See the clashes that matter and fix them'],
  12: ['Gathers the emails, files and attendee list', 'Add the context nobody wrote down; design the brief'],
  13: ['Structures a messy discussion', 'Set the priorities and agree who owns what'],
  14: ['Turns the transcript into actions and a draft email', 'Confirm what was really agreed'],
  15: ['Proposes options that fit the calendars', 'Handle the people, the politics and the preferences'],
  16: ['A first draft from rough notes', 'Shape the argument and the recommendation'],
  17: ['Finds inconsistencies in seconds', 'Decide which ones matter, and fix them'],
  18: ['Crunches the table', 'Ask the right question; sanity-check the answer'],
  19: ['A rough deck in a minute', 'The story, the design, and making it look like us'],
  20: ['Minutes in your house format', 'Make sure the record is accurate'],
  21: ['Researches dozens of sources in minutes', 'Judge what’s credible and what’s relevant'],
  22: ['A day-by-day draft itinerary', 'Verify, book, and know the traveller’s quirks'],
  23: ['Two different drafts from two models', 'Your taste decides'],
  24: ['Checklist, run sheet and invite wording', 'The venue, the people, the budget — and the human touches'],
  25: ['Answers questions across a pile of files', 'Keep it current and ask the right questions'],
  26: ['Tightens up your prompts', 'Know which jobs are worth automating'],
  27: ['Runs the briefing before you log on', 'Act on it'],
  28: ['Answers routine questions any time', 'Curate what it knows and handle the exceptions'],
  29: ['Writes up the tip', 'Show it live — people learn from people'],
  30: ['Formats your playbook', 'Decide how you want to work from here'],
};

// The Guide tab.
window.TOGETHER = {
  lead: 'Copilot is brilliant at pulling things together — the first draft, the first 70%. The last 30% is what makes it good: judgement, relationships, taste, design, and knowing what’s really going on. That part is yours, and it’s the part that matters.',
  flow: [
    { who: 'ai', t: 'Gather', d: 'emails, files, meetings' },
    { who: 'ai', t: 'Draft', d: 'a starting point, fast' },
    { who: 'you', t: 'Review', d: 'is it right? is it true?' },
    { who: 'you', t: 'Improve', d: 'tone, context, what’s missing' },
    { who: 'you', t: 'Design', d: 'make it clear and look right' },
    { who: 'you', t: 'Decide', d: 'send, act, own it' },
  ],
};

window.ROLE = {
  takeOn: [
    { h: 'A brief for every important meeting', p: 'Not just the big ones. Copilot gathers the emails, files and attendees; you add what nobody wrote down.' },
    { h: 'The action tracker', p: 'Decisions and actions from every meeting in one place, followed up without anyone having to ask.' },
    { h: 'First drafts of routine correspondence', p: 'Replies, thank-yous, declines and updates ready for a quick review — your judgement on tone, Copilot on speed.' },
    { h: 'Background research', p: 'Who’s coming in, what they’ve been in the news for, what we last discussed with them — before anyone asks.' },
    { h: 'Same-day minutes and follow-ups', p: 'Out while the meeting’s still fresh, accurate because you checked them.' },
    { h: 'The weekly look-ahead and wrap-up', p: 'Monday: what’s coming and what to prepare. Friday: what got done and what’s carrying over.' },
    { h: 'Coordinating leadership and board papers', p: 'Chasing contributors, checking consistency across papers, spotting gaps early.' },
    { h: 'The team’s go-to for Copilot', p: 'Building small helper agents, sharing what works, showing others how — a genuinely new part of the role.' },
  ],
  handOver: [
    'Triaging their own inbox from scratch',
    'Reading long threads to find the point',
    'Writing meeting follow-ups and action emails',
    'Preparing their own meeting briefs',
    'Chasing people for replies',
    'Formatting decks and documents',
    'Juggling diaries across lots of people',
    'Pulling the weekly update together from scattered emails',
  ],
  human: [
    { h: 'Relationships and reading the room', p: 'Who needs a call instead of an email. Who’s having a hard week.' },
    { h: 'Sensitive and confidential matters', p: 'People issues, personal information, anything that needs discretion first and speed second.' },
    { h: 'Decisions and accountability', p: 'Copilot can suggest. A person decides and owns it.' },
    { h: 'The unwritten rules', p: 'How things really get done here. None of that is in the files.' },
    { h: 'Final quality', p: 'Nothing goes out until someone who cares has made it good.' },
  ],
};
