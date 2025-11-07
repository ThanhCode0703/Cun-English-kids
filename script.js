let currentTopic = null;
let vocab = [],
  quiz = [];
let currentIndex = 0,
  cardFace = 0;
let score = 0,
  currentQuestion = 0;
let audioEnabled = true;
let contextQueue = [];
let contextIndex = 0;
let contextPool = []; // Pool of 20 context questions for quiz
let quizStatus = []; // 'correct' | 'wrong' | undefined
let quizReview = [];
let leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
let dailyQuizzes = parseInt(localStorage.getItem("dailyQuizzes") || "0");
let lastResetDate =
  localStorage.getItem("lastResetDate") || new Date().toDateString();

// Utility: unique by key
function uniqueBy(array, keyFn) {
  const seen = new Set();
  const result = [];
  for (const item of array || []) {
    const key = keyFn(item);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }
  return result;
}

function showPage(id) {
  document
    .querySelectorAll("section")
    .forEach((s) => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  // Update active nav item
  document
    .querySelectorAll(".duo-nav-item")
    .forEach((item) => item.classList.remove("active"));
  if (id === "menu")
    document.getElementById("nav-learn")?.classList.add("active");
  if (id === "topics") {
    document.getElementById("nav-topics")?.classList.add("active");
    loadTopics();
  }
  if (id === "result") {
    document.getElementById("nav-leaderboard")?.classList.add("active");
    renderLeaderboard();
  }
  if (id === "flashcards") loadFlashcards();
  if (id === "context") loadContext();
  if (id === "quiz") startQuiz();
}

// Background images for each topic
const topicBackgrounds = {
  Family:
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
  Animals:
    "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400&h=300&fit=crop",
  Food: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
  Weather:
    "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
  School:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
  Jobs: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
  Sports:
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop",
  Clothes:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
  Transport:
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
  Fruits:
    "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop",
};

function loadTopics() {
  const list = document.getElementById("topic-list");
  list.innerHTML = "";
  for (const name in topics) {
    const t = topics[name];
    const bgImage = topicBackgrounds[name] || "";
    const colorClass = t.color || "";
    list.innerHTML += `
      <div onclick="selectTopic('${name}')" class="duo-topic-item" data-topic="${name}" style="background-image: url('${bgImage}');">
        <div class="duo-topic-overlay"></div>
        <div class="duo-topic-content">
          <i class="fa-solid ${t.icon}"></i>
          <p>${name}</p>
        </div>
      </div>`;
  }
}

function selectTopic(name) {
  currentTopic = name;
  vocab = topics[name].vocabulary;
  quiz = topics[name].quiz;
  // Reset context queues when changing topic
  contextQueue = [];
  contextPool = [];
  contextIndex = 0;

  // Pre-build contextPool (20 questions) for quiz
  if (vocab && vocab.length > 0) {
    const shuffledVocab = [...vocab].sort(() => Math.random() - 0.5);
    const selectedVocab = shuffledVocab.slice(
      0,
      Math.min(20, shuffledVocab.length)
    );

    contextPool = selectedVocab.map((w) => {
      const templates = [
        `I have a <b>____</b> in my bag. (${w.meaning})`,
        `He likes to play with a <b>____</b>. (${w.meaning})`,
        `Do you know how to say "${w.meaning}" in English? It's <b>____</b>.`,
        `We can see the <b>____</b> every morning. (${w.meaning})`,
        `My favorite word today is <b>____</b>. (${w.meaning})`,
      ];
      return {
        sentence: templates[Math.floor(Math.random() * templates.length)],
        answer: w.word,
        phonetic: w.phonetic,
        audio: w.audio,
        meaning: w.meaning,
      };
    });
  }

  showPage("flashcards");
}

function loadFlashcards() {
  currentIndex = 0;
  cardFace = 0;
  const title = document.getElementById("topic-title");
  if (title) title.innerText = `📘 Học Từ Vựng – ${currentTopic}`;
  updateCard();
}

function updateCard() {
  const card = vocab[currentIndex];
  const content = document.getElementById("card-content");
  const img = document.getElementById("card-img");
  if (cardFace === 0) {
    content.style.fontSize = "48px";
    content.style.fontWeight = "700";
    content.style.color = "var(--duo-dark)";
    content.innerText = card.word;
    playAudio(card.audio);
    img.classList.remove("hidden");
    img.src = card.img;
  } else if (cardFace === 1) {
    content.style.fontSize = "36px";
    content.style.fontStyle = "italic";
    content.style.color = "var(--duo-dark)";
    content.innerText = card.phonetic;
    playAudio(card.audio);
    img.classList.add("hidden");
  } else {
    content.style.fontSize = "36px";
    content.style.fontWeight = "600";
    content.style.color = "var(--duo-dark)";
    content.innerText = card.meaning;
    img.classList.add("hidden");
  }
}
function setFace(face) {
  cardFace = Math.max(0, Math.min(2, face));
  updateCard();
}
function prevWord() {
  currentIndex = (currentIndex - 1 + vocab.length) % vocab.length;
  cardFace = 0;
  updateCard();
}
function nextWord() {
  currentIndex = (currentIndex + 1) % vocab.length;
  cardFace = 0;
  updateCard();
}
function playAudio(url) {
  if (!audioEnabled) return;
  const a = document.getElementById("audio");
  if (!a) return;
  a.src = url;
  a.play().catch(() => {});
}

// Audio toggle
window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle-audio");
  if (toggle) {
    audioEnabled = toggle.checked;
    toggle.addEventListener("change", () => (audioEnabled = toggle.checked));
  }

  // Initialize daily quests
  checkDailyReset();
  updateDailyQuest();

  // Handle Enter key in name input
  const nameInput = document.getElementById("player-name-input");
  if (nameInput) {
    nameInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        savePlayerName();
      }
    });
  }
});

