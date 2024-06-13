const webllm = await import('https://esm.run/@mlc-ai/web-llm');

const MODEL = 'gemma-2b-it-q4f16_1-MLC';

const messages = [];

const model = await webllm.CreateMLCEngine(MODEL, {
    initProgressCallback: (progress) => {
        const event = new CustomEvent('modelProgress', { detail: progress });
        document.dispatchEvent(event);
    }
});

const sendMessageToModel = async (userMessage) => {
    messages.push({ role: 'user', content: userMessage });
    console.log(messages);
    const reply = await model.chat.completions.create({
        messages: messages
    });
    messages.push(reply.choices[0].message);
    console.log(reply.choices[0].message);
    const event = new CustomEvent('replyReceived', { detail: reply.choices[0].message });
    document.dispatchEvent(event);
};

export { model, sendMessageToModel};
