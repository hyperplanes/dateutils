/** @description Interprets ISO string without timezone info as local date rather than UTC
 * @param {string} x datetime formated as string like "2020-02-14T08:42:42.420" (miliseconds optional)
 * @returns {Date} local date
 */
export const StringAsLocalDate = x => {
    //Safari is not consistent with Chrome in whether it assumes string is UTC
    //This forces it to assume UTC, then reinterprets it as local, to standardize behavior
    if (!(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:|\.\d+)$/.test(x))) {
        throw "Not a valid local date: "+x;
    }
    x += "Z";
    let wrong = new Date(x);
    return new Date(wrong.getUTCFullYear(),
        wrong.getUTCMonth(),
        wrong.getUTCDate(),
        wrong.getUTCHours(),
        wrong.getUTCMinutes(),
        wrong.getUTCSeconds(),
        wrong.getUTCMilliseconds());
};