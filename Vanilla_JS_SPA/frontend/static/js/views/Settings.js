import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }
  async getHtml() {
    return `
        <h1>You are in settings</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui placeat, blanditiis reprehenderit ab quod fuga quaerat quas quos, natus repudiandae pariatur animi, ipsum nulla dolor maiores! Dicta qui eius ipsam.</p>
        <p>
        `;
  }
}
