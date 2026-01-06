const url = "https://api.dictionaryapi.dev/api/v2/entries/en";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("searchBtn");

// KELİMEYİ GETİREN ANA FONKSİYON
btn.addEventListener("click", async () => {
  const inpWord = document.getElementById("inp-word").value.trim();

  if (inpWord === "") {
    result.innerHTML = "<p>Lütfen kelime giriniz</p>";
    return;
  }

  showLoading();

  try {
    const response = await fetch(`${url}/${inpWord}`);
    const data = await response.json();

    renderResult(data[0]);
  } catch (error) {
    result.innerHTML = "<p>Kelime bulunamadı</p>";
    console.error(error);
  }
});

//SONUCU EKRANA BASAN FONKSİYON (PARAMETRELİ)
function renderResult(wordData) {
  const audioObj = getAudio(wordData.phonetics);

  const definitionsHTML = wordData.meanings[0].definitions
    .map((def) => `<li>${def.definition}</li>`)
    .join("");

  result.innerHTML = `
    <div class="word">
      <h3>${wordData.word}</h3>
      ${
        audioObj
          ? `<button onclick="playSound()">
              <i class="fas fa-volume-up"></i>
            </button>`
          : ""
      }
    </div>

    <div class="details">
      <p>${wordData.meanings[0].partOfSpeech}</p>
      <p>/${wordData.phonetic || ""}/</p>
    </div>

    <ul class="word-meaning">
      ${definitionsHTML}
    </ul>

    <p class="word-example">
      ${
        wordData.meanings[0].definitions[0].example ||
        "Bu kelime için örnek cümle yoktur."
      }
    </p>
  `;
}

// SES DOSYASINI BULAN FONKSİYON (RETURN VAR)
function getAudio(phonetics) {
  return phonetics.find((p) => p.audio);
}

// SES ÇALMA
function playSound() {
  sound.play();
}

// DETAY GÖSTER / GİZL
function toggleDetail() {
  const example = document.getElementById("example");
  example.style.display = example.style.display === "none" ? "block" : "none";
}

// YÜKLENİYOR DURUMU
function showLoading() {
  result.innerHTML = "<p>Yükleniyor...</p>";
}
