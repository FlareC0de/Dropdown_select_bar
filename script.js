const optionMenu = document.querySelector(".select-menu"),
    selectBar = optionMenu.querySelector(".select-bar"),
    options = optionMenu.querySelectorAll(".option"),
    sBar_text = optionMenu.querySelector(".sBar-text");

selectBar.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", () =>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBar_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});