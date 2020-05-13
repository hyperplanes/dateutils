# dateutils
A very simple library of date methods for javascript. Works with native javascript date objects, no dependencies.

## Getting started
Install from npm
```shell
npm install @hyperplanes/dateutils
```

or reference the transpiled bundle from the `dist` folder in a script tag
```html
<script src="dist/dateutils.bundle.js">
```

## Usage

### `FormatDate` - Returns a string representation with the specified format of a date object. Currently only supports two formats: `"MM/DD/YYYY"` which is the deault, and `"YYYY-MM-DD"`

```js
import {FormatDate} from "@hyperplanes/dateutils";

let date=new Date(2020,4,13);

FormatDate(date); //returns "05/13/2020"
FormatDate(date,"MM/DD/YYYY"); //returns "05/13/2020"
FormatDate(date,"YYYY-MM-DD"); //returns "2020-05-13"
```

### `FormatTimespan` - takes a date object as the argument and returns a string with the common representation of the time component

```js
import {FormatTimespan} from "@hyperplanes/dateutils";

let datetime=new Date(2020,4,13,2,8);

FormatTimespan(datetime); //returns "2:08 pm"
```

### `MilisecondsToMinutes` - takes an integer argument in miliseconds and converts to an integer number of minutes, rounded up to the nearest minute

```js
import {MilisecondsToMinutes} from "@hyperplanes/dateutils";

let ms=70000;

MilisecondsToMinutes(ms); //returns 2
```

### `MinutesToTimeString` - takes a numeric argument in minutes since midnight and returns a string representing the time of day

```js
import {MinutesToTimeString} from "@hyperplanes/dateutils";

let date=new Date(2020,4,13,8,30);


MinutesToTimeString(date.getMinutes()); //returns "8:30 am"
```

### `Now` - Returns a new native date object representing the current time instant. This is a wrapper around `new Date();`

```js
import {Now} from "@hyperplanes/dateutils";

Now(); //returns a date object representing the current time instant
```

### `PadLeadingZeros` - converts the first argument to a string and adds zeros in front until the length of the string matches the integer second argument. This method is included mainly because it is needed by the other formating methods in the library

```js
import {PadLeadingZeros} from "@hyperplanes/dateutils";

let number=1;

PaddLeadingZeros(number,2); //returns "01"

```

### `ParseTimeStringToMinutes` - argument is a string representing the time in common format and converts it to an integer representing minutes since midnight. This is useful for generating a datetime object representing a user time input

```js
import {ParseTimeStringToMinutes} from "@hyperplanes/dateutils";

let time="8:30 am";

let minutes=ParseTimeStringToMinutes(time);//returns 510

let datetime=new Date(2020,4,13);
datetime.setMinutes(minutes); // datetime is mutated to represent the instant 2020-05-13 8:30 am

```

### `SerializeLocalDate` - take a date object and return an ISO-like string but without adjusting for timezone. This is a hack to circumvent unhelpful automatic timezone conversions in some APIs

```js
import {SerializeLocalDate} from "@hyperplanes/dateutils";
let date=new Date(2020,4,13,14,32);

let serialized=SerializeLocalDate(date); //returns "2020-05-13T14:32:00.000Z"
```

### `StringAsISODate` - Convert a string to a native javascript date, but forcing the browser to interpret it as a proper ISO date string. This solves the problem that Safari's date constructor interprets strings differently than the other browsers. The method will throw an exception if the ISO string does not have timezone information.

```js
import {StringAsISODate} from "@hyperplanes/dateutils";

let iso="2020-02-14T08:42:42.420-500";

let date=StringAsISODate(iso); //date representing the correct time instant. Javascript automatically adjusts for timezone
```

### `StringAsLocalDate` - Convert a string to a native javascript, but forcing the browser to interpret the input as local time and not UTC. This solves the problem that Safari's date constructor interprets strings differently than the other browsers. The method will throw an exception if the ISO string has timezone information.

```js
import {StringAsLocalDate} from "@hyperplanes/dateutils";
let local="2020-02-14T08:42:42.420";

let date=StringAsLocalDate(local); //returns date object representing 2020-02-14 8:42 am local time
```

### `strip_seconds` - takes a date argument and returns a new date object but with seconds and miliseconds components set to zero

```js
import {strip_seconds} from "@hyperplanes/dateutils";

let date=new Date(2020,4,13,8,31,42,42);

let result=strip_seconds(date); //date instant representing 2020-05-13 8:31:00.000
```

### `strip_time` - takes a datetime instant argument and returns a new date object representing just the date components, with the hours, minutes, seconds, and miliseconds components set to zero

```js
import {strip_time} from "@hyperplanes/dateutils";
let date=new Date(2020,4,13,8,31,42,42);

let result=strip_time(date); //date instant representing 2020-05-13 00:00:00.000
```

### `Today` - returns a new date object representing just the date, with hours, minutes, seconds and miliseconds set to zero

```js
import {Today} from "@hyperplanes/dateutils";

Today();//returns a date object like 2020-05-13 00:00:00.000

```

### `AddDays` - non-mutating method that takes a date object and number of days as arguments and returns a new date object offset by the specified number of days

```js
import {AddDays} from "@hyperplanes/dateutils";

let date1=new Date(2020,4,13);

let date2=AddDays(date1,-2); //returns new date representing 2020-05-11 without changing the value of date1
```

### `AddMinutes` - non-mutating method that takes a date object and number of minutes as arguments and returns a new date object offset by the specified number of minutes

```js
import {AddMinutes} from "@hyperplanes/dateutils";

let time1=new Date(2020,4,13,8,59);

let time2=AddMinutes(date1,2); //returns new date representing 2020-05-13 9:01 am without changing the value of time1
```

### `cloneDate` - takes a date object as the argument and returns a new date object set to the same instant

```js
import {cloneDate} from "@hyperplanes/dateutils";

let time1=new Date(2020,4,13,8,59);
let time2=cloneDate(time1);
time2.setMinutes(2); //time2 is mutated but time1 is not, because time2 is a reference to a different date object
```
