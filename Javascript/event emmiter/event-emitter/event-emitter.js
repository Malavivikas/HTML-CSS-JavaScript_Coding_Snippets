export default class EventEmitter {
    listeners = {};

    constructor(){
        this.listeners = {}
    }

    hasEvent(eventType){
        return this.listeners[eventType] != undefined;
    }

    add(eventType, eventHandler){
        this.listeners[eventType].push(eventHandler);
    }

    removeListener(eventType, eventHandlerToRemove){
        const filteredListeners = this.listeners[eventType].filter(listener => listener != eventHandlerToRemove)
        if(this.listeners[eventType].length == 0){
            delete this.listeners[eventType];
        }
        return filteredListeners;
    }

    listenTo(eventType, eventHandler) {
        if (!this.hasEvent(eventType)) {
            this.listeners[eventType] = []
        }
        // this.listeners[eventType].push(eventHandler);
        this.add(eventType, eventHandler);
    }

    trigger(eventType, eventData) {
        // console.log(eventType, eventData);
        if (this.hasEvent(eventType)) {
            this.listeners[eventType].forEach(eventHandler => eventHandler(eventType, eventData));
        }
    }

    remove(eventType, eventHandler) {
        if (this.hasEvent(eventType)) {
            this.listener[eventType] = this.removeListener(eventType, eventHandler)
            // this.listener[eventType].filter((handler) => handler != eventHandler)
        }

    }
}