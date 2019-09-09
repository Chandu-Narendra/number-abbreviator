const units = ['K', 'M', 'B', 'T'];

_abbreviate = function (number, decPlaces) {
    let fracDigits = decPlaces;
    decPlaces = Math.pow(10, decPlaces)

    for (var i = units.length - 1; i >= 0; i--) {
        var size = Math.pow(10, (i + 1) * 3)
        if (size <= number) {
            // number = Math.round(number * decPlaces / size) / decPlaces
            number = (number/size).toFixed(fracDigits)
            if ((number === 1000) && (i < units.length - 1)) {
                number = 1
                i++
            }
            number += units[i]
            break
        }
    }
    return number
}

abbreviate = function (number, decPlaces) {
    var isNegative = number < 0
    var abbreviatedNumber = _abbreviate(Math.abs(number), decPlaces || 0)

    return isNegative ? '-' + abbreviatedNumber : abbreviatedNumber;
}

let resp = abbreviate(1204,2);
let resp1 = abbreviate(-918045, 2);
console.log("resp", resp, "resp1", resp1);