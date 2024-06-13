class MessageTemplate extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.templateLoaded = this.loadTemplate();
    }
  
    async loadTemplate() {
      const styleResponse = await fetch('styles.css');
      const styleText = await styleResponse.text();
      const styleElement = document.createElement('style');
      styleElement.textContent = styleText;
    
      const response = await fetch('templates/message.html');
      const templateText = await response.text();
      const templateElement = document.createElement('div');
      templateElement.innerHTML = templateText;
      this.template = templateElement.querySelector('template');

      this.shadowRoot.appendChild(styleElement);
    }
  
    async addMessage(sender, message) {
      await this.templateLoaded;
      const templateContent = this.template.content.cloneNode(true);
      const messageElement = templateContent.querySelector('.message');
      messageElement.classList.add(sender);
      const senderNameElement = templateContent.querySelector('.sender');
      senderNameElement.classList.add(sender);
      templateContent.querySelector('.sender').textContent = sender;
      templateContent.querySelector('.messageText').textContent = message;
      this.shadowRoot.appendChild(templateContent);
      const main = document.querySelector('main');
      main.scrollTop = main.scrollHeight;
    }
  }
  
  customElements.define('message-template', MessageTemplate);