import { cloneDate } from "./cloneDate";
export const AddMinutes = (date, minutes) => {
    let d = cloneDate(date);
    d.setMinutes(d.getMinutes() + minutes);
    return d;
};