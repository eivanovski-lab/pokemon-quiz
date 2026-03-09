// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRrNL2HsOqkwhvdd-tfgRLbmj2nRMQfJY",
  authDomain: "pokemon-quiz-38f4a.firebaseapp.com",
  projectId: "pokemon-quiz-38f4a",
  storageBucket: "pokemon-quiz-38f4a.firebasestorage.app",
  messagingSenderId: "177531040205",
  appId: "1:177531040205:web:9d617b9789a34fb202d484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


/* ========== POKÉMON DATA — 60 most popular (Easy + Hard shared) ========== */
const POKEMON_EASY = [
  { id: 1,   en: "Bulbasaur",   ru: "Бульбазавр" },
  { id: 4,   en: "Charmander",  ru: "Чармандер" },
  { id: 6,   en: "Charizard",   ru: "Чаризард" },
  { id: 7,   en: "Squirtle",    ru: "Сквиртл" },
  { id: 9,   en: "Blastoise",   ru: "Бластойз" },
  { id: 25,  en: "Pikachu",     ru: "Пикачу" },
  { id: 26,  en: "Raichu",      ru: "Райчу" },
  { id: 35,  en: "Clefairy",    ru: "Клефэйри" },
  { id: 39,  en: "Jigglypuff",  ru: "Джигглипафф" },
  { id: 52,  en: "Meowth",      ru: "Мяут" },
  { id: 54,  en: "Psyduck",     ru: "Псайдак" },
  { id: 59,  en: "Arcanine",    ru: "Арканайн" },
  { id: 63,  en: "Abra",        ru: "Абра" },
  { id: 65,  en: "Alakazam",    ru: "Алаказам" },
  { id: 68,  en: "Machamp",     ru: "Мачамп" },
  { id: 74,  en: "Geodude",     ru: "Джеодуд" },
  { id: 94,  en: "Gengar",      ru: "Генгар" },
  { id: 104, en: "Cubone",      ru: "Кьюбон" },
  { id: 130, en: "Gyarados",    ru: "Гаярдос" },
  { id: 131, en: "Lapras",      ru: "Лапрас" },
  { id: 132, en: "Ditto",       ru: "Дитто" },
  { id: 133, en: "Eevee",       ru: "Иви" },
  { id: 134, en: "Vaporeon",    ru: "Вапореон" },
  { id: 135, en: "Jolteon",     ru: "Джолтеон" },
  { id: 136, en: "Flareon",     ru: "Флареон" },
  { id: 143, en: "Snorlax",     ru: "Снорлакс" },
  { id: 144, en: "Articuno",    ru: "Артикуно" },
  { id: 145, en: "Zapdos",      ru: "Запдос" },
  { id: 146, en: "Moltres",     ru: "Молтрес" },
  { id: 147, en: "Dratini",     ru: "Дратини" },
  { id: 149, en: "Dragonite",   ru: "Драгонайт" },
  { id: 150, en: "Mewtwo",      ru: "Мьюту" },
  { id: 151, en: "Mew",         ru: "Мью" },
  { id: 152, en: "Chikorita",   ru: "Чикорита" },
  { id: 155, en: "Cyndaquil",   ru: "Синдаквил" },
  { id: 158, en: "Totodile",    ru: "Тотодайл" },
  { id: 175, en: "Togepi",      ru: "Тогепи" },
  { id: 196, en: "Espeon",      ru: "Эспеон" },
  { id: 197, en: "Umbreon",     ru: "Амбреон" },
  { id: 248, en: "Tyranitar",   ru: "Тиранитар" },
  { id: 249, en: "Lugia",       ru: "Лугия" },
  { id: 250, en: "Ho-Oh",       ru: "Хо-Ох" },
  { id: 251, en: "Celebi",      ru: "Селеби" },
  { id: 252, en: "Treecko",     ru: "Трико" },
  { id: 255, en: "Torchic",     ru: "Торчик" },
  { id: 258, en: "Mudkip",      ru: "Мадкип" },
  { id: 282, en: "Gardevoir",   ru: "Гардевуар" },
  { id: 384, en: "Rayquaza",    ru: "Рэйкуаза" },
  { id: 385, en: "Jirachi",     ru: "Джирачи" },
  { id: 393, en: "Piplup",      ru: "Пиплап" },
  { id: 448, en: "Lucario",     ru: "Лукарио" },
  { id: 445, en: "Garchomp",    ru: "Гарчомп" },
  { id: 471, en: "Glaceon",     ru: "Гласеон" },
  { id: 700, en: "Sylveon",     ru: "Сильвеон" },
  { id: 658, en: "Greninja",    ru: "Грениндзя" },
  { id: 778, en: "Mimikyu",     ru: "Мимикью" },
  { id: 722, en: "Rowlet",      ru: "Роулет" },
  { id: 725, en: "Litten",      ru: "Литтен" },
  { id: 728, en: "Popplio",     ru: "Попплио" },
  { id: 889, en: "Zamazenta",   ru: "Замазента" },
];

