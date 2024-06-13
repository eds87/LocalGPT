(async function() {
    const aimodule = await import('./aimodule.js');

    document.getElementById('messageInput').addEventListener('input', toggleSendButton);

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        const userMessage = document.getElementById('messageInput').value;
        aimodule.sendMessageToModel(userMessage);
        const messageTemplate = document.getElementById('messages');
        messageTemplate.addMessage('User', userMessage);
        document.getElementById('messageInput').value = '';
        document.querySelector('.send-button').disabled = true;
    });
})();

function toggleSendButton() {
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.querySelector('.send-button');
    sendButton.disabled = messageInput.value.trim() === '';
}

document.addEventListener('DOMContentLoaded', async function() {
    const messagesElements = document.getElementById('messages');

    const messageInput = document.getElementById('messageInput');
    messageInput.addEventListener('input', toggleSendButton);
});

document.addEventListener('modelProgress', (event) => {
    const progress = event.detail;
    document.querySelector('small').innerText = progress.text;
});

document.addEventListener('replyReceived', (event) => {
    console.log(event);
    const message = event.detail.content;
    const messageTemplate = document.getElementById('messages');
    messageTemplate.addMessage('LocalGPT', message);
})