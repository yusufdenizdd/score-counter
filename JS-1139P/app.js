let takim1skor = document.getElementById("takim1skor");

let takim2skor = document.getElementById("takim2skor");
function takim1golatti() {
  takim1skor.textContent++;
}

function takim2golatti() {
  takim2skor.textContent++;
}

let takim1adi = document.getElementById("takim1adi");
let takim2adi = document.getElementById("takim2adi");
function takim1adidegistir() {
  takim1adi.textContent = prompt(
    takim1adi.textContent + " için yeni bir takım ismi giriniz"
  );
}
function takim2adidegistir() {
  takim2adi.textContent = prompt(
    takim2adi.textContent + " için yeni bir takım ismi giriniz"
  );
}

function takim1golazalt() {
  if (takim1skor.textContent > 0) {
    takim1skor.textContent--;
  } else {
    alert("Skor negatif bir sayı olamaz!");
  }
}

function takim2golazalt() {
  if (takim2skor.textContent > 0) {
    takim2skor.textContent--;
  } else {
    alert("Skor negatif bir sayı olamaz!");
  }
}
function skorlaridegistir() {
  let yeniskor1 = prompt(takim1adi.textContent + " için yeni bir skor giriniz");
  let yeniskor2 = prompt(takim2adi.textContent + " için yeni bir skor giriniz");
  if (!isNaN(yeniskor1) && !isNaN(yeniskor2)) {
    takim1skor.textContent = yeniskor1;
    takim2skor.textContent = yeniskor2;
  } else {
    alert("Skorlar sayı olmak zorundadır!");
  }
}

function skorlarisifirla() {
  takim1skor.textContent = 0;
  takim2skor.textContent = 0;
}
