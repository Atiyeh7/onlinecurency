// Modal functionality
const modal = document.getElementById('modal');
const viewPortfolioBtn = document.getElementById('viewPortfolio');
const closeBtn = document.querySelector('.close');

// Open modal
viewPortfolioBtn.onclick = function() {
    modal.style.display = 'block';
}

// Close modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Click outside modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Folder click to new page
document.querySelectorAll('.folder-btn').forEach(btn => {
    btn.onclick = function() {
        const folder = this.getAttribute('data-folder');
        window.location.href = folder.replace(/\s+/g, '').toLowerCase() + '.html';
    }
});