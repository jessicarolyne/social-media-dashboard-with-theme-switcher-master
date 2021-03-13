const btn = document.querySelector(".botao-dark");
btn.addEventListener("click", () => {
    /*toggle -> adciona a classe se não estiver
    ou remove se estiver*/
    document.body.classList.toggle("dark");
})