const { ZERO, digits, teens, tens, TEEN_POSTFIX, TEN_POSTFIX, HUNDRED, THOUSAND } = require("./constants");

module.exports = function toReadable(number) {
    if (!Number.isFinite(number)) {
        throw new Error("Number is not finite and can't be converted to human readable form");
    }

    if (number === 0) return ZERO;

    return numberToReadable(number.toString()).trim();
};

function numberToReadable(numberStr) {
    const number = parseInt(numberStr);

    if (number <= 12) return digits[number];
    if (number < 20) return (teens[numberStr.slice(-1)] || digits[numberStr.slice(-1)]) + TEEN_POSTFIX;
    if (number < 100)
        return (
            (tens[numberStr[0]] || teens[numberStr[0]] || digits[numberStr[0]]) +
            TEN_POSTFIX +
            numberToReadable(numberStr.slice(1))
        );
    if (number < 1000) return digits[numberStr[0]] + HUNDRED + numberToReadable(numberStr.slice(1));
    if (number < 10000) return digits[numberStr[0]] + THOUSAND + numberToReadable(numberStr.slice(1));

    throw new Error("Current implementation supports only numbers in the range [0 - 9999]");
}
