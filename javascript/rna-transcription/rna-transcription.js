//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (nucleotide) => {
  let from  = ['G','C','T','A'];
  let to    = ['C','G','A','U'];
  let returnString = '';

  for(let i=0;i<nucleotide.length;i++) {
    let index = from.indexOf(nucleotide[i]);
    returnString += to[index];
  }

  return returnString;
};
