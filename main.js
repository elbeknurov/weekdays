const elInput = document.querySelector(".number");
const clickBtn = document.querySelector(".btn");
const content = document.querySelector(".span");

clickBtn.addEventListener("click", function () {
  let value = Number(elInput.value);
  console.log(value);

  switch (value) {
    case 1:
      content.textContent = "Dushanba";
      break;
    case 2:
      content.textContent = "Seshanba";
      break;
    case 3:
      content.textContent = "Chorshanba";
      break;
    case 4:
      content.textContent = "Payshanba";
      break;
    case 5:
      content.textContent = "Juma";
      break;
    case 6:
      content.textContent = "Shanba";
      break;
    case 7:
      content.textContent = "Yakshanba";
      break;
    default:
      alert("Iltimos 1 dan 7 gacha bo`lgan son kiriting");
  }
});
