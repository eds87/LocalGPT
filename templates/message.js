class MessageTemplate extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.templateLoaded = this.loadTemplate();
    }
  
    async loadTemplate() {
      const response = await fetch('templates/message.html');
      const templateText = await response.text();
      const templateElement = document.createElement('div');
      templateElement.innerHTML = templateText;
      this.template = templateElement.querySelector('template');
    }
  
    async addMessage(sender, message) {
      await this.templateLoaded;
      const templateContent = this.template.content.cloneNode(true);
      templateContent.querySelector('.sender').textContent = sender;
      templateContent.querySelector('.messageText').textContent = message;
      this.shadowRoot.appendChild(templateContent);
    }
  }
  
  customElements.define('message-template', MessageTemplate);