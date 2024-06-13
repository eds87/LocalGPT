const webllm = await import('https://esm.run/@mlc-ai/web-llm');

const MODEL = 'gemma-2b-it-q4f16_1-MLC';

const model = await webllm.CreateMLCEngine(MODEL, {
    initProgressCallback: (progress) => {
        const event = new CustomEvent('modelProgress', { detail: progress });
        document.dispatchEvent(event);    }
});

export { model };
