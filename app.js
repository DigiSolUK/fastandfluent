import { levels, topics } from './lessons.js';

const filters = document.querySelector('#filters');
const grid = document.querySelector('#topic-grid');
const challengeLevel = document.querySelector('#challenge-level');
const startChallenge = document.querySelector('#start-challenge');
const progressButton = document.querySelector('#progress-button');
const progressCount = document.querySelector('#progress-count');
const activity = document.querySelector('#activity');
const activityLabel = document.querySelector('#activity-label');
const body = document.querySelector('#activity-body');
const storageKey = 'fastandfluent-cleared-v1';
const validKeys = new Set(topics.flatMap((topic, index) =>
  topic.lessons.map((_, stage) => lessonKey(index, stage))
));

let level = 0;
let cleared = readProgress();
let opener;

function lessonKey(index, stage) {
  return `${index}-${stage}`;
}

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(saved)) return new Set(saved.filter(key => validKeys.has(key)));
  } catch {
    // Progress still works for this visit if browser storage is unavailable.
  }
  return new Set();
}

function saveClear(key) {
  cleared = new Set([...readProgress(), ...cleared, key]);
  try {
    localStorage.setItem(storageKey, JSON.stringify([...cleared]));
    return true;
  } catch {
    return false;
  } finally {
    renderProgress();
    for (const card of grid.children) {
      updateCardStatus(card);
    }
  }
}

function element(tag, content = '', className = '') {
  const node = document.createElement(tag);
  node.textContent = content;
  node.className = className;
  return node;
}

function button(text, className, action) {
  const control = element('button', text, className);
  control.type = 'button';
  control.addEventListener('click', action);
  return control;
}

function decorative(text, className) {
  const mark = element('span', text, className);
  mark.setAttribute('aria-hidden', 'true');
  return mark;
}

function renderProgress() {
  progressCount.textContent = cleared.size;
  progressButton.setAttribute('aria-label', `View progress, ${cleared.size} of ${validKeys.size} lessons cleared`);
}

function updateCardStatus(card) {
  const done = cleared.has(lessonKey(card.dataset.topic, level));
  card.querySelector('.topic-arrow').textContent = done ? '✓' : '↗';
  card.querySelector('.sr-only').textContent = done ? ' Lesson cleared.' : '';
}

function renderTopics() {
  grid.replaceChildren(...topics.map((topic, index) => {
    const lesson = topic.lessons[level];
    const card = button('', 'topic', () => showLesson(index));
    card.dataset.topic = index;
    card.style.setProperty('--tile', topic.colour);

    const top = element('span', '', 'topic-top');
    top.append(decorative(topic.icon, 'topic-icon'), decorative(String(index + 1).padStart(2, '0'), 'topic-no'));
    const bottom = element('span', '', 'topic-bottom');
    bottom.append(element('span', lesson.title), decorative('', 'topic-arrow'));
    card.append(top, element('span', topic.name, 'topic-title'), bottom, element('span', '', 'sr-only'));
    updateCardStatus(card);
    return card;
  }));
}

function show(label, title, content) {
  activityLabel.textContent = label;
  const heading = element('h2', title);
  heading.id = 'activity-title';
  heading.tabIndex = -1;
  body.replaceChildren(heading, ...content);
  if (!activity.open) {
    opener = document.activeElement;
    activity.showModal();
  }
  activity.scrollTop = 0;
  heading.focus({ preventScroll: true });
}

function showLesson(index) {
  const topic = topics[index];
  const stage = level;
  const lesson = topic.lessons[stage];
  const label = `${levels[stage]} · ${topic.name}`;
  const example = element('section', '', 'example');
  const steps = element('ol');
  steps.append(...lesson.steps.map(step => element('li', step)));
  example.append(element('h3', 'Worked example'), element('p', lesson.example));
  if (lesson.diagram) {
    const [file, alt, height] = lesson.diagram;
    const diagram = element('img', '', 'example-diagram');
    diagram.src = `assets/${file}`;
    diagram.alt = alt;
    diagram.width = 290;
    diagram.height = height;
    example.append(diagram);
  }
  example.append(steps);
  const practice = button('Try 3 questions ↗', 'button dark-button', () => {
    startPractice(label, lesson.title, lesson.questions, lessonKey(index, stage));
  });
  show(label, lesson.title, [element('p', lesson.idea), example, practice]);
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swap]] = [shuffled[swap], shuffled[index]];
  }
  return shuffled;
}

