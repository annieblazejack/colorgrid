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
let hu = 0;
while (i < 48) {
  if (i % 2 === 0) {
    hu += 8;
  } else {
    hu += 7;
  }
  hue.push(hu);
  i++;
}
console.log(hue);

let j = 1;
while (j < 6) {
  saturation.push(20 * j);
  j++;
}

let k = 1;
while (k < 6) {
  luminance.push(17 * k + 5);
  k++;
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
      ctx.fillRect(x * 120 + x1, y * 120 + y1, 24, 24);
      if (x1 < 120 - 24) {
        x1 += 24;
      } else {
        x1 = 0;
        y1 += 24;
      }
    }
  }
  x1 = 0;
  y1 = 0;
  if (x < 5) {
    x++;
  } else {
    x = 0;
    y += 1;
  }
}

//5760 * 7680
