import { PadLeadingZeros } from './PadLeadingZeros';

export const FormatTimespan = x => {
    let h = x.getHours();
    let predicate = ' am';
    if (h >= 12) {
        h = h - 12;
        predicate = ' pm';
    }
    if (h === 0) {
        h = 12;
    }
    return h + ':' + PadLeadingZeros(x.getMinutes(), 2) + predicate;
};