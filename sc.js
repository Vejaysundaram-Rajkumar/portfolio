function toggleRotation() {
    const toggler = document.querySelector('.toggler');
    const content = document.querySelector('.content');

    toggler.classList.toggle('active');
    content.classList.toggle('show');
}
