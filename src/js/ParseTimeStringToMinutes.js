export const ParseTimeStringToMinutes = text => {
    try {
        let hasAm = /am/gi.test(text);
        let hasPm = /pm/gi.test(text);
        if (hasAm && hasPm) {
            throw "Time cannot be both AM and PM";
        }
        let numericPart = text.replace(/am/gi, '').replace(/pm/gi, '').trim();
        let hourPart, minutePart;
        if (/\:/gi.test(numericPart)) {
            let parts = text.split(':');
            hourPart = parts[0];
            minutePart = parts[1];
        } else if (numericPart.length === 4) {
            hourPart = numericPart.substring(0, 1);
            minutePart = numericPart.substring(2, 3);
        } else if (numericPart.length === 3) {
            hourPart = numericPart.substring(0, 0);
            minutePart = numericPart.substring(1, 2);
        } else {
            hourPart = numericPart;
            minutePart = 0;
        }
        let h = parseInt(hourPart);
        let m = parseInt(minutePart);

        if ((h > 12 || h < 1) && (hasAm || hasPm)) {
            throw "Hours not consistent with AM/PM";
        }
        if (h < 0 || h > 23) {
            throw "Invalid time";
        }

        let h24 = h;
        if (hasAm && h == 12) {
            h24 = 0;
        } else if (hasPm && h !== 12) {
            h24 = h + 12;
        }
        return 60 * h24 + m;
    } catch{
        return NaN;
    }
};