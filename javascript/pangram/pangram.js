//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let pangram = true;

  for(let i=0;i<alphabet.length;i++) {
    if(sentence.toLowerCase().indexOf(alphabet[i]) === -1) {
      pangram = false;
      break;
    }
  }

  return pangram;
};