// Daily Quest Functions
function checkDailyReset() {
  const today = new Date().toDateString();
  if (lastResetDate !== today) {
    dailyQuizzes = 0;
    lastResetDate = today;
    localStorage.setItem("dailyQuizzes", "0");
    localStorage.setItem("lastResetDate", today);
  }
}

function addDailyQuiz() {
  checkDailyReset();
  dailyQuizzes += 1;
  localStorage.setItem("dailyQuizzes", dailyQuizzes.toString());
  updateDailyQuest();
}

function updateDailyQuest() {
  const questBar = document.getElementById("quest-progress-bar");
  const questText = document.getElementById("quest-progress-text");
  const targetQuizzes = 10;
  const progress = Math.min((dailyQuizzes / targetQuizzes) * 100, 100);

  if (questBar) {
    questBar.style.width = progress + "%";
  }
  if (questText) {
    questText.textContent = `${dailyQuizzes} / ${targetQuizzes}`;
  }
}

function startQuiz() {
  score = 0;
  currentQuestion = 0;

  // Use contextPool (20 questions) to generate quiz (10 questions)
  if (contextPool.length > 0) {
    // Shuffle and take 10 random questions from contextPool (20 questions)
    const shuffledPool = [...contextPool].sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffledPool.slice(
      0,
      Math.min(10, shuffledPool.length)
    );

    // Build quiz from selected questions - ensure no duplicates
    const built = [];
    const usedWords = new Set(); // Track used words to avoid duplicates

    for (const item of selectedQuestions) {
      // Skip if word already used
      if (usedWords.has(item.answer.toLowerCase())) {
        continue;
      }
      usedWords.add(item.answer.toLowerCase());

      // Get all meanings from contextPool for options
      const allMeanings = contextPool.map((c) => c.meaning);
      const opts = new Set([item.meaning]);

      // Add 3 more random meanings (different from correct answer)
      while (opts.size < 4 && allMeanings.length > 1) {
        const randomMeaning =
          allMeanings[Math.floor(Math.random() * allMeanings.length)];
        if (randomMeaning !== item.meaning) {
          opts.add(randomMeaning);
        }
      }

      const options = Array.from(opts).sort(() => Math.random() - 0.5);
      built.push({
        q: `Nghĩa của từ "${item.answer}" là?`,
        options,
        correct: item.meaning,
      });

      // Stop at 10 questions
      if (built.length >= 10) break;
    }

    quiz = built.sort(() => Math.random() - 0.5);
  } else if (!Array.isArray(quiz) || quiz.length === 0) {
    // Fallback: Build from vocab if contextPool is empty
    const pool = Array.isArray(vocab)
      ? uniqueBy(vocab, (w) => `${w.word}|${w.meaning}`)
      : [];
    const maxQ = Math.min(10, pool.length);
    const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
    const built = [];
    for (let i = 0; i < maxQ; i++) {
      const w = shuffledPool[i];
      if (!w) continue;
      const opts = new Set([w.meaning]);
      while (opts.size < 4 && pool.length > 1) {
        const r = pool[Math.floor(Math.random() * pool.length)].meaning;
        opts.add(r);
      }
      const options = Array.from(opts).sort(() => Math.random() - 0.5);
      built.push({
        q: `Nghĩa của từ "${w.word}" là?`,
        options,
        correct: w.meaning,
      });
    }
    quiz = built.sort(() => Math.random() - 0.5);
  } else {
    // Use provided quiz, dedupe and limit to 10
    const dedup = uniqueBy(quiz, (q) => `${q.q}|${q.correct}`);
    const shuffled = dedup.sort(() => Math.random() - 0.5).slice(0, 10);
    quiz = shuffled.map((q) => ({
      q: q.q,
      correct: q.correct,
      options: [...q.options].sort(() => Math.random() - 0.5),
    }));
  }

  quizStatus = new Array(quiz.length);
  renderQuizNav();
  quizReview = quiz.map((q) => ({
    q: q.q,
    correct: q.correct,
    options: q.options,
    chosen: null,
  }));
  showQuestion();
}
function showQuestion() {
  if (!quiz || quiz.length === 0) {
    document.getElementById(
      "quiz-area"
    ).innerHTML = `<p style="color: var(--duo-red); text-align: center; padding: 20px;">Không có câu hỏi trắc nghiệm cho chủ đề này.</p>`;
    return;
  }
  const q = quiz[currentQuestion];
  document.getElementById("quiz-bar").style.width =
    (currentQuestion / quiz.length) * 100 + "%";
  const escapedOptions = q.options.map((o) =>
    o.replace(/'/g, "\\'").replace(/"/g, "&quot;")
  );
  document.getElementById("quiz-area").innerHTML = `
    <div id="quiz-message" style="display: none; margin-bottom: 16px; padding: 12px; border-radius: 12px; text-align: center; font-weight: 600;"></div>
    <h3>${q.q}</h3>
    <div class="grid grid-cols-2 gap-3">
      ${escapedOptions
        .map(
          (o) =>
            `<button class="option" onclick="chooseAnswer('${o.replace(
              /'/g,
              "\\'"
            )}')">${o}</button>`
        )
        .join("")}
    </div>`;
  renderQuizNav();
}
// Câu chúc mừng khi đúng
const encouragementMessages = [
  "Tuyệt vời! Bạn đang làm rất tốt! 🌟",
  "Xuất sắc! Tiếp tục phát huy nhé! 💪",
  "Giỏi lắm! Bạn học rất nhanh! 🎉",
  "Hoàn hảo! Cún rất tự hào về bạn! 🐶",
  "Tuyệt đỉnh! Bạn đang tiến bộ rất nhiều! ⭐",
  "Cực kỳ tốt! Hãy tiếp tục như vậy! 🚀",
  "Rất ấn tượng! Bạn thật thông minh! 🧠",
  "Tuyệt vời! Bạn đã nắm vững rồi! ✅",
];

// Câu động viên khi sai
const motivationMessages = [
  "Không sao đâu! Hãy thử lại lần sau nhé! 💪",
  "Đừng nản lòng! Mỗi lần sai là một lần học hỏi! 📚",
  "Cố gắng thêm một chút nữa nhé! Bạn làm được mà! 🌱",
  "Không sao cả! Học tập là một hành trình dài! 🛤️",
  "Đừng lo! Bạn sẽ làm tốt hơn ở câu tiếp theo! ⭐",
  "Hãy tiếp tục cố gắng! Thành công đang chờ bạn! 🎯",
  "Mỗi lỗi sai giúp bạn học được điều mới! 📖",
  "Bạn đang tiến bộ rồi! Hãy kiên trì nhé! 🌟",
];

function chooseAnswer(ans) {
  const correct = quiz[currentQuestion].correct;
  const btns = document.querySelectorAll(".option");
  const messageEl = document.getElementById("quiz-message");
  const isCorrect = ans === correct;

  btns.forEach((b) => {
    if (b.innerText === correct) {
      b.style.backgroundColor = "var(--duo-green)";
      b.style.borderColor = "var(--duo-green)";
      b.style.color = "white";
    } else if (b.innerText === ans) {
      b.style.backgroundColor = "var(--duo-red)";
      b.style.borderColor = "var(--duo-red)";
      b.style.color = "white";
    }
    b.disabled = true;
  });

  // Hiển thị câu động viên/chúc mừng
  if (messageEl) {
    if (isCorrect) {
      const randomMsg =
        encouragementMessages[
          Math.floor(Math.random() * encouragementMessages.length)
        ];
      messageEl.style.display = "block";
      messageEl.style.backgroundColor = "rgba(88, 204, 2, 0.2)";
      messageEl.style.border = "2px solid var(--duo-green)";
      messageEl.style.color = "var(--duo-green)";
      messageEl.textContent = randomMsg;
    } else {
      const randomMsg =
        motivationMessages[
          Math.floor(Math.random() * motivationMessages.length)
        ];
      messageEl.style.display = "block";
      messageEl.style.backgroundColor = "rgba(255, 75, 75, 0.2)";
      messageEl.style.border = "2px solid var(--duo-red)";
      messageEl.style.color = "var(--duo-red)";
      messageEl.textContent = randomMsg;
    }
  }

  if (isCorrect) {
    score++;
    const soundCorrect = document.getElementById("sound-correct");
    if (soundCorrect) soundCorrect.play().catch(() => {});
  } else {
    const soundWrong = document.getElementById("sound-wrong");
    if (soundWrong) soundWrong.play().catch(() => {});
  }
  quizStatus[currentQuestion] = isCorrect ? "correct" : "wrong";
  if (quizReview[currentQuestion]) quizReview[currentQuestion].chosen = ans;
  renderQuizNav();
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quiz.length) showQuestion();
    else showResult();
  }, 2000); // Tăng thời gian để người dùng đọc câu động viên
}
function showResult() {
  document.getElementById("quiz-bar").style.width = "100%";
  const scoreEl = document.getElementById("score");
  if (scoreEl) {
    scoreEl.innerHTML = `<span style="color: var(--duo-green); font-size: 28px; font-weight: 600;">🎉 Bạn đạt ${score}/${quiz.length} điểm!</span>`;
  }
  // Add 1 quiz completion for daily quest
  addDailyQuiz();
  // Show name input modal
  showNameModal();
}

function showNameModal() {
  const modal = document.getElementById("name-modal");
  if (modal) {
    modal.classList.remove("hidden");
    const input = document.getElementById("player-name-input");
    if (input) {
      input.value = "";
      input.focus();
    }
  }
}

function savePlayerName() {
  const input = document.getElementById("player-name-input");
  const playerName = (input?.value || "").trim() || "Người chơi";

  // Update leaderboard with player name and score
  updateLeaderboard(playerName, score);

  // Hide modal
  const modal = document.getElementById("name-modal");
  if (modal) {
    modal.classList.add("hidden");
  }

  // Show result page
  showPage("result");
}

function renderQuizNav() {
  const nav = document.getElementById("quiz-nav");
  if (!nav || !quiz) return;
  nav.innerHTML = quiz
    .map((_, i) => {
      const status = quizStatus[i];
      const cls = status
        ? status === "correct"
          ? "correct"
          : "wrong"
        : i === currentQuestion
        ? "active"
        : "";
      return `<span class="qdot ${cls}">${i + 1}</span>`;
    })
    .join(" ");
}

// Review after quiz
function showReview() {
  showPage("review");
  renderReview();
}

function renderReview() {
  const list = document.getElementById("review-list");
  if (!list) return;
  list.innerHTML = quizReview
    .map((item, i) => {
      const isCorrect = item.chosen === item.correct;
      const chosen = item.chosen ? item.chosen : "(chưa chọn)";
      const chosenColor = isCorrect ? "var(--duo-green)" : "var(--duo-red)";
      return `
        <div style="background: var(--duo-dark-lighter); border: 2px solid var(--duo-border); border-radius: 16px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
            <p style="font-weight: 600; color: var(--duo-text); margin: 0;">${
              i + 1
            }. ${item.q}</p>
            <span class="qdot ${isCorrect ? "correct" : "wrong"}">${
        i + 1
      }</span>
          </div>
          <p style="margin: 8px 0; color: var(--duo-text-secondary);">Chọn: <span style="color: ${chosenColor}; font-weight: 600;">${chosen}</span></p>
          <p style="margin: 8px 0; color: var(--duo-text-secondary);">Đáp án đúng: <span style="color: var(--duo-green); font-weight: 600;">${
            item.correct
          }</span></p>
        </div>
      `;
    })
    .join("");
}

// ==========================
// Context Mode (unique names to avoid collisions)
// ==========================
function loadContext() {
  // Build queue from contextPool if available, otherwise create new
  if (!contextQueue.length) {
    if (contextPool.length > 0) {
      // Use existing contextPool
      contextQueue = [...contextPool];
    } else {
      // Fallback: create from vocab if contextPool is empty
      const shuffledVocab = [...vocab].sort(() => Math.random() - 0.5);
      const selectedVocab = shuffledVocab.slice(
        0,
        Math.min(20, shuffledVocab.length)
      );

      contextQueue = selectedVocab.map((w) => {
        const templates = [
          `I have a <b>____</b> in my bag. (${w.meaning})`,
          `He likes to play with a <b>____</b>. (${w.meaning})`,
          `Do you know how to say "${w.meaning}" in English? It's <b>____</b>.`,
          `We can see the <b>____</b> every morning. (${w.meaning})`,
          `My favorite word today is <b>____</b>. (${w.meaning})`,
        ];
        return {
          sentence: templates[Math.floor(Math.random() * templates.length)],
          answer: w.word,
          phonetic: w.phonetic,
          audio: w.audio,
          meaning: w.meaning,
        };
      });

      // Store the pool for quiz (20 questions)
      contextPool = [...contextQueue];
    }
  }
  contextIndex = Math.min(contextIndex, contextQueue.length - 1);
  renderContext();
}

