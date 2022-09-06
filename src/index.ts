
window._kronos = new Map<string, {}>();

class useKronosState {
  id: string;
  constructor(defaultValue: {}, id: string) {
    if (window._kronos === undefined) {
      window._kronos = new Map<string, {}>();
    }
    this.id = id;
    this.setValue(defaultValue);
  }

  setValue(newValue: {}) {
    window._kronos.set(this.id, newValue);
  }

  private getValue() {
    return window._kronos.get(this.id);
  }

  get value() {
    return this.getValue();
  }
}

export { useKronosState }