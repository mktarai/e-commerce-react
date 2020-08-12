export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (ex) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializedData = JSON.stringify(state);
        localStorage.setItem('state', serializedData);
    } catch (ex) {

    }
}
