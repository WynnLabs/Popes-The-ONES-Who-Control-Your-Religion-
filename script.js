document.addEventListener('DOMContentLoaded', () => {
    // Toggle content visibility
    document.querySelectorAll('button.toggle').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
