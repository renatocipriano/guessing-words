import { constants } from "@/constants";

export const numberToWords = (number) => {
  if (number === 0) {
    return `${constants.NUMBER_LABEL_ZERO[null]} characters`;
  }
  if (number < 10) {
    return `${constants.NUMBER_LABEL_ONES[number]} characters`;
  }
  if (number < 20) {
    return `${constants.NUMBER_LABEL_TEENS[number - 10]} characters`;
  }

  const tensDigit = Math.floor(number / 10);
  const onesDigit = number % 10;
  let name = `${constants.NUMBER_LABEL_TEENS[tensDigit]}`;
  if (onesDigit > 0) {
    name += `-${constants.NUMBER_LABEL_ONES[onesDigit]}`;
  }

  return `${name} characters`;
};