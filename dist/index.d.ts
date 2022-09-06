declare var _kronos: Map<string, {}>;
declare class useKronosState {
    id: string;
    constructor(defaultValue: {}, id: string);
    setValue(newValue: {}): void;
    private getValue;
    get value(): {} | undefined;
}
