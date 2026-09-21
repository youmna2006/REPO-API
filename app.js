const fs = require("fs");
const EventEmitter = require("events");

const emitter = new EventEmitter();

let content1 = "";
let content2 = "";
let completedFiles = 0;

// Event Listener
emitter.on("filesReady", () => {
    const combinedContent = content1 + "\n" + content2;

    fs.writeFile("file3.txt", combinedContent, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Files merged successfully!");
    });
});

// Read file 1
fs.readFile("file1.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    content1 = data;
    completedFiles++;

    if (completedFiles === 2) {
        emitter.emit("filesReady");
    }
});

// Read file 2
fs.readFile("file2.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    content2 = data;
    completedFiles++;

    if (completedFiles === 2) {
        emitter.emit("filesReady");
    }
});