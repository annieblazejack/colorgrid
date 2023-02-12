document.querySelector("#app").innerHTML = `
  <div>
    <canvas id="canvas" width="720" height="960">Color Grid</canvas>
  </div>
`;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const hue = [];
const saturation = [];
const luminance = [];

let i = 0;
while (i < 12) {
  hue.push(30 * i);
  i++;
}
console.log(hue);

let j = 1;
while (j < 11) {
  saturation.push(10 * j);
  luminance.push(10 * j);
  j++;
}
console.log(saturation);
console.log(luminance);

let x = 0;
let y = 0;
let x1 = 0;
let y1 = 0;

for (let h = 0; h < hue.length; h++) {
  for (let s = 0; s < saturation.length; s++) {
    for (let l = 0; l < luminance.length; l++) {
      ctx.fillStyle = `hsl(${hue[h]}, ${saturation[s]}%, ${luminance[l]}%)`;
      ctx.fillRect(x * 240 + x1, y * 240 + y1, 24, 24);
      if (x1 < 240 - 24) {
        x1 += 24;
      } else {
        x1 = 0;
        y1 += 24;
      }
    }
  }
  x1 = 0;
  y1 = 0;
  if (x < 2) {
    x++;
  } else {
    x = 0;
    y++;
  }
}

//5760 * 7680
