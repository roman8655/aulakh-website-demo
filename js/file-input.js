// Displays the chosen file name(s) inside the custom-styled file upload control
document.querySelectorAll('.file-input-native').forEach(function (input) {
    const wrap = input.closest('.file-input');
    if (!wrap) return;
    const nameEl = wrap.querySelector('.file-input-name');
    if (!nameEl) return;
    const defaultText = nameEl.textContent;

    input.addEventListener('change', function () {
        if (input.files && input.files.length > 0) {
            const names = Array.from(input.files).map(f => f.name).join(', ');
            nameEl.textContent = names;
            wrap.classList.add('has-file');
        } else {
            nameEl.textContent = defaultText;
            wrap.classList.remove('has-file');
        }
    });
});
