//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    const STRING = string.split("\n");
    this.allRows = [];
    this.allColumns = [];

    for(var i=0, tempArray; i<STRING.length; i++) {
      tempArray = STRING[i].match(/\d+/g);
      this.allRows.push(tempArray.map(e => Number(e)));
    }

    for(var i=0, tempArray; i<this.allRows[0].length; i++) {
      tempArray = this.allRows;
      this.allColumns.push(tempArray.map(e => e[i]));
    }
  }

  get rows() {
    return this.allRows;
  }

  get columns() {
    return this.allColumns;
  }
}
