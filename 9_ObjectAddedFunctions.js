function undoRedo(object) {
    let undoCount = 0;

    let lastOperation = {
        data: undefined,
        state: undefined, // Set(1) or Delete(0)
    };

    const updateLastOperation = (state, data) => {
        lastOperation = {
            data,
            state,
        };
    };

    const undoRedo = () => {
        if (lastOperation.state) {
            updateLastOperation(0, {
                key: lastOperation.data.key,
                value: object[lastOperation.data.key],
            });
            delete object[lastOperation.data.key];
        } else {
            updateLastOperation(1, {
                key: lastOperation.data.key,
                value: lastOperation.data.value,
            });
            object[lastOperation.data.key] = lastOperation.data.value;
        }
    };

    return {
        set: function (key, value) {
            if (object[key]) {
                updateLastOperation(0, { key, value: object[key] });
                object[key] = value;
            } else {
                updateLastOperation(1, { key, value });
            }

            object[key] = value;
        },
        get: function (key) {
            return object[key];
        },
        del: function (key) {
            updateLastOperation(0, { key, value: object[key] });
            delete object[key];
        },
        undo: () => {
            if (undoCount >= 1) {
                throw "Undo blocked";
            }
            undoCount++;
            undoRedo();
        },
        redo: () => {
            if (undoCount < 0) {
                throw "Undo blocked";
            }
            undoRedo();
            undoCount--;
        },
    };
}