function startPractice(label, title, questions, key) {
  const answers = [];
  const total = questions.length;

  function finish() {
    const score = answers.filter(entry => entry.correct).length;
    const allCorrect = score === total;
    const saved = allCorrect && key && saveClear(key);
    let message = 'Read the working for any you missed, then give it another go.';
    if (allCorrect) {
      message = 'You got every question right.';
      if (key) message += saved ? ' Lesson cleared and saved on this device.' : ' Lesson cleared for this visit.';
    }

    const review = element('ol', '', 'review');
    for (const { question, correct } of answers) {
      const item = element('li');
      item.append(element('strong', correct ? 'Correct · ' : 'Review · '), question.prompt,
        element('div', question.working));
      review.append(item);
    }
    const actions = element('div', '', 'activity-actions');
    actions.append(
      button('Play again', 'button dark-button', () => {
        if (key) startPractice(label, title, questions, key);
        else launchChallenge();
      }),
      button('Back to the site', 'button secondary', () => activity.close())
    );
    show(label, `${score} out of ${total} correct`, [element('p', message), review, actions]);
  }

  function nextQuestion() {
    const index = answers.length;
    const question = questions[index];
    const meter = element('div', '', 'meter');
    meter.setAttribute('aria-hidden', 'true');
    const fill = element('span');
    fill.style.width = `${100 * (index + 1) / total}%`;
    meter.append(fill);
    const options = element('div', '', 'answers');
    options.setAttribute('role', 'group');
    options.setAttribute('aria-label', 'Answer choices');
    const hint = element('details');
    hint.append(element('summary', 'Show a hint'), element('p', question.hint));
    const feedback = element('div', '', 'feedback');
    feedback.setAttribute('role', 'status');
    const next = button(index + 1 === total ? 'See results ↗' : 'Next question →', 'button dark-button', () => {
      if (answers.length === total) finish();
      else nextQuestion();
    });
    next.hidden = true;

    for (const option of shuffle(question.options)) {
      const choice = button(option, 'answer', () => {
        const correct = option === question.answer;
        answers.push({ question, correct });
        for (const control of options.children) {
          control.disabled = true;
          if (control.textContent === question.answer) control.classList.add('correct');
        }
        if (!correct) choice.classList.add('incorrect');
        feedback.dataset.correct = String(correct);
        feedback.append(
          element('strong', correct ? 'Correct!' : `The answer is ${question.answer}.`),
          element('p', question.working)
        );
        hint.hidden = true;
        next.hidden = false;
        next.focus({ preventScroll: true });
        next.scrollIntoView({ block: 'nearest' });
      });
      options.append(choice);
    }
    const counter = element('p', `Question ${index + 1} of ${total} · ${title}`, 'question-meta');
    show(label, question.prompt, [counter, meter, options, hint, feedback, next]);
  }

  nextQuestion();
}

function launchChallenge() {
  const stage = Number(challengeLevel.value);
  const questions = shuffle(topics).slice(0, 5).map(topic =>
    shuffle(topic.lessons[stage].questions)[0]
  );
  startPractice(`${levels[stage]} · Mixed practice`, 'The Quick 5', questions);
}

filters.addEventListener('click', event => {
  const selected = event.target.closest('button[data-level]');
  if (!selected) return;
  level = Number(selected.dataset.level);
  for (const filter of filters.children) {
    filter.setAttribute('aria-pressed', String(filter === selected));
  }
  challengeLevel.value = String(level);
  renderTopics();
});

startChallenge.addEventListener('click', launchChallenge);

progressButton.addEventListener('click', () => {
  const list = element('ul', '', 'review');
  for (const [stage, label] of levels.entries()) {
    const count = topics.filter((_, index) => cleared.has(lessonKey(index, stage))).length;
    list.append(element('li', `${label} · ${count} of ${topics.length} cleared`));
  }
  show('YOUR MATHS CLUB', 'Your progress', [
    element('p', `${cleared.size} of ${validKeys.size} lessons cleared. Get all three practice questions right to clear a lesson.`),
    list,
    button('Keep learning', 'button dark-button', () => activity.close())
  ]);
});

activity.addEventListener('close', () => {
  opener?.focus();
});

window.addEventListener('storage', event => {
  if (event.key !== storageKey && event.key !== null) return;
  cleared = readProgress();
  renderProgress();
  for (const card of grid.children) updateCardStatus(card);
});

renderTopics();
renderProgress();
