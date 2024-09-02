const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const notesLink = document.getElementById('notes-link');
const questionsLink = document.getElementById('questions-link');
const notesSubmenu = document.getElementById('notes-submenu');
const questionsSubmenu = document.getElementById('questions-submenu');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

notesLink.addEventListener('click', (e) => {
    e.preventDefault();
    notesSubmenu.classList.toggle('active');
    questionsSubmenu.classList.remove('active');
});

questionsLink.addEventListener('click', (e) => {
    e.preventDefault();
    questionsSubmenu.classList.toggle('active');
    notesSubmenu.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('active');
        notesSubmenu.classList.remove('active');
        questionsSubmenu.classList.remove('active');
    }
});

// Updated Search functionality for card layout
document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const chapterName = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = chapterName.includes(query) ? '' : 'none';
    });
});
