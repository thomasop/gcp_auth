/// <reference types="node" />
declare let app: import("express-serve-static-core").Express;
export declare const server: import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
export default app;