function renderContext() {
  const area = document.getElementById("context-area");
  if (!area) return;
  const q = contextQueue[contextIndex];
  area.innerHTML = `
    <div style="text-align: left;">
      <p style="font-size: 20px; line-height: 1.6; color: var(--duo-text); margin-bottom: 20px;">${
        q.sentence
      }</p>
      <input id="context-input" type="text" style="background: var(--duo-dark); border: 2px solid var(--duo-border); border-radius: 12px; padding: 14px 20px; font-size: 16px; color: var(--duo-text); width: 100%; margin-bottom: 16px;" placeholder="Nhập từ tiếng Anh..." />
      <button class="duo-btn-primary" onclick="contextCheck()" style="width: 100%;">Kiểm tra</button>
      <div id="context-result" style="margin-top: 16px; font-size: 16px;"></div>
      <div style="margin-top: 16px; font-size: 14px; color: var(--duo-text-secondary);">Câu ${
        contextIndex + 1
      }/${contextQueue.length}</div>
    </div>
  `;
}

function contextCheck() {
  const q = contextQueue[contextIndex];
  const input = document.getElementById("context-input");
  const res = document.getElementById("context-result");
  if (!input || !res) return;
  const user = (input.value || "").trim().toLowerCase();
  const correct = q.answer.toLowerCase();
  if (user === correct) {
    res.innerHTML = `<span style="color: var(--duo-green); font-weight: 600;">✅ Đúng rồi! <b>${q.answer}</b> (${q.phonetic})</span>`;
    playAudio(q.audio);
    const ok = document.getElementById("sound-correct");
    if (ok) ok.play().catch(() => {});
  } else {
    res.innerHTML = `<span style="color: var(--duo-red); font-weight: 600;">❌ Sai rồi! Đáp án: <b>${q.answer}</b> (${q.phonetic})</span>`;
    const no = document.getElementById("sound-wrong");
    if (no) no.play().catch(() => {});
  }
}

