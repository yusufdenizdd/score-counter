let takim1skor = document.getElementById("takim1skor");

let takim2skor = document.getElementById("takim2skor");
function takim1golatti() {
  takim1skor.innerHTML++;
}

function takim2golatti() {
  takim2skor.innerHTML++;
}

let takim1adi = document.getElementById("takim1adi");
let takim2adi = document.getElementById("takim2adi");
function takim1adidegistir() {
  takim1adi.innerHTML = prompt(
    takim1adi.innerHTML + " için yeni bir takım ismi giriniz"
  );
}
function takim2adidegistir() {
  takim2adi.innerHTML = prompt(
    takim2adi.innerHTML + " için yeni bir takım ismi giriniz"
  );
}

function takim1golazalt() {
  if (takim1skor.innerHTML > 0) {
    takim1skor.innerHTML--;
  } else {
    alert("Skor negatif bir sayı olamaz!");
  }
}

function takim2golazalt() {
  if (takim2skor.innerHTML > 0) {
    takim2skor.innerHTML--;
  } else {
    alert("Skor negatif bir sayı olamaz!");
  }
}
function skorlaridegistir() {
  let yeniskor1 = prompt(takim1adi.innerHTML + " için yeni bir skor giriniz");
  let yeniskor2 = prompt(takim2adi.innerHTML + " için yeni bir skor giriniz");
  if (!isNaN(yeniskor1) && !isNaN(yeniskor2)) {
    takim1skor.innerHTML = yeniskor1;
    takim2skor.innerHTML = yeniskor2;
  } else {
    alert("Skorlar sayı olmak zorundadır!");
  }
}

function skorlarisifirla() {
  takim1skor.innerHTML = 0;
  takim2skor.innerHTML = 0;
}
