const approach = 'FORM';    // FORM | AJAX
const form = document.querySelector('form');

form.addEventListener('submit', async function (e) {
    if (approach === 'FORM')
        return;

    e.preventDefault();

    try {
        const response = await fetch('/api/logout', {
            method: 'POST',
            headers: { 'content-type': 'application/json' }
        });

        if (response.status === 200) {
            window.location.replace('/login');
        } else {
            alert('Something went wrong, not able to logout.');
        }
    } catch (error) {
        alert('Something went wrong, not able to logout.');
    }
});
