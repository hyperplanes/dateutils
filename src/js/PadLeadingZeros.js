export const PadLeadingZeros = (x, digits) => {
    let text = x.toString();
    while (text.length < digits) {
        text = '0' + text;
    }
    return text;
};