function EventsArray() {
    this.events = {};
}
EventsArray.prototype = Object.create(Array.prototype);
EventsArray.prototype.constructor = EventsArray;
EventsArray.prototype.pushEvent = function (val) {
    this.push(val);
    if(this.events.push) this.events.push();
}