const POKEMON_HARD_EXTRA = [
  { id: 2,   en: "Ivysaur",      ru: "Ивизавр" },
  { id: 3,   en: "Venusaur",     ru: "Венузавр" },
  { id: 5,   en: "Charmeleon",   ru: "Чармелеон" },
  { id: 8,   en: "Wartortle",    ru: "Вартортл" },
  { id: 12,  en: "Butterfree",   ru: "Баттерфри" },
  { id: 18,  en: "Pidgeot",      ru: "Пиджеот" },
  { id: 24,  en: "Arbok",        ru: "Арбок" },
  { id: 31,  en: "Nidoqueen",    ru: "Нидоквин" },
  { id: 34,  en: "Nidoking",     ru: "Нидокинг" },
  { id: 36,  en: "Clefable",     ru: "Клефейбл" },
  { id: 38,  en: "Ninetales",    ru: "Найнтейлс" },
  { id: 45,  en: "Vileplume",    ru: "Вайлплюм" },
  { id: 55,  en: "Golduck",      ru: "Голдак" },
  { id: 57,  en: "Primeape",     ru: "Праймэйп" },
  { id: 62,  en: "Poliwrath",    ru: "Поливрат" },
  { id: 66,  en: "Machop",       ru: "Мачоп" },
  { id: 71,  en: "Victreebel",   ru: "Виктрибел" },
  { id: 76,  en: "Golem",        ru: "Голем" },
  { id: 78,  en: "Rapidash",     ru: "Рапидаш" },
  { id: 80,  en: "Slowbro",      ru: "Слоубро" },
  { id: 89,  en: "Muk",          ru: "Мак" },
  { id: 91,  en: "Cloyster",     ru: "Клойстер" },
  { id: 95,  en: "Onix",         ru: "Оникс" },
  { id: 99,  en: "Kingler",      ru: "Кинглер" },
  { id: 103, en: "Exeggutor",    ru: "Экзеггутор" },
  { id: 106, en: "Hitmonlee",    ru: "Хитмонли" },
  { id: 110, en: "Weezing",      ru: "Визинг" },
  { id: 112, en: "Rhydon",       ru: "Райдон" },
  { id: 115, en: "Kangaskhan",   ru: "Кангасхан" },
  { id: 121, en: "Starmie",      ru: "Старми" },
  { id: 123, en: "Scyther",      ru: "Сайтер" },
  { id: 125, en: "Electabuzz",   ru: "Электабазз" },
  { id: 126, en: "Magmar",       ru: "Магмар" },
  { id: 127, en: "Pinsir",       ru: "Пинсир" },
  { id: 128, en: "Tauros",       ru: "Таурос" },
  { id: 137, en: "Porygon",      ru: "Поригон" },
  { id: 139, en: "Omastar",      ru: "Омастар" },
  { id: 141, en: "Kabutops",     ru: "Кабутопс" },
  { id: 142, en: "Aerodactyl",   ru: "Аэродактиль" },
  { id: 148, en: "Dragonair",    ru: "Драгонэйр" },
  { id: 157, en: "Typhlosion",   ru: "Тайфложн" },
  { id: 160, en: "Feraligatr",   ru: "Фералигатр" },
  { id: 169, en: "Crobat",       ru: "Кробат" },
  { id: 181, en: "Ampharos",     ru: "Амфарос" },
  { id: 212, en: "Scizor",       ru: "Сайзор" },
  { id: 214, en: "Heracross",    ru: "Геракросс" },
  { id: 229, en: "Houndoom",     ru: "Хаундум" },
  { id: 230, en: "Kingdra",      ru: "Кингдра" },
  { id: 243, en: "Raikou",       ru: "Райку" },
  { id: 244, en: "Entei",        ru: "Энтей" },
  { id: 245, en: "Suicune",      ru: "Суикун" },
  { id: 254, en: "Sceptile",     ru: "Скептайл" },
  { id: 257, en: "Blaziken",     ru: "Блэйзикен" },
  { id: 260, en: "Swampert",     ru: "Свамперт" },
  { id: 306, en: "Aggron",       ru: "Аггрон" },
  { id: 330, en: "Flygon",       ru: "Флайгон" },
  { id: 373, en: "Salamence",    ru: "Саламенс" },
  { id: 376, en: "Metagross",    ru: "Метагросс" },
  { id: 383, en: "Groudon",      ru: "Граудон" },
  { id: 382, en: "Kyogre",       ru: "Кайогр" },
];

