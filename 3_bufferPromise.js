// Inspired by
// https://stackoverflow.com/users/12695343/bronislav-r%c5%af%c5%bei%c4%8dka. 
// Thank you Bronislav Růžička

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

// == TESTING ==
const loadRemote = (item) => new Promise((resolve, reject) => {
    console.log("Started", item);
    setTimeout(() => { 
        console.log("Resolved", item);
        resolve(item) 
    }, 2000);
});

const mappingFuntion = bufferPromise(loadRemote, 2);

setTimeout(() => {
    [0,1,2,3,4,5].map(mappingFuntion)
}, 0);

setTimeout(() => {
    [6,7,8,9,10,11,].map(mappingFuntion)
}, 8000);
