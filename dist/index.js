"use strict";
_kronos = new Map();
class useKronosState {
    constructor(defaultValue, id) {
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
module.exports = useKronosState;
