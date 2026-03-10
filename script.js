// element selection
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

//function openModal
function openModal() {
    modal.classList.add("show");
}

// function closeModal
function closeModal() {
    modal.classList.remove("show");
}

// menambah event klik untuk open modal
openBtn.addEventListener("click", openModal);

// menambah event klik untuk close modal
closeBtn.addEventListener("click", closeModal);

// menambah event untuk melakukan close modal ketika melakukan klik diluar modal box
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

//  menambah event untuk melakukan close modal ketika tombol esc diklik
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
