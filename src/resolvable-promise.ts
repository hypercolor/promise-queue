export class ResolvablePromise<T> {
    public promise: Promise<T>

    constructor(promise: Promise<T>) {
        this.promise = new Promise((resolve, reject) => {

            this.resolve = resolve
            this.reject = reject

            promise
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    public resolve: (value: T | PromiseLike<T>) => void = () => null
    public reject: (reason?: any) => void = () => null
}
