
global._kronos = new Map<string, {}>();

class useKronosState {
  id: string;
  constructor(defaultValue: {}, id: string) {
    if (global._kronos === undefined) {
      global._kronos = new Map<string, {}>();
    }
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

export { useKronosState }