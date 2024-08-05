console.log('speaker.js loaded');

document.querySelectorAll('.infoButton').forEach(button => {
button.addEventListener('click', function() {
    console.log('clicked');
    document.querySelector('.layer').classList.toggle('active');
    
});});

// document.querySelector('.popupClose').addEventListener("click", () => {
//     document.querySelector('.layer').classList.remove('activeL');})