"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
let port = 8080;
app_js_1.server.listen(port, () => {
    console.log("App listen on port 8080");
});