function contextNext() {
  if (contextIndex < contextQueue.length - 1) {
    contextIndex++;
    renderContext();
  } else {
    alert("🎉 Bạn đã hoàn thành phần ngữ cảnh!");
  }
}
/* ==========================
🎴 Part 2: Flashcards Mode
========================== */

let currentCardIndex = 0;
let cardSide = 0; // 0=word, 1=phonetic, 2=meaning

// Hiển thị thẻ đầu tiên
function startFlashcards() {
  document.getElementById("mode-section").classList.add("hidden");
  document.getElementById("flashcard-section").classList.remove("hidden");
  currentCardIndex = 0;
  cardSide = 0;
  renderCard();
}

// Hiển thị nội dung thẻ
function renderCard() {
  const card = document.getElementById("flashcard");
  const wordObj = currentWords[currentCardIndex];
  let content = "";

  if (cardSide === 0) {
    content = `<h2 class="text-3xl font-bold text-blue-800">${wordObj.word}</h2>`;
    playSound(wordObj.audio);
  } else if (cardSide === 1) {
    content = `<h2 class="text-2xl italic text-gray-700">${wordObj.phonetic}</h2>`;
    playSound(wordObj.audio);
  } else {
    content = `<h2 class="text-2xl text-green-800">${wordObj.meaning}</h2>`;
  }

  card.innerHTML = `
    <img src="${wordObj.img}" class="w-24 h-24 mx-auto mb-3" />
    ${content}
  `;
  document.getElementById("card-count").innerText = `${currentCardIndex + 1}/${
    currentWords.length
  }`;
}

