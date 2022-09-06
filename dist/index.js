"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKronosState = void 0;
global._kronos = new Map();
class useKronosState {
    constructor(defaultValue, id) {
        if (global._kronos === undefined) {
            global._kronos = new Map();
        }
        this.id = id;
        this.setValue(defaultValue);
    }
    setValue(newValue) {
        global._kronos.set(this.id, newValue);
    }
    getValue() {
        return global._kronos.get(this.id);
    }
    get value() {
        return this.getValue();
    }
}
exports.useKronosState = useKronosState;
