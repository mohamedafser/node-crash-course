const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// INIT OBJECT
const myEmitter = new MyEmitter();

// EVENT LISTENER
myEmitter.on("event", () => console.log("Event Fired"));

// INIT EVENT
myEmitter.emit("event");
