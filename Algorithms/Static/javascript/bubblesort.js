var j = 0;
var vals = [];
var k = 0;
var n ;
var w;
var inp;
var sp;
var l;
var sub = document.getElementById('submit_sp');

function setup() {
  createCanvas(windowWidth, 300);
  sub.onclick = function () {
    n = document.getElementById('size').value;
    sp = document.getElementById('speed').value;
  };
  w = width / n;
  for (var i = 0; i < n; i++) {
    vals.push(random(height));
  }
  frameRate(sp);
}

function draw() {
  background(0);
  clear()
  if(vals[k]>vals[k+1])
      swap(k,k+1);
  if(j<n){
    k=k+1;
    if(k>=n-j-1){
      k=0;
      j=j+1;
    }
  }else{
    noLoop();
  }
  for(var i=0;i<n;i++){
    if(i==k){
      stroke(218, 68, 83);
      fill(218, 68, 83, 220);
      rect(i*w,0,w,vals[i]);

    }else{
      stroke(93, 212, 204);
      fill(93, 212, 204, 120);
      rect(i*w,0,w,vals[i]);
    }
  }
}
function swap(a, b) {
  var temp = vals[a];
  vals[a] = vals[b];
  vals[b] = temp;
}