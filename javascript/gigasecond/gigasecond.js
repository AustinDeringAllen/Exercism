//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const gigaSecond = Math.pow(10,9);
  let returnDate = new Date(date);
  console.log(returnDate);
  returnDate.setUTCSeconds(returnDate.getUTCSeconds() + gigaSecond);
  return returnDate;
};
