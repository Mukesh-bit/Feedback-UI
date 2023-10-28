const rating = document.querySelectorAll(".rating");
const btn = document.querySelector("#btn");
const cont = document.querySelector("#container")

var selectedRating = ""

rating.forEach((rating) => (
    rating.addEventListener("click", (e) => {
        removeActive();
        selectedRating = e.target.innerText || e.target.parentNode.innerText;
        e.target.classList.add("active")
        e.target.parentNode.classList.add("active")
    })
))

const removeActive = () => {
    rating.forEach((rating) => (
        rating.classList.remove("active")
    ))
}

btn.addEventListener("click", () => {
    if(selectedRating !== "") {
        cont.innerHTML = `
            <strong>Thank You!</strong>
            <br>
            <br>
            <strong>feedback: ${selectedRating}</strong>
            <br>
            <br>
            <p>We'll use your feedback to improve our Customer support.</p>

        `
    }
})