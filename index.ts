export class PromiseQueue {
    constructor(maxConcurrent?: number);
    add(promiseFunction: () => Promise<any>): Promise<any>;
    clear(resolvedResult: any): void;
    runAllCancellable<T>(promiseFunctions: Array<() => Promise<T>>): Promise<Array<T>>;
    runAll<T>(promiseFunctions: Array<() => Promise<T>>): Promise<Array<T>>;
}
