const bufferPromise = (promiseFactoryFn, maxActive = 5) => {
    // Active promise count
    let activePromiseCount = 0;

    // Buffere promises
    const bufferedPromises = [];

    // Enqueue if requests are more than maxActive else execute
    const enqueuePromise = (promise) => {
        activePromiseCount++;
        if (activePromiseCount <= maxActive) {
            executePromise(promise);
        } else {
            bufferedPromises.push(promise);
        }
    };

    // Execute the promise
    const executePromise = (promise) => {
        // Do not use .catch as its skips .then in the promise chain
        promiseFactoryFn(promise.args)
            .then(promise.resolve, promise.reject)
            .finally(() => {
                activePromiseCount--;
                executeNextPromise();
            });
    };

    // Execute the next promise in the promise chain
    const executeNextPromise = () => {
        if (bufferedPromises.length) {
            executePromise(bufferedPromises.shift());
            activePromiseCount--;
        }
    };

    return (args) =>
        new Promise((resolve, reject) =>
            enqueuePromise({ args, resolve, reject })
        );
}
