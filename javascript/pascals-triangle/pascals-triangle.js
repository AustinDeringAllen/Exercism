//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (num = 0) => {
  let returnArray = new Array(num).fill([]);
  for(let i=0; i<returnArray.length; i++) {
    console.log(i);
    let newArray = [];
    for(let j=0; j<=i; j++) {
      if(j === 0 || j === i) {
        newArray.push(1);
      } else {
        console.log(returnArray[i-1][j-1] + " " + returnArray[i-1][j])
        newArray.push((returnArray[i-1][j-1] + returnArray[i-1][j]));
      }
    }
    returnArray[i-1] = newArray;
  }
  console.log(returnArray);
  return returnArray;
  // let returnArray = new Array(num).fill([]);
  // for(let i=0; i<returnArray.length; i++) {
  //   let newArray = new Array(i);
  //   if(i < 3) {
  //     newArray.fill(1);
  //     continue;
  //   } else {
  //     for(let j=0; j<i; j++) {
  //       if(j === 0 || j === i-1) {
  //         newArray[j] = 1;
  //         continue;
  //       }
  //     }
  //   }
  //   returnArray[i-1] = newArray;
  // }
  // console.log(returnArray);
  // return returnArray;
};
