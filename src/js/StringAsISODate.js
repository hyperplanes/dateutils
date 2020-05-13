/** @description Parses ISO string to Date object, but validates that the string has timezone info
 * @param {string} x datetime formated as string like "2020-02-14T08:42:42.420-500" or "2020-02-14T08:42:42.420Z" (miliseconds optional)
 * @returns {Date} local date
 */
export const StringAsISODate = x => {
    if (!(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:|\.\d+)(?:Z|(?:\+|-)\d{2}\:\d{2})$/.test(x))) {
        throw "Not a valid ISO date: "+x;
    }
    return new Date(x);
};