btn = document.querySelector(".btn")
header = document.querySelector("h1")
header2 = document.querySelector("h2")

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    header.textContent = "you just got flashbanged"
    header2.textContent = ""
});