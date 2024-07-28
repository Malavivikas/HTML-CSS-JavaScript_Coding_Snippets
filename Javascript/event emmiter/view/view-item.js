import EventEmitter from "../event-emitter/event-emitter.js";

export default class ViewItem extends EventEmitter {
    constructor(el, model) {
        super();
        this.el = el;
        this.model = model;
        this.init()
    }

    init() {
        this.model.listenTo('changed', this.render.bind(this))
        this.render();
    }

    render() {
        this.el.innerHTML = `<p>Title: ${this.model.get('title')}</p><p>Description: ${this.model.get('description')}</p>`
        return this
    }
}