let countEl = document.querySelector("#count-el");
let saveEl = document.querySelector("#save-el");
let incrementBtn = document.querySelector("#increment-btn");
let saveBtn = document.querySelector("#save-btn");
let count = 0;

incrementBtn.addEventListener("click", function () {
  count += 1;
  countEl.textContent = count;
});

saveBtn.addEventListener("click", function () {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
});
