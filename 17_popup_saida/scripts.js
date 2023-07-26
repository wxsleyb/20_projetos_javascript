const popup = document.querySelector("#popup");
const cancelButton = document.querySelector("#cancel-button");


localStorage.removeItem("popupDisplayed");

cancelButton.addEventListener("click", () => {

    popup.style.display = "none";
    localStorage.setItem("popupDisplayed", true);


});

document.addEventListener("mouseout", (event) => {
    const popupDisplayed = localStorage.getItem("popupDisplayed");
    if (!popupDisplayed) {
        if (event.relatedTarget === null) {
            popup.style.display = "block";
        }
    }
});