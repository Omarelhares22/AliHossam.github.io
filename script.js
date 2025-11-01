// Auto-update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact-form handler (demo only – replace with real backend)
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks! This is a demo – in a real site you’d send the data to a server.');
    form.reset();
});