const POKEMON_ALL = [...POKEMON_EASY, ...POKEMON_HARD_EXTRA];

const CUSTOM_POKEMON = [
  { id: "custom-1", en: "Charmander",  ru: "Чармандер",  image: "./assets/custom-1.jpg" },
  { id: "custom-2", en: "Misty",       ru: "Мисти",      image: "./assets/custom-2.jpg" },
  { id: "custom-3", en: "Onyx",        ru: "Оникс",      image: "./assets/custom-3.jpg" },
  { id: "custom-4", en: "Squirtle",    ru: "Сквиртл",    image: "./assets/custom-4.jpg" },
  { id: "custom-5", en: "Pikachu",     ru: "Пикачу",     image: "./assets/custom-5.jpg" },
];

function getPokemonImageUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

/* ========== LOCALSTORAGE LEADERBOARD (GitHub Pages — no backend) ========== */
function getStorageKey(diff) { return `pokemon_quiz_leaderboard_${diff}`; }

async function fetchLeaderboard(mode) {
  try {
    const snapshot = await db.collection('leaderboard')
      .where('mode', '==', mode)
      .orderBy('score', 'desc')
      .orderBy('timestamp', 'asc')
      .limit(20)
      .get();
    
    const entries = [];
    snapshot.forEach(doc => entries.push(doc.data()));
    return entries;
  } catch (e) {
    console.error('Firestore read error:', e);
    return [];
  }
}


