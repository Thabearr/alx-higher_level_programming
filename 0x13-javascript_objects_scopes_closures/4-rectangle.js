#!/usr/bin/node
// Checked Rectangle Class with print(), rotate(), double()
class Rectangle {
  constructor (w, h) {
    if ((w = parseInt(w)) && w > 0 &&
        (h = parseInt(h)) && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    // prints width & height shape with X
    console.log(('X'.repeat(this.width) + '\n').repeat(this.height).split('')
      .slice(0, -1).join(''));
  }

  rotate () {
    // switches width and height
    this.width += this.height;
    this.height = this.width - this.height;
    this.width -= this.height;
  }

  double () {
    // doubles width and height
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle;
