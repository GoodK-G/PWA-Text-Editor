const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    //prevent default behavior of the event.
    event.preventDefault();
});


butInstall.addEventListener('click', async () => {
    // Show the install prompt in the window.
    const { installPrompt } = window;
    await installPrompt.prompt();

});

window.addEventListener('appinstalled', (event) => {
    //prompt the user that the app was installed.
    prompt('CONGRATULATIONS App installed!');
});
