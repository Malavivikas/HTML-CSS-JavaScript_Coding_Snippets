import EventEmitter from "../event-emitter/event-emitter.js";
export default class Model extends EventEmitter{
    attributes = {};
    eventType = 'changed';
    constructor(attributes){
        super();
        this.attributes = {...attributes}
    }

    get(attribute){
        return this.attributes[attribute];
    }

    set(attribute, value){
        const oldValue = this.attributes[attribute];
        this.attributes[attribute] = value;
        this.trigger(this.eventType, {value ,oldValue, context: this});
    }
}