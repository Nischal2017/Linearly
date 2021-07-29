var values = [];
var arr_samp = [];
var bar_width;
var n = 30;
var selection = [];
var compare = [];
var found = [];
var sp;
var slider;
function loadJson(selector) {
  return JSON.parse(document.querySelector(selector).getAttribute('data-json'));
}
function preload(){
  jsonData = loadJson('#jsonData');
  arr_samp=[]
  if (jsonData.type == "r") {
    rn = true;
    n = jsonData.size;
    sp = jsonData.speed;
  }
  if (jsonData.type == "c") {
    rn = false;
    values = jsonData.scaled_array;
    sp = jsonData.speed;
    arr_samp = jsonData.array;
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight/1.8);
  if (rn == true) {
    bar_width = windowWidth / n;
    for (var i = 0; i < n; i++) {
      values.push(round(random(height)));
    }
  }else{
    n = values.length;
    bar_width = windowWidth / n;
  }
  for (var i = 0; i < n; i++) {
    selection.push(-1);
    compare.push(-1);
    found.push(-1);
  }
  slider = createSlider(1, 100, sp, 1);
  slider.position(windowWidth/13,windowHeight/2.4);
  slider.style('width', '200px');
  frameRate(slider.value());
  selectionSort(values, n);
}

function draw() {
  clear();
  textSize(20);
  frameRate(slider.value())
  textAlign(CENTER);
  for (var k = 0; k < n; k++) {
    if (selection[k] == 0) {
        stroke(218, 68, 83);
        fill(218, 68, 83, 120);
        if (n <= 20) {
          text(arr_samp[k], (k * bar_width), 0, bar_width, 100);
        }
        rect(bar_width * k, 20, bar_width, values[k]);
    } else if (compare[k] == 0) {
        stroke(255, 209, 220);
        fill(255, 209, 220,120);
        if (n <= 20) {
          text(arr_samp[k], (k * bar_width), 0, bar_width, 100);
        }
        rect(bar_width * k, 20, bar_width, values[k]);
    } else if (found[k] == 0) {
        stroke(119, 221, 119);
        fill(119, 221, 119,120);
        if (n <= 20) {
          text(arr_samp[k], (k * bar_width), 0, bar_width, 100);
        }
        rect(bar_width * k, 20, bar_width, values[k]);
    } else {
        stroke(93, 212, 204);
        fill(93, 212, 204, 120);
        if (n <= 20) {
          text(arr_samp[k], (k * bar_width), 0, bar_width, 100);
        }
        rect(bar_width * k, 20, bar_width, values[k]);
    }
    }
}

async function swap(arr, xp, yp) {
  await sleep(100);
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
  temp = arr_samp[xp];
  arr_samp[xp] = arr_samp[yp];
  arr_samp[yp] = temp;
}

async function selectionSort(arr, n) {
  var i, j, min_idx;
  for (i = 0; i < n - 1; i++) {
    selection[i] = 0;
    await sleep(100);
    min_idx = i;
    for (j = i + 1; j < n; j++) {
      compare[j] = 0;
      await sleep(100);
      if (arr[j] < arr[min_idx]) {
        await sleep(100);
        min_idx = j;
      }
      compare[j] = -1;
    }
    found[min_idx] = 0;
    await sleep(300);
    swap(arr, min_idx, i);
    found[min_idx] = -1;
    selection[i] = -1;
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
