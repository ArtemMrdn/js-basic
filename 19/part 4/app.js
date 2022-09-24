// имитирует функцию, выполняющую скачивание данных с сервера
function download() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("downloaded data"), 2000);
  });
}

let downloadButton = document.querySelector("#downloadButton");
let loadingIndicator = document.querySelector("#loadingIndicator");
let output = document.querySelector("#output");

downloadButton.addEventListener("click", function () {
  if (loadingIndicator.style.display == "inline") return;
  loadingIndicator.style.display = "inline";

  download()
    .then((result) => (output.innerHTML = result))
    .catch((error) => console.error(error.message))
    .finally(() => (loadingIndicator.style.display = "none"));
});
