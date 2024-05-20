// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './MyComponent';

class MyWebComponent extends HTMLElement {
  connectedCallback() {
    const message = this.getAttribute('message') || 'Hello, World!';
    const root = ReactDOM.createRoot(this);
    root.render(<MyComponent message={message} />);
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }
}

customElements.define('my-web-component', MyWebComponent);
