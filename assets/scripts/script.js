// Seleciona os elementos HTML
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');



// Abre a modal quando o botão é clicado
openModalButton.addEventListener('click', () => {
    videoModal.style.display = 'block';
    videoFrame.setAttribute('src', videoFrame.getAttribute('src'));

});

// Fecha a modal quando o botão de fechar é clicado
closeModalButton.addEventListener('click', () => {

 // Pausar o vídeo
 videoModal.style.display = 'none'
    videoFrame.setAttribute('src', videoFrame.getAttribute('src'));
});

// Fecha a modal se o usuário clicar fora dela
window.addEventListener('click', (event) => {
    if (event.target === videoModal) {
        videoModal.style.display = 'none'
        videoFrame.setAttribute('src', videoFrame.getAttribute('src'));
    }
});