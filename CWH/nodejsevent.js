import { EventEmitter } from "node:events";
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("WaterFull", (err) => {
  console.log("Please Turn off the motor");
  setTimeout(() => {
    console.log("Please Turn off the motors")
  }, 3000);
});

console.log("This script is running")
console.log("This script is still  running");
myEmitter.emit('WaterFull')

