const split2Span = id => {
  const object = document.getElementById(id),
      text = object.innerText.split("");

  object.innerText = "";
  text.forEach(ch => {
    const span = document.createElement("span");
    span.className = "ch";
    span.innerText = ch;
    object.appendChild(span);
  });
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;


split2Span("mainBtn")