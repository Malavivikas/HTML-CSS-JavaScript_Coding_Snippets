import EventEmitter from "../event-emitter/event-emitter.js";

export default class CustomView extends EventEmitter {
    tagName = 'div';
    className = 'view-item';
    constructor(model) {
        super();
        this.model = model;
        this.init()
    }

    init() {
        this.model.listenTo('changed', this.render.bind(this))
        // this.render();
        this.el = document.createElement(this.tagName);
        this.el.classList.add(this.className);
    }

    render() {
        this.el.innerHTML = `<p>Title: ${this.model.get('title')}</p><p>Description: ${this.model.get('description')}</p>`
        return this
    }
}