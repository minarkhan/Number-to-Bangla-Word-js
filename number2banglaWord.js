var NumToBangla = {
    numtow: {
        '0': 'শুন্য',
        '1': 'এক',
        '2': 'দুই',
        '3': 'তিন',
        '4': 'চার',
        '5': 'পাঁচ',
        '6': 'ছয়',
        '7': 'সাত',
        '8': 'আট',
        '9': 'নয়',
        '10': 'দশ',
        '11': 'এগারো',
        '12': 'বারো',
        '13': 'তেরো',
        '14': 'চৌদ্দ',
        '15': 'পনেরো',
        '16': 'ষোল',
        '17': 'সতেরো',
        '18': 'আঠারো',
        '19': 'ঊনিশ',
        '20': 'বিশ',
        '21': 'একুশ',
        '22': 'বাইশ',
        '23': 'তেইশ',
        '24': 'চব্বিশ',
        '25': 'পঁচিশ',
        '26': 'ছাব্বিশ',
        '27': 'সাতাশ',
        '28': 'আঠাশ',
        '29': 'ঊনত্রিশ',
        '30': 'ত্রিশ',
        '31': 'একত্রিশ',
        '32': 'বত্রিশ',
        '33': 'তেত্রিশ',
        '34': 'চৌত্রিশ',
        '35': 'পঁয়ত্রিশ',
        '36': 'ছত্রিশ',
        '37': 'সাইত্রিশ',
        '38': 'আটত্রিশ',
        '39': 'ঊনচল্লিশ',
        '40': 'চল্লিশ',
        '41': 'একচল্লিশ',
        '42': 'বিয়াল্লিশ',
        '43': 'তেতাল্লিশ',
        '44': 'চুয়াল্লিশ',
        '45': 'পঁয়তাল্লিশ',
        '46': 'ছেচল্লিশ',
        '47': 'সাতচল্লিশ',
        '48': 'আটচল্লিশ',
        '49': 'ঊনপঞ্চাশ',
        '50': 'পঞ্চাশ',
        '51': 'একান্ন',
        '52': 'বায়ান্ন',
        '53': 'তিপ্পান্ন',
        '54': 'চুয়ান্ন',
        '55': 'পঞ্চান্ন',
        '56': 'ছাপ্পান্ন',
        '57': 'সাতান্ন',
        '58': 'আটান্ন',
        '59': 'ঊনষাট',
        '60': 'ষাট',
        '61': 'একষট্টি',
        '62': 'বাষট্টি',
        '63': 'তেষট্টি',
        '64': 'চৌষট্টি',
        '65': 'পঁয়ষট্টি',
        '66': 'ছেষট্টি',
        '67': 'সাতষট্টি',
        '68': 'আটষট্টি',
        '69': 'ঊনসত্তর',
        '70': 'সত্তর',
        '71': 'একাত্তর',
        '72': 'বাহাত্তর',
        '73': 'তিয়াত্তর',
        '74': 'চুয়াত্তর',
        '75': 'পঁচাত্তর',
        '76': 'ছিয়াত্তর',
        '77': 'সাতাত্তর',
        '78': 'আটাত্তর',
        '79': 'ঊনআশি',
        '80': 'আশি',
        '81': 'একাশি',
        '82': 'বিরাশি',
        '83': 'তিরাশি',
        '84': 'চুরাশি',
        '85': 'পঁচাশি',
        '86': 'ছিয়াশি',
        '87': 'সাতাশি',
        '88': 'আটাশি',
        '89': 'ঊননব্বই',
        '90': 'নব্বই',
        '91': 'একানব্বই',
        '92': 'বিরানব্বই',
        '93': 'তিরানব্বই',
        '94': 'চুরানব্বই',
        '95': 'পঁচানব্বই',
        '96': 'ছিয়ানব্বই',
        '97': 'সাতানব্বই',
        '98': 'আটানব্বই',
        '99': 'নিরানব্বই',
        '100': 'একশো',
        '200': 'দুইশো',
        '300': 'তিনশো',
        '400': 'চারশো',
        '500': 'পাঁচশো',
        '600': 'ছয়শো',
        '700': 'সাতশো',
        '800': 'আটশো',
        '900': 'নয়শো'
    },

    /* ES6 version contributed by Swagata Prateek */
    determinant: {
        '': (numLength) => numLength < 3,
        'শত': (numLength) => numLength == 3,
        'হাজার': (numLength) => numLength == 4,
        'অজুত': (numLength) => numLength == 5,
        'লাখ': (numLength) => numLength == 6,
        'নিজুত': (numLength) => numLength == 7,
        'কোটি': (numLength) => numLength >= 8
    },

    convert: function(num) {
        var self = this;

        // local functions
        var isInteger = function(value) {
            return typeof value === 'number' &&
                isFinite(value) &&
                Math.floor(value) === value;
        }

        var digits = (number) => Math.log(number) * Math.LOG10E + 1 | 0;
        var isNegative = (number) => number < 0;
        var split = (number, count) => {
            // Doing math operations in JS, I must have guts
            // Replace with string operations if need be. Wanted to do some perf test
            var digitCount = digits(number);
            count = Math.min(digitCount, count);
            var decpower = 10 ** (digitCount - count);
            var retArr = [Math.floor(number / decpower)]

            if (count !== digitCount) retArr.push(number % decpower);
            return retArr;
        };

        var hasDet = (numLength, determinant) => Object
            .keys(determinant)
            .find(key => determinant[key](numLength));

        var convertInternal = function(number) {
            numLength = digits(number);
            var det = hasDet(numLength, self.determinant);

            var numSplit = [];
            var midterm = '';
            var firstTerm = '';

            if (det) {
                if (det !== 'কোটি') {
                    switch (det) {
                        case 'শত':
                            numSplit = split(number, 1);
                            numSplit[0] = numSplit[0] * 100;
                            break;
                        case 'হাজার':
                            numSplit = split(number, 1);
                            midterm = 'হাজার';
                            break;
                        case 'অজুত':
                            numSplit = split(number, 2);
                            midterm = 'হাজার';
                            break;
                        case 'লাখ':
                            numSplit = split(number, 1);
                            midterm = 'লাখ';
                            break;
                        case 'নিজুত':
                            numSplit = split(number, 2);
                            midterm = 'লাখ';
                            break;
                    }
                    firstTerm = self.numtow[numSplit[0].toString()];
                } else {
                    numSplit = split(number, numLength - 7);
                    midterm = 'কোটি';
                    // recurse again to get the first term with out split
                    firstTerm = convertInternal(numSplit[0]);
                }

                return [
                    firstTerm,
                    midterm,
                    numSplit[1] === 0 ? '' : convertInternal(numSplit[1])
                ].filter(x => x.length > 0).join(" ")
            } else {
                return self.numtow[number.toString()];
            }
        }

        if (!isInteger(num))
            throw new Error("Invalid argument num, expected number, encountered " + typeof num);

        if (isNegative(num))
            throw new Error("Expected positive integer, encountered negative integer");

        return convertInternal(num);
    }
}

