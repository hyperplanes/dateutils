export const strip_seconds = x => {
    return new Date(x.getFullYear(), x.getMonth(), x.getDate(), x.getHours(), x.getMinutes(),0,0);
};