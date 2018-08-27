const othersRadio = document.getElementById('sideRadio12');
const othersInput = document.getElementById('disabledInput');

document.getElementById('sideRadios').addEventListener('click', (e) => {
    if (e.target.tagName != 'INPUT') return;

    if (othersRadio.checked) {
        othersInput.removeAttribute('disabled');
        return;
    }

    othersInput.setAttribute('disabled', '');
})