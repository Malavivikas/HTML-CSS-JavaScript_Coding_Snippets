const input = `180
3
640 480
120 300
180 180`;
const lines = input.trim().split("\n");
const L = parseInt(lines[0]); //Input length
const N = parseInt(lines[1]); //Input Number of Photos
let length = lines.length;
for (let i = 2; i < length; i++) {
  //Iterate over photos
  const [W, H] = lines[i].split(" ").map(Number); //Split input and destructure width and height

  //conditional printing on console
  if (W < L || H < L) {
    //If any of width or height are less than length
    console.log("UPLOAD ANOTHER");
  } else if (W === H) {
    //width and height both are equal
    console.log("ACCEPTED");
  } else {
    console.log("CROP IT");
  }
}
