// Fake popup
const fakePopup = document.getElementById('fakePopup');
const closePopup = document.querySelector('.close-popup');
const secondPopup = document.getElementById('secondPopup');
const closeSecond = document.querySelector('.close-second');

// Show fake popup on load with delay
window.onload = function() {
    setTimeout(() => {
        fakePopup.style.display = 'block';
    }, 3000); // 3 seconds delay
}

// Open portfolio page from first popup
function openModal() {
    fakePopup.style.display = 'none';
    window.location.href = 'portfolio.html';
}

// Close first popup and show second
closePopup.onclick = function() {
    fakePopup.style.display = 'none';
    secondPopup.style.display = 'block';
}

// Close second popup and reopen first (endless loop)
closeSecond.onclick = function() {
    secondPopup.style.display = 'none';
    fakePopup.style.display = 'block';
}

// Click outside
window.addEventListener('click', function(event) {
    if (event.target == fakePopup) {
        fakePopup.style.display = 'none';
        secondPopup.style.display = 'block';
    }
    if (event.target == secondPopup) {
        secondPopup.style.display = 'none';
        fakePopup.style.display = 'block';
    }
});