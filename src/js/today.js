import { Now } from "./now";
import { strip_time } from "./strip_time";
export const Today = () => strip_time(Now());