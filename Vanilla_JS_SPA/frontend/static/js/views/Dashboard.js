import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }
  async getHtml() {
    return `
        <h1>Welcome to the Dashboard</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui placeat, blanditiis reprehenderit ab quod fuga quaerat quas quos, natus repudiandae pariatur animi, ipsum nulla dolor maiores! Dicta qui eius ipsam.</p>
        <p>
        <a href="/posts" data-link>View recent posts</a>
        </p>
        `;
  }
}