// Lật thẻ
function flipCard() {
  cardSide = (cardSide + 1) % 3;
  document.getElementById("flashcard").classList.toggle("flip");
  renderCard();
}

// Thẻ kế tiếp / trước
function nextCard() {
  if (currentCardIndex < currentWords.length - 1) {
    currentCardIndex++;
    cardSide = 0;
    renderCard();
  } else {
    alert("🎉 Bạn đã học xong các từ trong chủ đề này!");
    showModeMenu();
  }
}

function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    cardSide = 0;
    renderCard();
  }
}

// Phát âm thanh từ
function playSound(url) {
  const audio = new Audio(url);
  audio.play();
}

// Quay về menu chế độ
function showModeMenu() {
  document.getElementById("flashcard-section").classList.add("hidden");
  document.getElementById("mode-section").classList.remove("hidden");
}

const _flipBtn = document.getElementById("flip-btn");
if (_flipBtn) _flipBtn.addEventListener("click", flipCard);
const _nextBtn = document.getElementById("next-btn");
if (_nextBtn) _nextBtn.addEventListener("click", nextCard);
const _prevBtn = document.getElementById("prev-btn");
if (_prevBtn) _prevBtn.addEventListener("click", prevCard);
const _backModeBtn = document.getElementById("back-mode-btn");
if (_backModeBtn) _backModeBtn.addEventListener("click", showModeMenu);
/* ==========================
💬 Part 3: Context Mode
========================== */

