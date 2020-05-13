import { PadLeadingZeros } from './PadLeadingZeros';

export const FormatDate = (x, format) => {
    let year = x.getFullYear();
    let month = x.getMonth() + 1;
    let date = x.getDate();
    let pad = x => PadLeadingZeros(x, 2);
    if (typeof format === 'undefined' || format="MM/DD/YYYY") {
        return pad(month) + '/' + pad(date) + '/' + year;
    } else if (format === "YYYY-DD-MM") {
        return year + '-' + pad(month) + '-' + pad(date);
    }
    throw "format not recognized";
};