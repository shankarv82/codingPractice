const undoRedo = (object) => {
    //  Maintain the object state list to perform undo or redo
    // Index is the main reference which says what should be the state after undo or redo
    let state = {
        list: [],
        index: -1,
    };

    // Initialize the object
    state.list.push({ ...object });
    state.index++;

    // Update the state on an action
    const updateState = (item) => {
        state.list.push(item);
        state.index = state.list.length - 1;
    };

    // Set, Get, Delete, Undo and Redo
    return {
        set: function (key, value) {
            // Set the object and update the state
            object[key] = value;
            updateState({ ...object });
        },
        get: function (key) {
            return object[key];
        },
        del: function (key) {
            // Delete the attribute and update the state
            if (object[key]) {
                delete object[key];
                updateState({ ...object });
            }
        },
        undo: () => {
            // Throws an exception if there is no operation to undo.
            if (state.index <= 0) {
                throw "Undo blocked";
            }

            // Update the state index and get the object stat
            object = state.list[--state.index];
        },
        redo: () => {
            // Throws an exception if there is no operation to undo.
            if (state.index >= state.list.length - 1) {
                throw "Redo blocked";
            }

            // Can not redo if index is out of bound
            const currentIndex = state.index + 1;
            if (++state.index >= state.list.length) {
                return;
            }

            // Update the state index and get the object state
            const currentState = state.list[state.index];
            object = { ...currentState };
        },
    };
}