let currentContextIndex = 0;
let contextQuestions = [];

function startContextMode() {
  document.getElementById("mode-section").classList.add("hidden");
  document.getElementById("context-section").classList.remove("hidden");
  generateContextQuestions();
  currentContextIndex = 0;
  renderContextQuestion();
}

// Tạo câu hỏi điền vào chỗ trống từ dữ liệu hiện có
function generateContextQuestions() {
  contextQuestions = currentWords.map((word) => {
    const sentences = [
      `I have a <b>____</b> in my bag. (${word.meaning})`,
      `He likes to play with a <b>____</b>. (${word.meaning})`,
      `Do you know how to say "${word.meaning}" in English? It’s <b>____</b>.`,
      `We can see the <b>____</b> every morning. (${word.meaning})`,
      `My favorite word today is <b>____</b>. (${word.meaning})`,
    ];
    return {
      sentence: sentences[Math.floor(Math.random() * sentences.length)],
      answer: word.word,
      phonetic: word.phonetic,
      audio: word.audio,
    };
  });
}

// Hiển thị câu hỏi
function renderContextQuestion() {
  const q = contextQuestions[currentContextIndex];
  document.getElementById("context-sentence").innerHTML = q.sentence;
  document.getElementById("context-input").value = "";
  document.getElementById("context-result").innerHTML = "";
  document.getElementById("context-count").innerText = `${
    currentContextIndex + 1
  }/${contextQuestions.length}`;
}

