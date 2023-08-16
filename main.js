const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

const allowedKeys = [
    "(",
    ")",
    "/",
    "+",
    "-",
    "*",
    ".",
    "%",
    " ",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
];

document.getElementById("alterTheme").addEventListener("click", (btn) => {
    const html = document.querySelector("html");
    btn.target.innerText =
        btn.target.innerText === "light_mode" ? "dark_mode" : "light_mode";
    html.dataset.theme = html.dataset.theme === "light" ? "dark" : "light";
});

document.querySelectorAll(".charKey").forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.dataset.value;
        input.value += value;
    });
});

document.getElementById("clear").addEventListener("click", () => {
    input.value = "";
    input.focus();
});

document.getElementById("equal").addEventListener("click", calculate);

input.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (allowedKeys.includes(e.key)) {
        input.value += e.key;
        return;
    }
    if (e.key === "Backspace") {
        input.value = input.value.slice(0, -1);
    }
    if (e.key === "Enter") {
        calculate();
    }
});

function calculate() {
    const result = eval(input.value);
    resultInput.value = result;
}
