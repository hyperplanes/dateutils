import { FormatTimespan } from "./FormatTimespan";
import { Today } from "./today";

export const MinutesToTimeString = (minutes) => {
    let today = Today();
    today.setMinutes(minutes);
    return FormatTimespan(today);
};