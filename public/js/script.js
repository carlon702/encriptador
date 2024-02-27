const textArea = document.querySelector(".main__text-area");
const output = document.querySelector(".output__message");
const outputInfo1 = document.querySelector(".output-info1");
const outputInfo2 = document.querySelector(".output-info2");

const regex = /[aeiou]/g;
const regex2 = /(enter)|(ober)|(imes)|(ufat)|(ai)/g;

function adjustHeight() {
  let width = window.innerWidth;
  if (width < 768) {
    output.setAttribute("rows", "0");
  }
}
function encryptButton() {
  const encryptedText = encrypt(textArea.value);
  output.style.backgroundImage = "none";
  outputInfo1.style.display = "none";
  outputInfo2.style.display = "none";
  output.value = encryptedText;
}

function decryptButton() {
  const decryptedText = decrypt(textArea.value);
  output.style.backgroundImage = "none";
  outputInfo1.style.display = "none";
  outputInfo2.style.display = "none";
  output.value = decryptedText;
}

function copyText() {
  output.select();
  document.execCommand("copy");
}

function encrypt(string) {
  return string.replace(regex, (match) => {
    switch (match) {
      case "e":
        return "enter";
        break;
      case "i":
        return "imes";
        break;
      case "a":
        return "ai";
        break;
      case "o":
        return "ober";
        break;
      case "u":
        return "ufat";
        break;
      default:
        throw console.error("error");
    }
  });
}

function decrypt(string) {
  return string.replace(regex2, (match) => {
    switch (match) {
      case "enter":
        return "e";
        break;
      case "imes":
        return "i";
        break;
      case "ai":
        return "a";
        break;
      case "ober":
        return "o";
        break;
      case "ufat":
        return "u";
        break;
      default:
        throw console.error("error");
    }
  });
}

adjustHeight();
