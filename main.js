function sendMessage(userMessage) {
    const messageTemplate = document.getElementById('messages');
    messageTemplate.addMessage('User', userMessage);
    document.getElementById('messageInput').value = '';
    document.querySelector('.send-button').disabled = true;
}

function toggleSendButton() {
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.querySelector('.send-button');
    sendButton.disabled = messageInput.value.trim() === '';
}

document.addEventListener('DOMContentLoaded', function() {
    const messages = document.getElementById('messages');
    messages.addMessage('User', 'Hello, I am the user');
    messages.addMessage('LocalGPT', 'Hello, I am the LocalGPT');
    messages.addMessage('User', 'What is your name?');
    messages.addMessage('LocalGPT', 'My name is LocalGPT');
    messages.addMessage('User', 'How old are you?');
    messages.addMessage('LocalGPT', 'I am 100% open source, free, local and private');

    const messageInput = document.getElementById('messageInput');
    messageInput.addEventListener('input', toggleSendButton);
});