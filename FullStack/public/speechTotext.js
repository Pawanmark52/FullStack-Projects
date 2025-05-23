// script.js

document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('start-btn');
    const textElement = document.getElementById('text');
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang = "en-GB";
    recognition.continuous = true;

    startBtn.addEventListener('click', () => {
        recognition.start();
        textElement.innerText = 'Listening...';
    });

    recognition.onresult = (event) => {
        let transcript = '';
        for (const result of event.results) {
            transcript += result[0].transcript;
        }
        textElement.innerText = transcript;
    };

    recognition.onerror = (event) => {
        textElement.innerText = 'Error occurred: ' + event.error;
    };

    recognition.onend = () => {
        textElement.innerText = 'Speech recognition has stopped.';
    };
});
