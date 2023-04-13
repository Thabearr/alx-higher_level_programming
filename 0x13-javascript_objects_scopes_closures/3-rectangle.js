#!/usr/bin/node
// Checked Rectangle Class with print()
class Rectangle {
  constructor (w, h) {
    if ((w = parseInt(w)) && w > 0 &&
        (h = parseInt(h)) && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    console.log(('X'.repeat(this.width) + '\n').repeat(this.height).split('')
      .slice(0, -1).join(''));
  }
}

module.exports = Rectangle;
