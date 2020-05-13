import { cloneDate } from "./cloneDate";
export const AddDays = (date, days) => {
    let d = cloneDate(date);
    d.setDate(d.getDate() + days);
    return d;
};