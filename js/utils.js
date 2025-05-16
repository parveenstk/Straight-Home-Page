// on press "/" it focus on 'first name input'

document.addEventListener('DOMContentLoaded', () => {
    const firstName = document.getElementById('first-name');

    document.addEventListener('keydown', (event) => {
        event.key === '/' && (event.preventDefault(), firstName.focus())
    });
});
