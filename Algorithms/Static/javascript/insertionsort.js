var values=[];
var n;
var i=1;
var j,k;
var grp=[];
var arr=[];
var rn;
var sp;
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
    values = jsonData.scaled_array;
    sp = jsonData.speed;
    arr = jsonData.array;
  }
}
function setup() 
{
  createCanvas(windowWidth, 450);
  if(rn==true){
    w = width / n;
    for (var i = 0; i < n; i++) {
      grp.push(0);
      values.push(round(random(height)));
    }
    arr = values;
  }else{
    w = width / values.length;
    n = values.length;
  }
  slider = createSlider(1, 100, sp, 1);
  slider.position(500, 300);
  slider.style('width', '200px');
  frameRate(slider.value());
}

function draw() {
  frameRate(slider.value());
  clear();
  if(i<n){
    k = values[i];
    var k1 = arr[i];
    j=i-1;
    while(j>=0 && k < values[j]){
       values[j+1]=values[j];
       arr[j+1] = arr[j];
       grp[j]=1
       j--;
       grp[j]=0
    }
    values[j+1]=k;
    arr[j+1] = k1;
    i+=1; 
  }else{
    console.log("EnD")
    noLoop();
  }
  textSize(20);
  textAlign(CENTER);
  for(var a=0;a<n;a++){
    if(grp[a]==1){
      stroke(218, 68, 83)
      fill(218, 68, 83,120);
      rect(w*a,20,w,values[a]);
    }else if(values[a]==values[i]){
      stroke(119, 221, 119)
      fill(119, 221, 119,120);
      rect(w*a,20,w,values[a]);
    }else{
      stroke(93, 212, 204)
      fill(93, 212, 204,120);
      rect(w*a,20,w,values[a]);
    }
    if (n <= 20){
      text(arr[a], (a * w), 0, w, 100);
    }
  }
}
