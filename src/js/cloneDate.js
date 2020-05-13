export const cloneDate = x => {
    if (!(x instanceof Date)) {
        throw "Not a date";
    }
    return new Date(x);
}