import EventEmitter from '../event-emitter/event-emitter.js';

export default class View extends EventEmitter{
    constructor(el){
        super();
        this.el = el;
    }
    render(item){
        this.el.innerHTML = `
        <p>Title: ${item.title} </p>
        <p>Description: ${item.description}</p> 
        `
    }
}