var j=0;
var vals=[];
var k=0;
var n;
var w;
var inp;
var sp;
function preload(){
  n=10;
  w=width/n;
  for(var i=0;i<n;i++){
    vals.push(random(height));
  }
}
function setup() {
  createCanvas(1500, 450);
  var btn = select('#submit_sz')
  btn.mousePressed(getN)
  var btn1 =select('#submit_sp')
  btn1.mousePressed(getN)
  var btn2 =select("#end")
  btn2.mousePressed(end)
  inp = select("#size")
  vp = select("#speed")
  frameRate(10)
}
function end(){
  noLoop();
}
function getN(){
  j=0;
  k=0;
  vals=[]
  n = int(inp.value())
  frameRate(int(vp.value()))
  w = width/n
  for(var i=0;i<n;i++){
    vals.push(random(height));
  }
  loop()
}
function draw() {
//   background(0);
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
      // fill(218, 68, 83);
      // rect(i*w,height-vals[i],w,vals[i]);
      rect(i*w,0,w,vals[i]);
      
    }else{
      stroke(93, 212, 204);
      // fill(93, 212, 204);
      // rect(i*w,height-vals[i],w,vals[i]);
      rect(i*w,0,w,vals[i]);
    }
  }
}
function swap(a,b){
  var temp=vals[a];
  vals[a]=vals[b];
  vals[b]=temp;
}