// Kiểm tra đáp án
function checkContextAnswer() {
  const q = contextQuestions[currentContextIndex];
  const userAnswer = document
    .getElementById("context-input")
    .value.trim()
    .toLowerCase();
  const result = document.getElementById("context-result");

  if (userAnswer === q.answer.toLowerCase()) {
    result.innerHTML = `<p class="text-green-600 font-bold">✅ Đúng rồi! (${q.answer}) ${q.phonetic}</p>`;
    playSound(q.audio);
    audioCorrect.play();
    showStars();
  } else {
    result.innerHTML = `<p class="text-red-600 font-bold">❌ Sai rồi! Đáp án đúng là <b>${q.answer}</b> (${q.phonetic})</p>`;
    audioWrong.play();
  }
}

// Câu kế tiếp
function nextContext() {
  if (currentContextIndex < contextQuestions.length - 1) {
    currentContextIndex++;
    renderContextQuestion();
  } else {
    alert("🎉 Bạn đã hoàn thành phần học ngữ cảnh rồi!");
    showModeMenu();
  }
}

const _ctxCheck = document.getElementById("context-check-btn");
if (_ctxCheck) _ctxCheck.addEventListener("click", checkContextAnswer);
const _ctxNext = document.getElementById("context-next-btn");
if (_ctxNext) _ctxNext.addEventListener("click", nextContext);
const _ctxBack = document.getElementById("context-back-btn");
if (_ctxBack) _ctxBack.addEventListener("click", showModeMenu);
/* ==========================
🧠 Part 4: Quiz Mode (Duolingo Style)
========================== */

let quizIndex = 0;
let quizScore = 0;
let quizQuestions = [];

function startQuizMode() {
  document.getElementById("mode-section").classList.add("hidden");
  document.getElementById("quiz-section").classList.remove("hidden");
  generateQuizQuestions();
  quizIndex = 0;
  quizScore = 0;
  renderQuizQuestion();
}

// Sinh câu hỏi random 4 lựa chọn
function generateQuizQuestions() {
  quizQuestions = currentWords
    .map((word) => {
      const options = [word.meaning];
      while (options.length < 4) {
        const randomWord =
          currentTopic.vocabulary[
            Math.floor(Math.random() * currentTopic.vocabulary.length)
          ];
        if (!options.includes(randomWord.meaning))
          options.push(randomWord.meaning);
      }
      return {
        word: word.word,
        correct: word.meaning,
        choices: options.sort(() => Math.random() - 0.5),
        audio: word.audio,
      };
    })
    .sort(() => Math.random() - 0.5);
}

// Hiển thị câu hỏi
function renderQuizQuestion() {
  const q = quizQuestions[quizIndex];
  const container = document.getElementById("quiz-question");
  container.innerHTML = `
    <p class="text-lg font-bold mb-3 text-blue-800">Câu ${quizIndex + 1}/${
    quizQuestions.length
  }</p>
    <h2 class="text-2xl mb-3">${q.word}</h2>
    <div class="grid grid-cols-2 gap-3">
      ${q.choices
        .map(
          (c) => `
        <button class="quiz-option bg-white border border-gray-300 rounded-xl px-3 py-2 hover:bg-yellow-50 transition">${c}</button>
      `
        )
        .join("")}
    </div>
  `;
  playSound(q.audio);
  document.querySelectorAll(".quiz-option").forEach((btn) => {
    btn.addEventListener("click", () => checkQuizAnswer(btn, q));
  });
}

// Kiểm tra đáp án
function checkQuizAnswer(button, question) {
  const allButtons = document.querySelectorAll(".quiz-option");
  allButtons.forEach((b) => (b.disabled = true));

  if (button.innerText === question.correct) {
    button.classList.add("bg-green-400", "text-white");
    audioCorrect.play();
    quizScore++;
    showStars();
  } else {
    button.classList.add("bg-red-400", "text-white");
    audioWrong.play();
    const correctBtn = [...allButtons].find(
      (b) => b.innerText === question.correct
    );
    if (correctBtn) correctBtn.classList.add("bg-green-300");
  }

  setTimeout(() => {
    quizIndex++;
    if (quizIndex < quizQuestions.length) {
      renderQuizQuestion();
    } else {
      showQuizResult();
    }
  }, 1200);
}

