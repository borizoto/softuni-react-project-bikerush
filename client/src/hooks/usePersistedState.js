import { useState } from "react"


export const usePersistedState = (storageKey, initialState) => {
    const [state, setState] = useState(() => {
        const persistedStateJson = sessionStorage.getItem(storageKey);

        if (!persistedStateJson) {
            return typeof (initialState) === 'function' ? initialState() : initialState;
        }

        const persistedState = JSON.parse(persistedStateJson);

        return persistedState;
    });

    const setPersistedState = (data) => {
        const persistedState = typeof (data) === 'function' ? data(state) : data;

        const persistedStateJson = JSON.stringify(persistedState);

        sessionStorage.setItem(storageKey, persistedStateJson);

        setState(persistedState);
    }

    return [state, setPersistedState]
}