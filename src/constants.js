const digits = {
  0: "",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
};

const teens = {
  3: "thir",
  4: "four",
  5: "fif",
  8: "eigh",
};

const tens = {
  2: "twen",
  4: "for"
};


const ZERO = "zero";
const TEEN_POSTFIX = "teen";
const TEN_POSTFIX = "ty ";
const HUNDRED = " hundred ";
const THOUSAND = " thousand ";

module.exports = {ZERO, digits, teens, tens, TEEN_POSTFIX, TEN_POSTFIX, HUNDRED, THOUSAND};