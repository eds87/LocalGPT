class MessageTemplate extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      fetch('templates/message.html')
        .then(response => response.text())
        .then(data => {
          const template = document.createElement('div');
          template.innerHTML = data;
          const templateContent = template.querySelector('template').content.cloneNode(true);
          this.shadowRoot.appendChild(templateContent);
        });
    }
  }
  
  customElements.define('message-template', MessageTemplate);