console.log(NumToBangla.convert(500000));

function getDatebd(arg) {
    const rojAdd = ' রোজ ';
    const esheAdd = { e: ' ই', she: ' শে' }
    const kalAdd = ' কাল';
    const abodo = ' বঙ্গাব্দ';
    const monthName = [
        'বৈশাখ', //0
        'জ্যৈষ্ঠ ', //1
        'আষাঢ় ', //2
        'শ্রাবণ ', //3
        'ভাদ্র', //4
        'আশ্বিন ', //5
        'কার্তিক ', //6
        'অগ্রহায়ণ ', //7
        'পৌষ ', //8
        'মাঘ', //9
        'ফাল্গুন ', //10
        'চৈত্র ' //11
    ];
    const dayName = [
        'বৃহস্পতিবার',
        'শুক্রবার',
        'শনিবার',
        'রবিবার',
        'সোমবার',
        'মঙ্গলবার',
        'বুধবার',

    ];
    const session = [
        'গ্রীষ্ম',
        'বর্ষা',
        'শরৎ',
        'হেমন্ত',
        'শীত',
        'বসন্ত',
    ];
    const numBd = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const convertNumber = (n) => n.toString().split("").map(num => numBd[num]).join('');
    const addEe = n => {
        let x, y;
        x = n >= 10 && n < 20 ? esheAdd.e : '';
        y = n >= 20 && n <= 31 ? esheAdd.she : '';
        return x || y ? y + x : ''
    }



    const getYear = (dmy) => dmy.month <= 4 && dmy.date <= 13 ? dmy.year - 594 : dmy.year - 593;
    const getMonthDate = (d, m) => {
        switch (true) {
            case m == 1 && d <= 13:
                m = 8;
                d = d + 17;
                break;
            case m == 1 && d > 13:
                m = 9;
                d = d - 13;
                break;
            case m == 2 && d <= 12:
                m = 9;
                d = d + 18;
                break;
            case m == 2 && d > 12:
                m = 10;
                d = d - 12;
                break;
            case m == 3 && d <= 14:
                m = 10;
                d = d + 16;
                break;
            case m == 3 && d > 14:
                m = 11;
                d = d - 14;
                break;
            case m == 4 && d <= 13:
                m = 11;
                d = d + 17;
                break;
            case m == 4 && d > 13:
                m = 0;
                d = d - 13;
                break;
            case m == 5 && d <= 14:
                m = 0;
                d = d + 17;
                break;
            case m == 5 && d > 14:
                m = 1;
                d = d - 14;
                break;
            case m == 6 && d <= 14:
                m = 1;
                d = d + 17;
                break;
            case m == 6 && d > 14:
                m = 2;
                d = d - 14;
                break;
            case m == 7 && d <= 15:
                m = 2;
                d = d + 16;
                break;
            case m == 7 && d > 15:
                m = 3;
                d = d - 15;
                break;
            case m == 8 && d <= 15:
                m = 3;
                d = d + 16;
                break;
            case m == 8 && d > 15:
                m = 4;
                d = d - 15;
                break;
            case m == 9 && d <= 15:
                m = 4;
                d = d + 16;
                break;
            case m == 9 && d > 15:
                m = 5;
                d = d - 15;
                break;
            case m == 10 && d <= 15:
                m = 5;
                d = d + 15;
                break;
            case m == 10 && d > 15:
                m = 6;
                d = d - 15;
                break;
            case m == 11 && d <= 14:
                m = 6;
                d = d + 16;
                break;
            case m == 11 && d > 14:
                m = 7;
                d = d - 14;
                break;
            case m == 12 && d <= 14:
                m = 7;
                d = d + 16;
                break;
            case m == 12 && d > 14:
                m = 8;
                d = d - 14;
            default:
                m = false,
                    d = false;
        }

        return { month: m, date: d };

    }

    var GetdayName = dayName[new Date(arg.year, arg.month, arg.date).getDay()];
    let daymon = getMonthDate(arg.date, arg.month);
    let getSession = session[Math.floor(daymon.month / 2)];

    return {
        day: rojAdd + GetdayName,
        date: convertNumber(daymon.date) + addEe(daymon.date),
        month: monthName[daymon.month],
        session: getSession + kalAdd,
        year: convertNumber(getYear(arg)) + abodo,
    }

}


const setDateEng = (tarik) => {
    let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const arg = {
        date: tarik.getDate(),
        month: tarik.getMonth() + 1,
        year: tarik.getFullYear(),
    }
    console.log(arg)
    const dateEn = {
        day: dayName[tarik.getDay()],
        date: arg.date,
        month: monthName[arg.month - 1],
        year: arg.year
    }

    const dateBd = getDatebd(arg);
    return { dateEn, dateBd }
}


function setDatetimeHtml(dateVal) {
    let { dateEn, dateBd } = setDateEng(new Date(dateVal))
    console.log({ dateEn, dateBd })
    const app = document.getElementById('app');
    const dtext = app.querySelectorAll('[d-text]');
    for (let i = 0; i < dtext.length; i++) {
        let att = dtext[i].getAttribute('d-text');
        if (att) {
            dtext[i].textContent = eval(att);
        }
    }



}

var ms = getDatebd(new Date());
console.log(ms.date);

// setDatetimeHtml(new Date());
// flatpickr("#indate");
// document.getElementById('indate').onchange = function() {
//     setDatetimeHtml(this.value);

// }