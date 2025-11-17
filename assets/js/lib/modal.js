const modal = document.createElement("div");
modal.id = "modal";

modal.innerHTML = `<div class="modal-content">
        <span id="close-modal">&times;</span>


        <span id="prev" class="nav-btn"><i class="fa-solid fa-angle-left"></i></span>
        
        <img id="modalImg" src="" alt="">
        
        <span id="next" class="nav-btn"><i class="fa-solid fa-angle-right"></i></span>
        
        
        <p id="modalCaption"></p>
    </div>`;
document.body.appendChild(modal);

const portfolioImages = document.querySelectorAll("#workContainer img");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("close-modal");
const modalCaption = document.getElementById("modalCaption");
const imagesArray = Array.from(portfolioImages);

let currentIndex = 0;

function updateModalImage() {
    modalImg.src = imagesArray[currentIndex].src;
    modalCaption.textContent = `IMAGE ${currentIndex + 1}`;
}

imagesArray.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        updateModalImage();
        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


//NEXT//

const next = document.getElementById("next");
next.addEventListener("click", (event) => {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % imagesArray.length;
    updateModalImage();
});

//PREV//

const prev = document.getElementById("prev");
prev.addEventListener("click", (event) => {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
    updateModalImage();
});








export default modal;