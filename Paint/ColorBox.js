//class with all of the color box info
class ColorBox {
  
    constructor(x, y, w, h, color) {
    
      
  }

    //make the color boxes appear on canvas
    appear()
    {
      stroke(0);
      strokeWeight(1);
      fill(this.color);
      rect(this.x, this.y, this.w, this.h);
    }
}