// Hiển thị kết quả cuối
function showQuizResult() {
  document.getElementById("quiz-section").classList.add("hidden");
  document.getElementById("result-section").classList.remove("hidden");

  const percent = Math.round((quizScore / quizQuestions.length) * 100);
  document.getElementById("result-score").innerHTML = `
    <p class="text-2xl font-bold">🎯 Điểm của bạn: ${quizScore}/${quizQuestions.length}</p>
    <p class="text-lg text-blue-700">Tỷ lệ chính xác: ${percent}%</p>
  `;
  updateLeaderboard(playerName, quizScore);
}

// Quay về menu
function backToMenu() {
  document.getElementById("result-section").classList.add("hidden");
  document.getElementById("mode-section").classList.remove("hidden");
}

document.getElementById("quiz-back-btn").addEventListener("click", backToMenu);
/* ==========================
🌟 Part 5: Leaderboard + Hiệu ứng & Âm thanh
========================== */

// Cập nhật bảng xếp hạng
function updateLeaderboard(name, score) {
  if (!leaderboard) leaderboard = [];
  leaderboard.push({
    name: name || "Người chơi",
    score,
    date: new Date().toLocaleString(),
  });
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 10); // chỉ giữ top 10
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  renderLeaderboard();
}

// Hiển thị bảng xếp hạng
function renderLeaderboard() {
  const board = document.getElementById("leaderboard");
  if (!board) return;
  const leaderboardData = JSON.parse(
    localStorage.getItem("leaderboard") || "[]"
  );
  if (leaderboardData.length === 0) {
    board.innerHTML = `<li style="padding: 16px; color: var(--duo-text-secondary); text-align: center;">Chưa có dữ liệu xếp hạng</li>`;
    return;
  }
  board.innerHTML = leaderboardData
    .map(
      (item, i) => `
        <li style="padding: 12px; border-bottom: 1px solid var(--duo-border); display: flex; justify-content: space-between; align-items: center;">
          <div>
            <span style="font-weight: 700; color: var(--duo-text); margin-right: 16px;">${
              i + 1
            }.</span>
            <span style="font-weight: 600; color: var(--duo-text);">${
              item.name || "Người chơi"
            }</span>
          </div>
          <div style="display: flex; gap: 24px; align-items: center;">
            <span style="color: var(--duo-green); font-weight: 600;">${
              item.score
            }</span>
            <span style="color: var(--duo-text-secondary); font-size: 12px;">${
              item.date || ""
            }</span>
          </div>
        </li>
      `
    )
    .join("");
}

// 🌠 Hiệu ứng sao bay khi trả lời đúng
function showStars() {
  const starContainer = document.createElement("div");
  starContainer.className =
    "star-container fixed top-0 left-0 w-full h-full pointer-events-none";
  document.body.appendChild(starContainer);

  for (let i = 0; i < 15; i++) {
    const star = document.createElement("div");
    star.className = "star absolute bg-yellow-300 rounded-full";
    const size = Math.random() * 8 + 4;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.opacity = 0.9;
    starContainer.appendChild(star);

    star.animate(
      [
        { transform: "translateY(0px)", opacity: 1 },
        { transform: `translateY(${Math.random() * -100 - 50}px)`, opacity: 0 },
      ],
      {
        duration: 1200 + Math.random() * 400,
        easing: "ease-out",
      }
    );
  }

  setTimeout(() => starContainer.remove(), 1500);
}

// Quay lại chọn chủ đề
function returnHome() {
  document.getElementById("result-section").classList.add("hidden");
  document.getElementById("topic-section").classList.remove("hidden");
  loadTopics();
}

// Thêm sự kiện cho nút "Về trang chủ"
const homeBtns = document.querySelectorAll(".home-btn");
homeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    audioClick.play();
    returnHome();
  });
});

// 🎶 Khi load xong, hiển thị leaderboard luôn
window.addEventListener("DOMContentLoaded", renderLeaderboard);
