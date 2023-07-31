export const numberToWords = (number) => {
  const ones = ['ones', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  let name = null;

  if (number === 0) {
    name = 'zero';
  } else if (number < 10) {
    name = ones[number];
  } else if (number < 20) {
    name = teens[number - 10];
  } else if (number < 100) {
    const tensDigit = Math.floor(number / 10);
    const onesDigit = number % 10;
    name = tens[tensDigit] + (onesDigit > 0 ? '-' + ones[onesDigit] : '');
  }

  return `${name} characters`;
};