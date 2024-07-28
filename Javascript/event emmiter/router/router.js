import EventEmitter from "../event-emitter/event-emitter.js";

export default class Router extends EventEmitter {

    routes = {}
    constructor() {
        super()
        this.setupEventListener()
    }
    setupEventListener() {
        // console.log(this);
        window.addEventListener("hashchange", this.onRoutesChange.bind(this))
    }

    onRoutesChange(event) {
        const hash = this.getURLInfo(event)
        const handler = this.routes[hash];
        handler()
        this.trigger("change", handler)

    }

    getURLInfo(event) {
        return event.target.location.hash.slice(1)
    }

    add(hash, handler) {
        this.routes[hash] = handler
    }

}