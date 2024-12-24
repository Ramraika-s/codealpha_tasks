function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImage.src = imageSrc;
    caption.innerHTML = imageSrc.split('/').pop(); // Display the image name
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close modal with Esc key
document.addEventListener('keydown', function(event ) {
    if (event.key === "Escape") {
        closeModal();
    }
});