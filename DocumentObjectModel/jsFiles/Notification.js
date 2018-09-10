'usee strict';
function notify(message) {
    let text = document.getElementById('notification');
    text.textContent = message;
    text.style.display = 'block';
    setTimeout(function () {
        text.style.display = 'none';
    }, 2000);
}
