"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importMetaRegistry = void 0;
const node_util_1 = require("node:util");
const DEFAULT_SCRIPT_NAME = 'file:///__main.js';
// - ./runtime/importMetaRegistry.ts (this file) -> importMetaRegistry.url
// - ./runtime/index.ts -> globalThis.__ExpoImportMetaRegistry
// - <source>
const CALL_DEPTH = 3;
exports.importMetaRegistry = {
    get url() {
        const callSites = (0, node_util_1.getCallSites)(CALL_DEPTH);
        let scriptName = callSites[callSites.length - 1]?.scriptName;
        if (scriptName?.[0] === '/')
            scriptName = `file://${scriptName}`;
        return scriptName || DEFAULT_SCRIPT_NAME;
    },
};
//# sourceMappingURL=importMetaRegistry.js.map