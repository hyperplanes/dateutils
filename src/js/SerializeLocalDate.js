import { PadLeadingZeros } from "./PadLeadingZeros";
import { cloneDate } from "./cloneDate";

export const SerializeLocalDate = (datetime, excludeZ) => {
    datetime = cloneDate(datetime);

    //2016-02-22T15:35:00.000Z
    let year = datetime.getFullYear().toString();
    let month = PadLeadingZeros(datetime.getMonth() + 1, 2);
    let day = PadLeadingZeros(datetime.getDate(), 2);
    let hours = PadLeadingZeros(datetime.getHours(), 2);
    let minutes = PadLeadingZeros(datetime.getMinutes(), 2);

    var output = year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':00';

    if (typeof excludeZ !== 'undefined' && !excludeZ) {
        output += '.000Z';
    }

    return output;
};