async function postScore(name, score, mode) {
  try {
    await db.collection('leaderboard').add({
      name: name,
      score: score,
      mode: mode,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (e) {
    console.error('Firestore write error:', e);
  }
}


let audioCtx = null;
function ensureAudio() {
  if (!audioCtx) audioCtx = new AudioContext();
  if (audioCtx.state === "suspended") audioCtx.resume();
}
function playSound(freq, duration, type) {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type || "square";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch { /* ignore */ }
}
function playCorrectSound() {
  playSound(523.25, 0.1, "sine");
  setTimeout(() => playSound(659.25, 0.1, "sine"), 100);
  setTimeout(() => playSound(783.99, 0.15, "sine"), 200);
}
function playWrongSound() {
  playSound(200, 0.2, "sawtooth");
  setTimeout(() => playSound(150, 0.3, "sawtooth"), 150);
}
function playClickSound() { playSound(800, 0.05, "sine"); }

let currentQuestion = 0;
let score = 0;
let questions = [];
let answered = false;
let playerName = "";
let difficulty = "easy";
let autoAdvanceTimer = null;
let recordsTabActive = "easy";
const TOTAL_QUESTIONS = 10;
const AUTO_ADVANCE_DELAY = 7000;

function getNumChoices() { return difficulty === "easy" ? 3 : 5; }
function getPokemonPool() { return difficulty === "easy" ? POKEMON_EASY : POKEMON_ALL; }

function selectDifficulty(diff) {
  difficulty = diff;
  document.querySelectorAll(".diff-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.diff === diff);
  });
  ensureAudio();
  playClickSound();
}

function showScreen(screenId) {
  clearAutoAdvance();
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const screen = document.getElementById(screenId);
  if (screen) screen.classList.add("active");
  if (screenId === "screen-records") {
    recordsTabActive = difficulty;
    updateRecordsTabs();
    loadRecords(recordsTabActive);
  }
}

function clearAutoAdvance() {
  if (autoAdvanceTimer) { clearTimeout(autoAdvanceTimer); autoAdvanceTimer = null; }
}
function startAutoAdvance() {
  clearAutoAdvance();
  autoAdvanceTimer = setTimeout(() => { autoAdvanceTimer = null; nextQuestion(); }, AUTO_ADVANCE_DELAY);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateQuestions() {
  const pool = getPokemonPool();
  const numChoices = getNumChoices();
  const shuffled = shuffle(pool);
  const selected = shuffled.slice(0, TOTAL_QUESTIONS - 1);

  const normalQuestions = selected.map(correct => {
    const others = pool.filter(p => p.id !== correct.id);
    const wrongChoices = shuffle(others).slice(0, numChoices - 1);
    const allChoices = shuffle([correct, ...wrongChoices]);
    return { correct, choices: allChoices, imageUrl: getPokemonImageUrl(correct.id), isCustom: false };
  });

  const customPokemon = CUSTOM_POKEMON[Math.floor(Math.random() * CUSTOM_POKEMON.length)];
  const customCorrect = { id: customPokemon.id, en: customPokemon.en, ru: customPokemon.ru };
  const wrongPool = pool.filter(p =>
    p.en.toLowerCase() !== customCorrect.en.toLowerCase() &&
    p.ru.toLowerCase() !== customCorrect.ru.toLowerCase()
  );
  const wrongChoices = shuffle(wrongPool).slice(0, numChoices - 1);
  const customChoices = shuffle([customCorrect, ...wrongChoices]);
  normalQuestions.push({ correct: customCorrect, choices: customChoices, imageUrl: customPokemon.image, isCustom: true });

  return normalQuestions;
}

function startGame() {
  ensureAudio();
  playClickSound();
  const nameInput = document.getElementById("player-name");
  playerName = nameInput.value.trim();
  currentQuestion = 0;
  score = 0;
  answered = false;
  questions = generateQuestions();
  showScreen("screen-quiz");
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQuestion];
  answered = false;
  clearAutoAdvance();

  document.getElementById("question-counter").textContent = `Вопрос ${currentQuestion + 1} / ${TOTAL_QUESTIONS}`;
  document.getElementById("score-display").textContent = `Счёт: ${score}`;
  document.getElementById("progress-fill").style.width = `${((currentQuestion + 1) / TOTAL_QUESTIONS) * 100}%`;

  const img = document.getElementById("pokemon-image");
  const loader = document.getElementById("image-loader");
  img.style.opacity = "0";
  loader.textContent = "Загрузка...";
  loader.classList.remove("hidden");

  img.className = "pokemon-image";
  if (q.isCustom) { img.classList.add("custom-photo"); } else { img.classList.add("pixelated"); }

  img.onload = () => { img.style.opacity = "1"; loader.classList.add("hidden"); };
  img.onerror = () => {
    if (!q.isCustom) {
      img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${q.correct.id}.png`;
    } else { loader.textContent = "?"; loader.classList.remove("hidden"); }
  };
  img.src = q.imageUrl;

  const choicesEl = document.getElementById("choices");
  const letters = ["А", "Б", "В", "Г", "Д"];
  choicesEl.innerHTML = q.choices.map((p, i) => `
    <button class="choice-btn" onclick="selectAnswer(${i})" data-index="${i}">
      <span class="choice-letter">${letters[i]}</span>
      <span class="choice-text">
        <span class="name-ru">${p.ru}</span>
        <span class="name-en">${p.en}</span>
      </span>
    </button>
  `).join("");

  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("btn-next").classList.add("hidden");
  const oldTimer = document.querySelector(".auto-timer");
  if (oldTimer) oldTimer.remove();
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;
  ensureAudio();

  const q = questions[currentQuestion];
  const selected = q.choices[index];
  const isCorrect = selected.id === q.correct.id;
  const buttons = document.querySelectorAll(".choice-btn");

  buttons.forEach((btn, i) => {
    btn.classList.add("disabled");
    if (q.choices[i].id === q.correct.id) btn.classList.add("correct");
    if (i === index && !isCorrect) { btn.classList.add("wrong"); btn.classList.add("shake"); }
  });

  const feedback = document.getElementById("feedback");
  feedback.classList.remove("hidden", "correct", "wrong");
  if (isCorrect) {
    score++;
    feedback.classList.add("correct");
    feedback.textContent = "Правильно! 🎉";
    playCorrectSound();
  } else {
    feedback.classList.add("wrong");
    feedback.textContent = `Неправильно! Это ${q.correct.ru} (${q.correct.en})`;
    playWrongSound();
  }

  document.getElementById("score-display").textContent = `Счёт: ${score}`;
  const nextBtn = document.getElementById("btn-next");
  nextBtn.textContent = currentQuestion < TOTAL_QUESTIONS - 1 ? "Следующий вопрос" : "Показать результат";
  nextBtn.classList.remove("hidden");

  const timerBar = document.createElement("div");
  timerBar.className = "auto-timer";
  timerBar.innerHTML = '<div class="auto-timer-fill"></div>';
  nextBtn.parentNode.insertBefore(timerBar, nextBtn.nextSibling);
  startAutoAdvance();
}

function nextQuestion() {
  ensureAudio();
  playClickSound();
  clearAutoAdvance();
  const timerBar = document.querySelector(".auto-timer");
  if (timerBar) timerBar.remove();
  currentQuestion++;
  if (currentQuestion >= TOTAL_QUESTIONS) { showResultScreen(); } else { renderQuestion(); }
}

function getResultEmoji(s) {
  if (s === TOTAL_QUESTIONS) return "🏆";
  if (s >= 8) return "⭐";
  if (s >= 6) return "👍";
  if (s >= 4) return "🙂";
  return "💪";
}
function getResultMessage(s) {
  if (s === TOTAL_QUESTIONS) return "Идеальный результат! Ты настоящий мастер покемонов!";
  if (s >= 8) return "Отлично! Ты очень хорошо знаешь покемонов!";
  if (s >= 6) return "Хороший результат! Продолжай тренироваться!";
  if (s >= 4) return "Неплохо! Ещё немного практики и будет отлично!";
  return "Не сдавайся! Попробуй ещё раз!";
}

async function showResultScreen() {
  if (playerName) {
    await postScore(playerName, score, TOTAL_QUESTIONS, difficulty);
  }
  const diffLabel = difficulty === "easy" ? "⭐ Простой" : "🔥 Сложный";
  const nameDisplay = playerName ? escapeHtml(playerName) : "Аноним";
  const savedNote = playerName ? "" : '<div style="font-size:13px;color:var(--color-text-faint);margin-top:8px;">Результат не сохранён (имя не указано)</div>';

  document.getElementById("result-summary").innerHTML = `
    <div style="font-size:56px;margin-bottom:8px;">${getResultEmoji(score)}</div>
    <div style="font-size:16px;color:var(--color-text-muted);font-weight:700;margin-bottom:2px;">${nameDisplay}</div>
    <div style="font-size:13px;color:var(--color-text-faint);font-weight:600;margin-bottom:8px;">${diffLabel}</div>
    <div style="font-size:28px;font-weight:900;color:var(--color-accent);">${score} / ${TOTAL_QUESTIONS}</div>
    <div style="font-size:15px;color:var(--color-text-muted);font-weight:600;margin-top:4px;">${getResultMessage(score)}</div>
    ${savedNote}
  `;
  showScreen("screen-result");
}

function switchRecordsTab(tab) {
  recordsTabActive = tab;
  updateRecordsTabs();
  loadRecords(tab);
  ensureAudio();
  playClickSound();
}

function updateRecordsTabs() {
  document.querySelectorAll(".records-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === recordsTabActive);
  });
}

async function loadRecords(diff) {
  const tbody = document.getElementById("records-body");
  const noRecords = document.getElementById("no-records");
  tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;padding:20px;color:var(--color-text-muted)">Загрузка...</td></tr>';
  noRecords.classList.add("hidden");

  const data = await fetchLeaderboard(diff || recordsTabActive);
  if (data.length === 0) { tbody.innerHTML = ""; noRecords.classList.remove("hidden"); return; }

  noRecords.classList.add("hidden");
  tbody.innerHTML = data.map((entry, i) => {
    const rank = i + 1;
    let rankClass = "rank-cell";
    if (rank === 1) rankClass += " gold";
    else if (rank === 2) rankClass += " silver";
    else if (rank === 3) rankClass += " bronze";
    let medalPrefix = "";
    if (rank === 1) medalPrefix = "🥇 ";
    else if (rank === 2) medalPrefix = "🥈 ";
    else if (rank === 3) medalPrefix = "🥉 ";
    const dateStr = entry.created_at ? new Date(entry.created_at + "Z").toLocaleDateString("ru-RU", { day: "numeric", month: "short" }) : "";
    return `<tr>
      <td class="${rankClass}">${medalPrefix}${rank}</td>
      <td>${escapeHtml(entry.name)}</td>
      <td class="score-cell">${entry.score} / ${entry.total}</td>
      <td class="date-cell">${dateStr}</td>
    </tr>`;
  }).join("");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

document.addEventListener("keydown", (e) => {
  const screen = document.querySelector(".screen.active");
  if (!screen) return;
  if (screen.id === "screen-quiz" && !answered) {
    const numChoices = getNumChoices();
    const keyMap = { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 };
    if (keyMap[e.key] !== undefined && keyMap[e.key] < numChoices) selectAnswer(keyMap[e.key]);
  }
  if (screen.id === "screen-quiz" && answered && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); nextQuestion(); }
  if (screen.id === "screen-title" && e.key === "Enter") startGame();
});

document.addEventListener("click", () => ensureAudio(), { once: true });

/* ========== SERVICE WORKER REGISTRATION ========== */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then(() => {
      /* SW registered */
    }).catch(() => {
      /* SW registration failed — game still works without it */
    });
  });
}
