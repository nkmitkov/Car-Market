const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const get = (key) => JSON.parse(localStorage.getItem(key));

const clear = (key) => localStorage.removeItem(key);

export {
    set,
    get,
    clear,
};