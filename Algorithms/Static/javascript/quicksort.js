var vals=[]
var n;
let is_pivot = []
var sp;
var w;
var slider;
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
    vals = jsonData.scaled_array;
    sp = jsonData.speed;
    arr = jsonData.array;
  }
}
function setup() {
  createCanvas(windowWidth, 450);
  if(rn==true){
    for (var i = 0; i < n; i++) {
      vals.push(round(random(height)));
    }
  }else{
    n = vals.length;
  }
  for(var i=0;i<n;i++){
    is_pivot.push(-1);
  }
  slider = createSlider(1, 100, sp, 1);
  slider.position(500, 300);
  slider.style('width', '200px');
  frameRate(slider.value());
  w = width/n;
  qsort(vals,0,n-1);
}
async function qsort(arr,l,r){
  if(l<r){
    let p = await partition(arr,l,r);
    await Promise.all([qsort(arr,l,p-1),qsort(arr,p+1,r)])
  }
}
async function partition(arr,l,r){
  let pivot = arr[l];
  let index = r;
  is_pivot[index] = 0;
  for(let i=r;i>l;i--){
    if(arr[i] > pivot){
      await swap(arr,i,index)
      is_pivot[index] = -1;
      index-=1;
      is_pivot[index] = 0;
    }
  }
  await swap(arr,index,l);
  return index;
}

async function swap(arr,a,b){
  await sleep(250);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function draw() {
  frameRate(slider.value());
  clear()
  for(var i=0;i<n;i++){
    
    if(is_pivot[i]==0){
      stroke(218, 68, 83)
      fill(218, 68, 83,120);
    }else{
      stroke(93, 212, 204)
      fill(93, 212, 204, 120);
    }
    rect(i*w,0,w,vals[i]);
  }
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms))
}