const webllm = await import('https://esm.run/@mlc-ai/web-llm');

const MODEL = 'gemma-2b-it-q4f16_1-MLC';

const model = await webllm.CreateMLCEngine(MODEL, {
    initProgressCallback: (progress) => {
        console.log(progress);
    }
});

export { model };
