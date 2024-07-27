// script.js

window.addEventListener('load', function() {
    console.log("Window loaded, starting to hide loading animation.");
    var loadingContainer = document.getElementById('loading-container');
    var content = document.getElementById('content');

    // Start hiding the loading container
    loadingContainer.classList.add('hidden');

    // When the transition ends, ensure the loading container is hidden and show content
    loadingContainer.addEventListener('transitionend', function() {
        console.log("Transition ended, removing loading container.");
        loadingContainer.style.display = 'none';
        content.classList.remove('hidden');
        content.classList.add('visible');
        console.log("Content is now visible.");
    });
});
