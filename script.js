let currentIndex = 0;
const messages = document.querySelectorAll('.message');

function updateMessagePosition() {
    const offset = -currentIndex * 100;
    messages.forEach(message => {
        message.style.transform = `translateX(${offset}%)`;
    });
}

function nextMessage() {
    currentIndex = (currentIndex + 1) % messages.length;
    updateMessagePosition();
}

function prevMessage() {
    currentIndex = (currentIndex - 1 + messages.length) % messages.length;
    updateMessagePosition();
}

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
// Initially position the first message
updateMessagePosition();
