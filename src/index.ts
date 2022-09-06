declare var _kronos: Map<string, {}>;
_kronos = new Map<string, {}>();

class useKronosState {
  id: string;
  constructor(defaultValue: {}, id: string) {
    this.id = id;
    this.setValue(defaultValue);
  }

  setValue(newValue: {}) {
    global._kronos.set(this.id, newValue);
  }

  private getValue() {
    return global._kronos.get(this.id);
  }

  get value() {
    return this.getValue();
  }
}

module.exports = useKronosState;