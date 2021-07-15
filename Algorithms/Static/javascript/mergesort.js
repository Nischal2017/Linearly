var array = [];
var arr = [];
var n;
var bar_width;
var sp;
var slider;
var compare = [];
function loadJson(selector) {
  return JSON.parse(document.querySelector(selector).getAttribute('data-json'));
}
function preload(){
  jsonData = loadJson('#jsonData');
  if (jsonData.type == "r") {
    rn = true;
    n = jsonData.size;
    sp = jsonData.speed;
  }
  if (jsonData.type == "c") {
    rn = false;
    array = jsonData.scaled_array;
    sp = jsonData.speed;
    arr_samp = jsonData.array;
  }
}
function setup() {
  createCanvas(windowWidth, 450);
  if (rn == true) {
    for (var i = 0; i < n; i++) {
      array.push(round(random(height)));
    }
    arr_samp = array;
  } else {
    n = array.length;
  }
  bar_width = width / n;
  for (var i = 0; i < n; i++) {
    compare.push(-1);
  }
  slider = createSlider(1, 100, sp, 1);
  slider.position(500, 300);
  slider.style('width', '200px');
  frameRate(slider.value());
  mergeSort(array, 0, array.length - 1);
}

function draw() {
  clear();
  textSize(20);
  frameRate(slider.value());
  textAlign(CENTER);
  for (var i = 0; i < n; i++) {
    if (compare[i] == 0) {
      stroke(255, 209, 220);
      fill(255, 209, 220,120);
      rect(bar_width * i, 0, bar_width, array[i]);
    } else if (compare[i] == 1) {
      stroke(93, 212, 204);
      fill(93, 212, 204,120);
      rect(bar_width * i, 0, bar_width, array[i]);
    } else {
      stroke(218, 68, 83);
      fill(218, 68, 83,120);
      rect(bar_width * i, 0, bar_width, array[i]);
    }
  }
}

async function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  var L = new Array(n1);
  var R = new Array(n2);

  for (var i = 0; i < n1; i++) {
    compare[l + i] = -1;
    L[i] = arr[l + i];
  }
  for (var j = 0; j < n2; j++) {
    compare[m + 1 + j] = -1;
    R[j] = arr[m + 1 + j];
  }

  var i = 0;
  var j = 0;
  var k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      await sleep(100);
      compare[k] = 0;
      arr[k] = L[i];
      i++;
    } else {
      await sleep(100);
      compare[k] = 1;
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    await sleep(100);
    compare[k] = 0;
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    await sleep(100);
    compare[k] = 1;
    arr[k] = R[j];
    j++;
    k++;
  }
}

async function mergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  var m = l + parseInt((r - l) / 2);
  await Promise.all([mergeSort(arr, l, m), mergeSort(arr, m + 1, r)]);
  await merge(arr, l, m, r);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
