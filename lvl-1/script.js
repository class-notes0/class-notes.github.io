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

// Search functionality
document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const rows = document.querySelectorAll('#chapter-table tbody tr');

    rows.forEach(row => {
        const chapterName = row.cells[0].textContent.toLowerCase();
        row.style.display = chapterName.includes(query) ? '' : 'none';
    });
});
