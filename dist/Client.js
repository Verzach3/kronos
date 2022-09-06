"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_ws_1 = require("isomorphic-ws");
const ws = new isomorphic_ws_1.WebSocket("ws://127.0.0.1:8080");
ws.on("open", function open() {
    ws.send("something");
});
ws.on("message", function message(data) {
    console.log("received: %s", data);
});
